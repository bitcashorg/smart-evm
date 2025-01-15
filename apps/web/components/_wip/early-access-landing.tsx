import Image from 'next/image'
import Link from 'next/link'

export function EarlyAccessLanding() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <Section {...heroSection} />
        <Section {...exploreSection} />
        <Section {...joinSection} />
        <Section {...communitySection} />
      </main>
    </div>
  )
}

function Section({
  title,
  description,
  links,
  projects,
  imageSrc,
  imageAlt,
}: SectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {title}
              </h1>
              <p className="max-w-[600px] text-infoForeground md:text-xl">
                {description}
              </p>
            </div>
            {links && (
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {links.map((link) => (
                  <Link
                    key={link.text}
                    className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            )}
            {projects && (
              <ul className="grid gap-6">
                {projects.map((project) => (
                  <li key={project.name}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{project.name}</h3>
                      <p className="text-infoForeground">{project.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {imageSrc && (
            <Image
              alt={imageAlt || ''}
              className="object-cover mx-auto overflow-hidden aspect-square rounded-xl sm:w-full lg:order-last"
              src={imageSrc}
              width="550"
              height="550"
            />
          )}
        </div>
      </div>
    </section>
  )
}

interface SectionProps {
  title: string
  description: string
  links?: { text: string; href: string }[]
  projects?: { name: string; description: string }[]
  imageSrc?: string
  imageAlt?: string
}

const heroSection = {
  title: 'Get early access to the ideas of tomorrow',
  description:
    'Discover highly-vetted Web3 projects supported by industry-leading creators and funds.',
  links: [
    { text: 'Get Early Access', href: '#' },
    { text: 'Learn more', href: '#' },
  ],
  imageSrc: '/images/placeholder.svg',
  imageAlt: 'Hero',
}

const exploreSection = {
  title: 'Explore the latest projects',
  description: 'Discover innovative Web3 projects curated by our team of experts.',
  projects: [
    {
      name: 'Project Alpha',
      description: 'A decentralized platform for creators and fans.',
    },
    {
      name: 'Project Beta',
      description: 'A Web3 gaming ecosystem built on the Ethereum blockchain.',
    },
    {
      name: 'Project Gamma',
      description: 'A decentralized finance (DeFi) platform for lending and borrowing.',
    },
  ],
  imageSrc: '/images/placeholder.svg',
  imageAlt: 'Image',
}

const joinSection = {
  title: 'Join the Web3 revolution',
  description:
    'Be among the first to discover and invest in the most promising Web3 projects.',
  links: [
    { text: 'Get Early Access', href: '#' },
    { text: 'Learn more', href: '#' },
  ],
}

const communitySection = {
  title: 'Join a community of Web3 enthusiasts',
  description:
    'Connect with like-minded individuals, share ideas, and stay up-to-date with the latest developments in the Web3 space. Exclusive access to events, AMAs, and networking opportunities.',
  links: [
    { text: 'Join Community', href: '#' },
    { text: 'Learn More', href: '#' },
  ],
}
