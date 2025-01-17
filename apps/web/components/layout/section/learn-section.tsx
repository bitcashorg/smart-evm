import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '../../shared/section'

export function LearnSection() {
  const mainCard = content.cards[0]
  const secondaryCards = content.cards.filter((_, i) => i > 0)
  return (
    <Section heading={content.sectionTitle}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Link href={mainCard.articleLink}>
          <Card className="relative overflow-hidden min-h-96 bg-[#0F113E] rounded-[48px]">
            <div className="flex flex-col justify-end w-auto shadow-md bg-gradient-to-br from-cornflowerblue-200">
              <picture>
                <source srcSet={mainCard.images[0]} type="image/webp" />
                <source srcSet={mainCard.images[1]} type="image/png" />
                <Image
                  src={mainCard.images[0]}
                  alt={mainCard.title}
                  loading="lazy"
                  width={311}
                  height={309}
                  className="mx-auto bg-[radial-gradient(#7D81D96E,transparent_43%)]"
                />
              </picture>
              <CardHeader className="z-30 px-5 text-center lg:px-16 gap-y-3">
                <CardTitle className="text-[35px] font-semibold leading-normal text-left lg:text-4xl lg:leading-normal">
                  {mainCard.title}
                </CardTitle>
                <div className="w-28 h-[2px] bg-secondary-500 mb-7" />
              </CardHeader>
              <CardContent className="z-30 px-5 text-left lg:px-16 pb-14">
                <div className="flex flex-col items-start justify-center gap-y-5">
                  {mainCard.paragraphs.map((p, i) => (
                    <p
                      key={`main-card_paragraph-${i + 1}`}
                      className="text-base font-medium text-infoForeground"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>

        <div className="grid h-full grid-cols-1 grid-rows-2 gap-8">
          {secondaryCards.map((card, i) => (
            <Link
              href={card.articleLink}
              target="__blank"
              key={`secondary-card_link-${i + 1}`}
            >
              <Card className="relative min-h-44 bg-[#0F113E] rounded-[48px] h-full flex jutify-center items-center">
                <div className="shadow-md bg-gradient-to-b from-cornflowerblue-200 grid grid-cols-[60%_40%] gap-2 items-center justify-center h-full">
                  <CardHeader className="px-5 py-16 pr-0 text-center lg:px-20 lg:pr-0 gap-y-3 lg:gap-y-14">
                    <CardTitle className="mx-auto text-[35px] font-semibold leading-normal text-left lg:text-4xl">
                      {card.title}
                    </CardTitle>
                    <div className="w-28 h-[2px] bg-secondary-600 mt-7" />
                  </CardHeader>
                  <picture>
                    <source srcSet={card.images[0]} type="image/webp" />
                    <source
                      srcSet={card.images[1]}
                      type="image/png"
                      key={`secondary-card_image-${i + 1}`}
                    />
                    <Image
                      src={card.images[0]}
                      alt={card.title}
                      loading="lazy"
                      width={230}
                      height={275}
                      className="mx-auto bg-[radial-gradient(#7D81D96E,transparent_60%)]"
                    />
                  </picture>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

const content = {
  sectionTitle: 'Learn More About Bitlauncher',
  cards: [
    {
      title: 'How to Partcipate in the Bitlauncher Presale?',
      paragraphs: [
        "A good place to start is: what is Bitlauncher? (We'll give you the brief version). Bitlauncher is a platform that connects young projects with early community members through initial decentralized offerings (IDOS). It provides a unique opportunity for contributors to engage with up-and-coming tech innovations.",
        'By participating in an IDO on Bitlauncher, users can gain early access to tokens from new blockchain projects. This early access can potentially lead to significant benefits if the projects grow in value and popularity. Bitlauncher aims to democratize the investment process, making it accessible to a broader audience.',
      ],
      images: [
        '/images/home/platform-circles.webp',
        '/images/home/platform-circles.png',
      ],
      articleLink:
        '/blog/bitlauncher/welcome-to-the-bitlauncher-presale-starting-august-31st',
    },
    {
      title: 'What is the Bitlauncher ($BL) Token?',
      paragraphs: [],
      images: ['/images/home/bl-coins.webp', '/images/home/bl-coins.png'],
      articleLink: '/blog/bitlauncher/what-is-the-bitlauncher-bl-token',
    },
    {
      title: 'What is a Public Token Presale?',
      paragraphs: [],
      images: ['/images/home/glass.webp', '/images/home/glass.png'],
      articleLink: '/blog/bitlauncher/what-is-a-public-token-presale',
    },
  ],
}
