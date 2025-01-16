import { NewHomeHero } from '@/components/routes/home/hero/index'
import { getDictionary } from '@/dictionaries'
import type { Lang } from '@/dictionaries/locales'
import { getProjects } from '@/lib/projects'
import dynamic from 'next/dynamic'

export default async function IndexPage({ params: { lang } }: IndexPageProps) {
  const dict = await getDictionary(lang)
  const projects = getProjects(dict)

  return (
    <div className="container max-w-[100vw] !overflow-hidden mx-auto md:px-4">
      <NewHomeHero />
      <DynamicUpcoming projects={projects} dict={dict} />

      <div className="narrow-container">
        <DynamicFeatures lang={lang} dict={dict} id="features" />
        <DynamicWhyChooseUs lang={lang} dict={dict} />
        <DynamicStepsSection lang={lang} dict={dict} id="steps" />
        <DynamicReferralSection />
        <DynamicLearnSection />
        <DynamicRecentArticles lang={lang} />
        <DynamicFAQ lang={lang} dict={dict} />
      </div>
    </div>
  )
}

interface IndexPageProps {
  params: { lang: Lang }
}

const DynamicFeatures = dynamic(
  () => import('@/components/routes/home/features').then((mod) => mod.Features),
  { ssr: false },
)

const DynamicUpcoming = dynamic(
  () => import('@/components/routes/home/upcoming').then((mod) => mod.Upcoming),
  { ssr: false },
)

const DynamicWhyChooseUs = dynamic(
  () =>
    import('@/components/routes/home/why-choose-us').then(
      (mod) => mod.WhyChooseUs,
    ),
  { ssr: false },
)

const DynamicStepsSection = dynamic(
  () => import('@/components/routes/home/section/steps-section'),
  { ssr: false },
)

const DynamicLearnSection = dynamic(
  () =>
    import('@/components/routes/home/section/learn-section').then(
      (mod) => mod.LearnSection,
    ),
  { ssr: false },
)

const DynamicRecentArticles = dynamic(
  () =>
    import('@/components/routes/home/section/recent-articles').then(
      (mod) => mod.RecentArticles,
    ),
  { ssr: false },
)

const DynamicFAQ = dynamic(
  () =>
    import('@/components/routes/home/section/faq-section').then(
      (mod) => mod.FAQ,
    ),
  { ssr: false },
)

const DynamicReferralSection = dynamic(
  () =>
    import('@/components/routes/home/section/referral-section').then(
      (mod) => mod.ReferralSection,
    ),
  { ssr: false },
)
