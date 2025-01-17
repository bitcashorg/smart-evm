'use client'

import { SessionDialog } from '@/components/dialogs/session/session-dialog'
import { OnboardingCarousel } from '@/components/shared/onbording-carousel'
import { useSession } from '@/hooks/use-session'
import { Dialog, DialogContent, DialogTrigger, IconDownRightArrow, IconReferral } from '@repo/ui'
import { useRouter } from 'next/navigation'
import { isMobile } from 'react-device-detect'

import { Button } from '@repo/ui'
import React from 'react'

export function ReferralSection() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const { session, toggleShowSessionDialog, loginRedirect } = useSession()
  const router = useRouter()

  const bitcashAccount = session?.account

  const handleCallToAction = () => {
    if (bitcashAccount) {
      router.push('/dashboard/referral')
    } else {
      isMobile ? loginRedirect() : toggleShowSessionDialog()
    }
  }

  return (
    <div className="flex items-center justify-center px-4 pt-20">
      <div className="flex flex-col items-center w-full max-w-4xl gap-8 p-8 bg-[#0F113E] rounded-xl md:flex-row">
        <div className="flex-shrink-0 w-[245px] h-[245px]">
          <div className="w-[207px] h-[186.71px] bg-[#7c80d9]/40 rounded-full blur-[135.70px] translate-y-[-50%] shadow-lg absolute" />
          <IconReferral className="relative" />
        </div>
        <div className="flex flex-col items-center flex-grow text-center ">
          <h2 className="mb-4 text-cente text-[2.188rem] font-bold leading-normal text-white">
            {content.title}
          </h2>
          <div className="w-12 h-1 bg-[#ff00aa] mb-4" />
          <p className="mb-4 text-xl font-normal text-white opacity-40">
            {content.paragraph}
          </p>
          <p className="mb-6 font-bold text-white">{content.paragraph2}</p>
          <div className="flex flex-col items-center gap-3 text-xl">
            <Button
              variant="tertiary"
              className="flex items-center gap-6 p-6 mx-auto font-semibold rounded-full group"
              onClick={handleCallToAction}
            >
              {content.callToAction}
              <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white" />
            </Button>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="cta"
                  className="h-auto py-0 text-sm"
                  onClick={() => setIsModalOpen(true)}
                >
                  {content.callToAction2}
                  <span className="block max-w-0 group-hover:max-w-full group-focus-within:max-w-full transition-all duration-500 h-0.5 bg-[#ff00aa]" />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-auto p-0 bg-transparent border-none shadow-none max-w-none">
                <OnboardingCarousel onClose={() => setIsModalOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <SessionDialog />
    </div>
  )
}

const content = {
  title: <>Earn For Sharing With Friends!</>,
  paragraph: (
    <>
      Join our referral program and earn exclusive rewards for every friend you
      refer. The more you share, the more you earn!
    </>
  ),
  paragraph2: <>SHARE • REGISTER • CONTRIBUTE • EARN</>,
  callToAction: <>Start Earning Now</>,
  callToAction2: <>How does it work?</>,
}
