import Image from 'next/image'
import Link from 'next/link'

export function LandingPage2({ content }: LandingPage2Props) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-lg dark:bg-gray-800">
              {content.title}
            </div>
            <h2 className="tracking-tighter heading sm:text-5xl">{content.heading}</h2>
            <p className="max-w-[600px] text-infoForeground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.description}
            </p>
          </div>
          <ul className="grid gap-2 py-4">
            {content.features.map((feature, index) => (
              <li key={index}>
                <feature.icon className="inline-block w-4 h-4 mr-2" />
                {feature.text}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            {content.links.map((link, index) => (
              <Link key={index} className={link.className} href={link.href}>
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <Image
          alt={content.image.alt}
          className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full"
          height={content.image.height}
          src={content.image.src}
          width={content.image.width}
          layout="responsive"
        />
      </div>
    </section>
  )
}
interface Feature {
  icon: any
  text: string
}

interface Link {
  href: string
  text: string
  className: string
}

interface Image {
  alt: string
  src: string
  width: number
  height: number
}

export interface LandingPageContent2 {
  title: string
  heading: string
  description: string
  features: Feature[]
  links: Link[]
  image: Image
}

interface LandingPage2Props {
  content: LandingPageContent2
}
