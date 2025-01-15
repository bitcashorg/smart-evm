import { getCMSSdk } from '@/services/datocms/graphql/cms'
import type { LayoutRecord } from '@/services/datocms/graphql/generated/cms'

export async function getLayoutText(): Promise<CMSLayoutText> {
  try {
    const data = await getCMSSdk().query({
      layout: {
        __args: {
          locale: 'en',
          fallbackLocales: ['en'],
        },
        navigationTopic: true,
        navigationCategories: true,
        searchInputPlaceholder: true,
        // followLinks: true,
        backHome: true,
        backBitcash: true,
        navigationPoliciesTerms: true,
        subscriptionTitle: true,
        subscriptionSubtitle: true,
        subscriptionInputPlaceholder: true,
        subscriptionCta: true,
        homeFollowLinks: true,
        cryptoFollowLinks: true,
        bitcoinFollowLinks: true,
        aiFollowLinks: true,
        investingFollowLinks: true,
        startUpsFollowLinks: true,
        cookieConsentDescription: true,
        cookieConsentCta: true,
      },
    })

    return data.layout as CMSLayoutText
  } catch (error) {
    console.error('datocms-layout.service::getLayoutText::[ERROR]', error)

    return {
      navigationTopic: {
        bitcoin: 'Bitcoin',
        gems: 'Gems',
        how_to: 'How To',
        analysis: 'Analysis',
        opinion: 'Opinion',
      },
      navigationCategories: {
        startups: 'Start Ups',
        ai: 'AI',
        investing: 'Investing',
        crypto: 'Cryto',
      },
      searchInputPlaceholder: 'Search',
      homeFollowLinks: {
        telegram: 'https://t.me/bitcash_org',
        twitter: 'https://twitter.com/bitcashorg',
        medium: 'https://medium.com/bitcashBank',
      },
      cryptoFollowLinks: {
        telegram: 'https://t.me/bitcash_org',
        twitter: 'https://twitter.com/bitcashorg',
        medium: 'https://medium.com/bitcashBank',
      },
      bitcoinFollowLinks: {
        telegram: 'https://t.me/bitcash_org',
        twitter: 'https://twitter.com/bitcashorg',
        medium: 'https://medium.com/bitcashBank',
      },
      aiFollowLinks: {
        telegram: 'https://t.me/bitcash_org',
        twitter: 'https://twitter.com/bitcashorg',
        medium: 'https://medium.com/bitcashBank',
      },
      investingFollowLinks: {
        telegram: 'https://t.me/bitcash_org',
        twitter: 'https://twitter.com/bitcashorg',
        medium: 'https://medium.com/bitcashBank',
      },
      startUpsFollowLinks: {
        telegram: 'https://t.me/bitcash_org',
        twitter: 'https://twitter.com/bitcashorg',
        medium: 'https://medium.com/bitcashBank',
      },
      backHome: 'back to home',
      backBitcash: 'back to bitcash.org',
      navigationPoliciesTerms: {
        privacy_policy: 'Privacy Policy',
        terms_and_conditions: 'Terms and Conditions',
      },
      subscriptionTitle: 'Subscribe For The Latest Updates',
      subscriptionSubtitle:
        'Subscribe to the newsletter and never miss the new post every week.',
      subscriptionInputPlaceholder: 'Enter your email here …',
      subscriptionCta: 'Subscribe',
      cookieConsentDescription:
        'This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.',
      cookieConsentCta: 'Accept',
    }
  }
}

export interface CMSLayoutText {
  navigationTopic: LayoutRecord['navigationTopic']
  navigationCategories: LayoutRecord['navigationCategories']
  searchInputPlaceholder: string
  // followLinks: LayoutRecord['followLinks']
  backHome: string
  backBitcash: string
  navigationPoliciesTerms: LayoutRecord['navigationPoliciesTerms']
  subscriptionTitle: string
  subscriptionSubtitle: string
  subscriptionInputPlaceholder: string
  subscriptionCta: string
  homeFollowLinks: LayoutRecord['homeFollowLinks']
  cryptoFollowLinks: LayoutRecord['cryptoFollowLinks']
  bitcoinFollowLinks: LayoutRecord['bitcoinFollowLinks']
  aiFollowLinks: LayoutRecord['aiFollowLinks']
  investingFollowLinks: LayoutRecord['investingFollowLinks']
  startUpsFollowLinks: LayoutRecord['startUpsFollowLinks']
  cookieConsentDescription: string
  cookieConsentCta: string
}
