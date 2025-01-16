import { IconDownRightArrow } from '@/components/ui/icons'
import { useReferral } from '@/hooks/use-referral'
import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'

interface ReferalHomeBannerProps {
  onClose: () => void
  onJoinNow: () => void
  onHowItWorks: () => void
  isOpen: boolean
}

export default function ReferralHomeBanner({
  isOpen,
  onClose,
  onJoinNow,
  onHowItWorks,
}: ReferalHomeBannerProps) {
  const { bitcashRegisterUri } = useReferral()
  const referrer =
    new URL(bitcashRegisterUri).searchParams.get('referrer') || 'merivercap'
  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => {
    setIsVisible(isOpen)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      //? Hides banner when user has scrolled past 40% of the page
      //TODO: Replicate this with CSS as performance feat @bran18
      if (scrollPosition > (documentHeight - windowHeight) * 0.1) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  if (!isVisible) return null
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a29] bg-opacity-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#1a1a4ab4] to-[#0d0d35a0] backdrop-blur-[30px] rounded-3xl p-8 max-w-6xl w-full relative">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="absolute top-4 right-4 text-[#e728a9] hover:text-[#ff51ed] transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold lg:text-7xl sm:text-3xl">
            {content.title}
          </h1>
          <p className="text-4xl font-semibold sm:text-2xl lg:text-6xl">
            <span className="text-[#ec4899] font-bold">{referrer}</span> Invited
            You To Contribute In The Next{' '}
            <span className="text-[#ec4899] font-bold">GLOBAL AI UNICORNS</span>
          </p>
          <div className="mx-auto w-[120px] h-[2.37px] bg-[#ff51ed]" />
          <p className="max-w-md mx-auto text-[#7a7ca8] text-lg md:text-xl font-semibold leading-[29px]">
            {content.paragraph2}
          </p>
          <div className="bg-[#0F113E] md:w-1/2 px-16 py-[2.625rem] mx-auto shadow-md bg-gradient-to-br to-cornflowerblue-20 rounded-lg justify-between items-center">
            <Button
              variant="tertiary"
              className="flex items-center gap-6 p-6 mx-auto font-semibold rounded-full group"
              onClick={onJoinNow}
            >
              {content.callToAction}
              <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white" />
            </Button>
            <Button
              variant="cta"
              className="py-0 text-sm"
              onClick={onHowItWorks}
            >
              {content.callToAction2}
              <span className="block max-w-0 group-hover:max-w-full group-focus-within:max-w-full transition-all duration-500 h-0.5 bg-[#ff00aa]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const content = {
  title: <>Congrats!</>,
  paragraph2: (
    <>
      Seamlessly buy and pay with cryptocurrencies using our secure and
      user-friendly platform.
    </>
  ),
  callToAction: <>JOIN NOW</>,
  callToAction2: <>How does it work?</>,
}
