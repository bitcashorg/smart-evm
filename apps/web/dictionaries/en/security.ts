import type {
  ContentTextType,
  PageContentData,
} from '@/components/shared/content'

const securityTips = [
  {
    title: 'Beware of Phishing Attacks',
    content:
      'Phishing is a common technique used by attackers to gain access to your personal information. Always verify the URL of the Bitlauncher and ensure it is the legitimate site before connecting your MetaMask wallet. Be cautious of emails or websites impersonating Bitlauncher.',
  },
  {
    title: 'MetaMask Security',
    content:
      'When using MetaMask, never share your seed phrase with anyone. Be cautious of any website or person asking for your MetaMask credentials. Always lock your MetaMask wallet when not in use.',
  },
  {
    title: 'Impersonation on Discord and Social Media',
    content:
      'Be wary of individuals on platforms like Discord and social media who claim to be representatives of Bitlauncher. Official staff will never ask for your private keys or wallet credentials.',
  },
  {
    title: 'Secure Your Digital Environment',
    content:
      'Ensure that your computer and internet connection are secure. Use antivirus software, enable firewalls, and update your software regularly to prevent malware attacks.',
  },
  {
    title: 'Double-Check Transaction Details',
    content:
      'Before confirming any transaction on MetaMask, double-check the recipients address, the amount, and the gas fees. Scammers often try to manipulate transaction details.',
  },
  {
    title: 'Stay Informed and Updated',
    content:
      'Follow only the official Bitlauncher channels for updates and information. Do not trust unverified sources.',
  },
  {
    title: 'Report Suspicious Activities',
    content:
      'If you encounter any suspicious activity or believe you are a victim of a scam, contact the official Bitlauncher support immediately.',
  },
] as const

// Define the content using mapped security tips
const content: PageContentData = [
  { type: 'h1', text: 'Security Tips for Bitlauncher Participants' },
  {
    type: 'p',
    text: 'Participating in auctions on Bitlauncher, a fork of Gnosis, requires vigilance and awareness of various security threats. Here are some crucial tips to help keep your investments safe:',
  },
  ...securityTips.flatMap((tip, index) => [
    { type: 'h2' as ContentTextType, text: `${tip.title}` },
    { type: 'p' as ContentTextType, text: tip.content },
  ]),
  // { type: 'hr' }
]

export const security = {
  content,
} as const
