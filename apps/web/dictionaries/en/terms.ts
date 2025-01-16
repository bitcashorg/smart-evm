import type {
  ContentTextType,
  PageContentData,
} from '@/components/shared/content'

const policiesAndTerms = [
  {
    title: 'Privacy Policy',
    content:
      'We respect your privacy. No personal data is stored or shared with third parties. We only collect emails for our newsletter subscribers and ensure their protection against unauthorized access.',
  },
  {
    title: 'Terms of Service',
    content:
      'By using our services, you agree to our terms. Ensure you understand the risks associated with digital currencies and platforms. We do not store your personal data except for email subscriptions.',
  },
  {
    title: 'No Cookie Policy',
    content:
      'Our website does not use cookies. Your navigation and interaction with our services are private and not tracked by cookies.',
  },
  {
    title: 'Newsletter Subscription',
    content:
      'Subscribers to our newsletter agree to provide their email addresses for regular updates. You can unsubscribe at any time through the link provided in each email.',
  },
  {
    title: 'Data Protection',
    content:
      'We implement rigorous security measures to protect your information. Your email is securely stored and is only used for sending newsletters.',
  },
] as const

// Define the content using mapped policies and terms
const content: PageContentData = [
  {
    type: 'h1',
    text: 'Privacy Policy and Terms of Service for Bitlauncher Participants',
  },
  {
    type: 'p',
    text: 'Understand our commitment to your privacy and your responsibilities when using our crypto launchpad services:',
  },
  ...policiesAndTerms.flatMap((item, index) => [
    { type: 'h2' as ContentTextType, text: `${index + 1}. ${item.title}` },
    { type: 'p' as ContentTextType, text: item.content },
  ]),
]

export const terms = {
  content,
} as const
