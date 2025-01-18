import type {
  ContentItem,
  ContentTextType
} from "@/components/shared/content";

const policiesAndTerms = [
  {
    title: "Privacy Policy",
    content: "Last Updated: January 17, 2025.",
  },
  {
    title: "Introduction",
    content: "We respect your privacy. No personal data is stored or shared with third parties. We only collect emails for our newsletter subscribers and Twitter Reader app login, ensuring their protection against unauthorized access. This Privacy Policy explains how we collect, use, and protect your information when you use our service.",
  },
  {
    title: "Terms of Service",
    content: "By using our services, you agree to our terms. Ensure you understand the risks associated with digital currencies and platforms. We do not store your personal data except for email subscriptions.",
  },
  {
    title: "No Cookie Policy",
    content: "Our website does not use cookies. Your navigation and interaction with our services are private and not tracked by cookies.",
  },
  {
    title: "Information We Collect",
    content: "We collect information you provide when creating an account, Twitter authentication tokens (through OAuth), your categorization preferences and smart list settings, usage data and analytics, and device information and log data.",
  },
  {
    title: "How We Use Your Information",
    content: "We use your information to provide and maintain the Twitter Reader service, create and manage your personalized content categories, improve and optimize our service, communicate with you about service updates, and comply with Twitter's API terms and conditions.",
  },
  {
    title: "Data Storage and Security",
    content: "We store your data securely using industry-standard encryption. We do not sell your personal information to third parties. We retain your data only as long as necessary to provide our service. You can request deletion of your account and associated data at any time.",
  },
  {
    title: "Third-Party Services",
    content: "We use Twitter's API services to access Twitter content and standard analytics tools to improve our service. Your use of our app is also subject to Twitter's Privacy Policy.",
  },
  {
    title: "Your Rights",
    content: "You have the right to access your personal information, correct inaccurate data, request deletion of your data, export your data, and opt-out of non-essential data collection.",
  },
  {
    title: "Updates to Privacy Policy",
    content: "We may update this Privacy Policy from time to time. We will notify you of any material changes through the app or via email.",
  },
  {
    title: "Newsletter Subscription",
    content: "Subscribers to our newsletter agree to provide their email addresses for regular updates. You can unsubscribe at any time through the link provided in each email.",
  },
  {
    title: "Data Protection",
    content: "We implement rigorous security measures to protect your information. Your email is securely stored and is only used for sending newsletters.",
  },
  {
    title: "Contact Us",
    content: "If you have questions about this Privacy Policy, please contact us at legal@bitlauncher.ai.",
  },
  {
    title: "Children's Privacy",
    content: "Our service is not intended for users under the age of 13, and we do not knowingly collect information from children under 13.",
  },
] as const;

const content: ContentItem[] = [
  {
    type: "h1",
    text: "Privacy Policy and Terms of Service for Bitlauncher Participants",
  },
  {
    type: "p",
    text: "Understand our commitment to your privacy and your responsibilities when using our crypto launchpad services:",
  },
  ...policiesAndTerms.flatMap((item, index) => [
    { type: 'h2' as ContentTextType, text: `${index + 1}. ${item.title}` },
    { type: 'p' as ContentTextType, text: item.content },
  ]),
];

export const terms = {
  content,
} as const
