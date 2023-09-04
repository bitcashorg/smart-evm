import React, { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { HashLink } from 'react-router-hash-link'
import { useAccount, useConnect, useDisconnect, useSwitchNetwork } from 'wagmi'

import { chainNames } from '../../../constants'
import { useWalletModalToggle } from '../../../state/application/hooks'
import { useOrderPlacementState } from '../../../state/orderPlacement/hooks'
import { getChainName } from '../../../utils/tools'
import { ButtonConnect } from '../../buttons/ButtonConnect'
import { ButtonMenu } from '../../buttons/ButtonMenu'
import { Logo } from '../../common/Logo'
import { Tooltip } from '../../common/Tooltip'
import { UserDropdown } from '../../common/UserDropdown'
import WalletModal from '../../modals/WalletModal'
import { Mainmenu } from '../../navigation/Mainmenu'
import { Mobilemenu } from '../../navigation/Mobilemenu'
import { InnerContainer } from '../../pureStyledComponents/InnerContainer'
import { NetworkError, useNetworkCheck } from '../../web3/Web3Status'

const Wrapper = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-shrink: 0;
  position: fixed;
  z-index: 12345;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.mainBackground};
`

const Inner = styled(InnerContainer)`
  align-items: center;
  flex-flow: row;
  flex-grow: 1;
  flex-shrink: 0;
  height: ${({ theme }) => theme.header.height};
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.layout.horizontalPadding};
  padding-right: ${({ theme }) => theme.layout.horizontalPadding};
`

const LogoLink = styled(HashLink)`
  display: none;

  @media (min-width: ${({ theme }) => theme.themeBreakPoints.md}) {
    display: block;
  }
`

const ButtonMenuStyled = styled(ButtonMenu)`
  display: block;
  position: relative;
  z-index: 5;

  @media (min-width: ${({ theme }) => theme.themeBreakPoints.md}) {
    display: none;
  }
`

const ButtonConnectStyled = styled(ButtonConnect)`
  margin-left: auto;
  position: relative;
  z-index: 5;

  @media (min-width: ${({ theme }) => theme.themeBreakPoints.md}) {
    margin-left: 0;
  }
`

const UserDropdownStyled = styled(UserDropdown)`
  margin-left: auto;
  position: relative;
  z-index: 5;

  @media (min-width: ${({ theme }) => theme.themeBreakPoints.md}) {
    margin-left: 0;
  }
`

const Menu = styled(Mainmenu)`
  display: none;

  @media (min-width: ${({ theme }) => theme.themeBreakPoints.md}) {
    display: flex;
    margin-left: auto;
  }
`

const Error = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.error};
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 100%;
  line-height: 1.2;

  .tooltipComponent {
    top: 0;

    .tooltipIcon {
      height: 16px;
      width: 16px;

      .fill {
        fill: ${({ theme }) => theme.error};
      }
    }
  }
`

const ErrorText = styled.span`
  margin-right: 8px;
`

export const Component: React.FC = (props) => {
  const location = useLocation()
  const { connector, isConnected } = useAccount()
  const { chainId } = useOrderPlacementState()
  const { disconnectAsync } = useDisconnect()
  const { connectAsync } = useConnect()
  const { errorWrongNetwork } = useNetworkCheck()
  const { switchNetworkAsync } = useSwitchNetwork()
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  const toggleWalletModal = useWalletModalToggle()

  const mobileMenuToggle = () => {
    setMobileMenuVisible(!mobileMenuVisible)
  }

  const chains = Object.keys(chainNames)
  let chainNamesFormatted = ''

  for (let count = 0; count < chains.length; count++) {
    const postPend = count !== chains.length - 1 ? ', ' : '.'

    chainNamesFormatted += getChainName(Number(chains[count])) + postPend
  }

  const isAuctionPage = React.useMemo(
    () => location.pathname.includes('/auction'),
    [location.pathname],
  )
  const chainMismatch = React.useMemo(
    () => errorWrongNetwork === NetworkError.noChainMatch && isAuctionPage,
    [errorWrongNetwork, isAuctionPage],
  )
  const trySwitchingNetworks = useCallback(async (): Promise<void> => {
    if (switchNetworkAsync && chainId && chainMismatch)
      switchNetworkAsync(chainId).catch(() => {
        localStorage.removeItem('walletconnect')
        disconnectAsync().then(() => connectAsync({ connector, chainId }))
      })
  }, [switchNetworkAsync, disconnectAsync, connectAsync, connector, chainId, chainMismatch])

  React.useEffect(() => {
    trySwitchingNetworks()
  }, [trySwitchingNetworks])

  return (
    <>
      <Wrapper className="siteHeader" {...props}>
        <Inner>
          <ButtonMenuStyled className={mobileMenuVisible && 'active'} onClick={mobileMenuToggle} />
          {mobileMenuVisible && <Mobilemenu onClose={() => setMobileMenuVisible(false)} />}
          <LogoLink className="logoLink" to="/#topAnchor">
            <Logo />
          </LogoLink>
          <Menu />
          {!isConnected && <ButtonConnectStyled onClick={toggleWalletModal} />}
          {isConnected && chainMismatch && (
            <Error onClick={trySwitchingNetworks}>
              <ErrorText>Connect to the {getChainName(chainId)} network</ErrorText>
              <Tooltip text={`Supported networks are: ${chainNamesFormatted}`} />
            </Error>
          )}
          {isConnected && !chainMismatch && <UserDropdownStyled disabled={mobileMenuVisible} />}
        </Inner>
      </Wrapper>
      <WalletModal />
    </>
  )
}

export const Header = Component
