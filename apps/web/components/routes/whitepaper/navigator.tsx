import type { SVGProps } from 'react'

export const NextArrowComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={27}
    fill="none"
    viewBox="0 0 26 27"
    {...props}
  >
    <title>Next</title>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2.558}
      d="m13.348 23.306 10.087-10.087L13.348 3.132M21.812 13.062H3.587"
    />
  </svg>
)

export const PrevArrowComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={27}
    fill="none"
    {...props}
  >
    <title>Prev</title>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2.558}
      d="M12.651 23.306 2.565 13.219 12.65 3.132M4.188 13.062h18.225"
    />
  </svg>
)

interface NavigationContainerProps {
  prevTitle?: string
  nextTitle?: string
  onPrevClick: () => void
  onNextClick: () => void
}

export const NavigationContainer = ({
  prevTitle = '',
  nextTitle = '',
  onPrevClick,
  onNextClick,
}: NavigationContainerProps) => {
  const nextLabel =
    nextTitle.length > 10 ? `${nextTitle.slice(0, 10).trim()}...` : nextTitle
  const prevLabel =
    prevTitle.length > 10 ? `${prevTitle.slice(0, 10).trim()}...` : prevTitle
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between px-2.5 py-[43px] relative border-b border-solid border-[#433974] gap-4">
      <div
        className={`inline-flex items-center justify-center gap-6 px-8 py-[9px] relative flex-[0_0_auto] bg-[#845abe] rounded-[40px] overflow-hidden cursor-pointer ${nextTitle ? 'opacity-100' : 'opacity-50'} md:min-w-[240px] md:max-w-[240px] min-w-[332px] max-w-full h-[60px]`}
        onClick={nextTitle ? onNextClick : undefined}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onNextClick()
          }
        }}
      >
        <div className="relative flex-1 font-normal text-transparent text-lg tracking-[0] leading-[25.4px] overflow-hidden whitespace-nowrap">
          <span className="text-[#433974]">
            NEXT
            <br />
          </span>
          {nextTitle ? (
            <span className="text-white">{nextLabel}</span>
          ) : (
            <span>&#8205;</span>
          )}
        </div>
        <NextArrowComponent />
      </div>
      <div
        className={`inline-flex items-center justify-center gap-6 px-8 py-[9px] relative flex-[0_0_auto] bg-[#845abe] rounded-[40px] overflow-hidden cursor-pointer ${prevTitle ? 'opacity-100' : 'opacity-50'} md:min-w-[240px] md:max-w-[240px] min-w-[332px] max-w-full h-[60px]`}
        onClick={prevTitle ? onPrevClick : undefined}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onPrevClick()
          }
        }}
      >
        <PrevArrowComponent />
        <div className="relative flex-1 font-normal text-[#433974] text-lg tracking-[0] leading-[25.4px] overflow-hidden whitespace-nowrap">
          <span className="text-[#433974]">
            PREV
            <br />
          </span>
          {prevTitle ? (
            <span className="text-white">{prevLabel}</span>
          ) : (
            <span>&#8205;</span>
          )}
        </div>
      </div>
    </div>
  )
}
