import Image from 'next/image'

export function LandingPage({ content }: LandingPageProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-lg dark:bg-gray-800">
              {content.title}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {content.header}
            </h2>
            <p className="max-w-[600px] text-infoForeground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.description}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {content.sections.map((section) => (
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{section.subHeader}</h3>
                  <p className="text-infoForeground">{section.text}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            alt="Vetting Process"
            className="object-cover object-center mx-auto overflow-hidden aspect-square rounded-xl sm:w-full"
            height={550}
            src="/images/placeholder.svg"
            width={550}
          />
        </div>
      </div>
    </section>
  )
}

interface LandingPageProps {
  content: LandingPageContent
}

type LandingPageSection = {
  subHeader: string
  text: string
}

export interface LandingPageContent {
  title: string
  header: string
  description: string
  sections: LandingPageSection[]
}
