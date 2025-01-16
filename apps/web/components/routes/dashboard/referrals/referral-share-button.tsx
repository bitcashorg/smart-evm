'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { IconTelegram, IconTwitterX } from '@/components/ui/icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useMediaQuery } from '@/hooks/use-media-query'
import { cn } from '@/lib/utils'
import { Share } from 'lucide-react'
import { Facebook, Linkedin, Phone, X } from 'lucide-react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share'
import { useState } from 'react'

export default function ReferralShareButton({
  url,
  title,
}: { url: string; title: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const socialMediaList = [
    {
      name: 'X',
      shareComponent: TwitterShareButton,
      Icon: IconTwitterX,
    },
    {
      name: 'LinkedIn',
      shareComponent: LinkedinShareButton,
      Icon: Linkedin,
    },
    {
      name: 'Telegram',
      shareComponent: TelegramShareButton,
      Icon: IconTelegram,
    },
    {
      name: 'Facebook',
      shareComponent: FacebookShareButton,
      Icon: Facebook,
    },
    {
      name: 'WhatsApp',
      shareComponent: WhatsappShareButton,
      Icon: Phone,
    },
  ]

  if (isDesktop) {
    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="tertiary"
            className="relative rounded-full w-full h-full max-w-28 md:max-w-56 gap-x-2"
          >
            <span>Share</span>
            <Share className="w-4 h-4 mr-2" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="my-5 w-[210px] p-0 bg-[#433974] px-6 py-5 flex flex-col justify-center items-start gap-y-4 border-none rounded-md"
          align="start"
        >
          {socialMediaList.map((network) => (
            <network.shareComponent key={network.name} url={url} title={title}>
              <div className="flex justify-center items-center gap-x-3 cursor-pointer">
                <network.Icon
                  className={cn(
                    network.name === 'WhatsApp'
                      ? 'rounded-full border border-white p-0.5'
                      : '',
                  )}
                  fill="white"
                  stroke="transparent"
                />
                <p className="text-base font-medium text-white">
                  {network.name}
                </p>
              </div>
            </network.shareComponent>
          ))}
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="tertiary"
          className="relative rounded-full w-full h-full max-w-28 md:max-w-56 gap-x-2"
        >
          <span>Share</span>
          <Share className="w-4 h-4 mr-2" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white text-textInfoForeground p-5 [&>div:first-child]:hidden">
        <div className="w-full flex justify-between items-center gap-x-4 mb-6">
          <DrawerTitle className="text-base font-medium text-textInfoForeground">
            Share my referral link on
          </DrawerTitle>
          <X onClick={() => setIsOpen(!isOpen)} fill="black" stroke="black" />
        </div>

        <div className="w-full flex justify-start items-center gap-x-14 overflow-auto scroll">
          {socialMediaList.map((network) => (
            <network.shareComponent key={network.name} url={url} title={title}>
              <network.Icon
                className={cn(
                  'w-8 h-8',
                  network.name === 'WhatsApp'
                    ? 'rounded-full border border-text-textInfoForeground p-0.5'
                    : '',
                )}
                fill="text-textInfoForeground"
                stroke="transparent"
              />
            </network.shareComponent>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
