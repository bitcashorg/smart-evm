'use client'

import { registerAddress } from '@/app/actions/register-address'
import { useSession } from '@/hooks/use-session'
import { useSupabaseClient } from '@/services/supabase'
import { Button, type ButtonProps } from '@repo/ui'
import { formatAddress, formatAddressShort } from '@repo/utils'
import { useQuery } from '@tanstack/react-query'
import { useAction } from 'next-safe-action/hooks'
import { useAccount, useSignMessage } from 'wagmi'
import type { SignMessageData } from 'wagmi/query'

export function WhitelistAddressButton({ projectId }: { projectId: number }) {
  const { session, loginOrConnect } = useSession()
  const { address } = useAccount()
  const supabase = useSupabaseClient()
  const { execute, result } = useAction(registerAddress)

  // check if the address is already registered
  const registration = useQuery({
    queryKey: ['registration', session?.account, address],
    enabled: Boolean(session?.account && address),
    queryFn: async () => {
      // this should never happen. see enabled: Boolean(session?.account && address)
      if (!address || !session?.account)
        throw new Error('No address or account')

      const { data, error } = await supabase
        .from('whitelist')
        .select()
        .eq('project_id', projectId)
        .eq('account', session.account)
        .single()

      if (error) throw error

      return data
    },
  })

  // sign the message to register the address
  const { signMessage, isPending } = useSignMessage({
    mutation: {
      onSuccess: async (signed_message: SignMessageData) => {
        if (!session || !address) return

        await execute({
          address,
          project_id: projectId,
          account: session.account,
          signed_message,
        })
      },
    },
  })

  const handleRegister = () => {
    if (!address || !session?.account) return loginOrConnect()
    signMessage({ message: 'Sign me up for bitlauncher | bitcash presale' })
  }

  const whitelistedAddress =
    registration.data?.address || result.data?.info?.address

  return whitelistedAddress && whitelistedAddress === address ? (
    <RegisterButton text={'You are whitelisted!'} />
  ) : whitelistedAddress && whitelistedAddress !== address ? (
    <RegisterButton
      text={`Whitelisted address ${formatAddressShort(whitelistedAddress)}!`}
    />
  ) : (
    <div className="flex justify-center">
      <RegisterButton
        text={
          !session?.account
            ? 'Login with Bitcash'
            : !address
              ? 'Connect EVM Wallet'
              : isPending
                ? `Whitelisting ${formatAddress(address)}`
                : 'Get Whitelisted'
        }
        onClick={handleRegister}
      />
    </div>
  )
}

function RegisterButton(props: ButtonProps & { text: string }) {
  return (
    <Button variant="tertiary" {...props}>
      {props.text}
    </Button>
  )
}
