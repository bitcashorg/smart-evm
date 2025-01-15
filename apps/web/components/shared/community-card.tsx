import { cn } from '@/lib/utils'
import { Suspense } from 'react'
import { NestedLinkButton } from '../nextjs/nested-link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button, buttonVariants } from '../ui/button'
import { Card } from '../ui/card'
import { IconDownRightArrow } from '../ui/icons'

export function CommunityCard() {
  return (
    <Card className="flex items-center justify-center rounded-[30px] bg-white text-center shadow-lg md:gap-3 sm:p-4">
      <div className="flex items-center justify-center -space-x-3">
        <Avatar>
          <AvatarImage src="/images/home/hero/user-one.png" />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/home/hero/user-two.png" />
          <AvatarFallback>U2</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/home/hero/user-three.png" />
          <AvatarFallback>U3</AvatarFallback>
        </Avatar>
      </div>
      <b className="text-sm flex items-center px-2 leading-tight text-black whitespace-pre-line">
        {`Join Our Community
        of Contributors`}
      </b>
      <Suspense
        fallback={
          <Button className="flex h-14 w-14">
            <IconDownRightArrow />
          </Button>
        }
      >
        <NestedLinkButton
          link={'/en/bitcash-bitlauncher'}
          className={cn(
            buttonVariants({
              variant: 'secondary',
            }),
            'text-md group relative flex size-14 min-h-14 min-w-14 rounded-full bg-pink-500 !p-0 font-bold hover:bg-pink-500',
          )}
          aria-label={`View`}
        >
          <IconDownRightArrow
            strokeColor="white"
            className="!size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45"
          />
        </NestedLinkButton>
      </Suspense>
    </Card>
  )
}
