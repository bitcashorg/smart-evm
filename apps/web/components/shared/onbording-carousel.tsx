import React from 'react'

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui'

import Image from 'next/image'

interface OnboardingCarouselProps {
  onClose: () => void
}

const steps = [
  {
    title: 'Step 1: Share your link',
    description:
      'Unlock the power of your network! Grab your unique referral link and spread the word about Bitlauncher across social media, email, and messaging apps. Be the catalyst for change and innovation.',
    image: '/images/home/bl-coins.webp',
    id: 'step-1',
  },
  {
    title: 'Step 2: Wait referrer to register',
    description:
      'Your referred friends sign up using your special link, joining the Bitlauncher community and gaining access to innovative projects.',
    image: '/images/referal/step2.webp',
    id: 'step-2',
  },
  {
    title: 'Step 3: Do contributions',
    description:
      'Your friends explore the frontier of innovation, discovering and contributing to the AI and web3 projects that ignite their passion. Their support fuels the future of technology.',
    image: '/images/referal/step3.webp',
    id: 'step-3',
  },
  {
    title: 'Step 4: Receive your earnings!',
    description:
      "As auctions close, you'll earn up to 20% of your friends' contributions in project tokens. Watch your rewards grow as you champion innovation!",
    image: '/images/referal/step4.webp',
    id: 'step-4',
  },
]

export function OnboardingCarousel({ onClose }: OnboardingCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="relative w-full min-w-[17.5rem] md:max-w-[40rem] mx-auto bg-[#0F113E] shadow-md bg-gradient-to-b from-cornflowerblue-200 rounded-lg overflow-hidden">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {steps.map((step, index) => (
            <CarouselItem key={step.id}>
              <div className="flex flex-col items-center justify-center p-4 md:p-9 h-[31.25rem]">
                <h2 className="mb-4 font-bold text-center sm:text-xl md:text-3xl lg:text-4xl">
                  {step.title}
                </h2>
                <div className="w-[120px] h-[2.37px] bg-[#ff51ed]" />
                <div className="relative mb-6 w-[15.394rem] h-[13.75rem] md:w-[20rem] md:h-[15rem] my-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="max-w-md pb-8 text-sm text-center text-[#7a7ca8]">
                  {step.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-0 left-0 right-0 px-4">
          <div className="grid items-center grid-cols-3">
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative w-10 h-10 text-white scale-125 bg-transparent border-none hover:text-black" />
            </div>
            <div className="flex justify-center space-x-2">
              {steps.map((st, index) => (
                <div
                  key={st.id}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? 'bg-white' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <CarouselNext className="relative w-10 h-10 text-white scale-125 bg-transparent border-none hover:text-black" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
