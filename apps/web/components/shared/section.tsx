import type React from 'react'
import Balancer from 'react-wrap-balancer'

export function Section({ heading, children, id }: SectionProps) {
  return (
    <section
      className="flex flex-col justify-center pt-20 text-center align-center lg:pt-40"
      {...(id ? { id } : {})}
    >
      <h2 className="relative z-10 flex justify-center w-full pb-10 text-center shadow-sm heading">
        <Balancer>{heading}</Balancer>
      </h2>
      <div className="m-auto mb-4 h-[2.37px] w-[118.61px] bg-accent-400" />
      <div className="w-full pt-10">{children}</div>
    </section>
  )
}

interface SectionProps {
  heading: string
  subheading?: string
  children: React.ReactNode
  id?: string
}
