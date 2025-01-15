import { TestnetMBOTSPL, type TokenContractData } from '@repo/auction'
import { merge } from 'lodash'
import type { StaticImageData } from 'next/image'
import BitcashPic from '../assets/img/bitcash.webp'
import MasterbotsPic from '../assets/img/masterbots.webp'
import WizartPic from '../assets/img/wizartworld.webp'

export function getProjects(dict: any) {
  return merge(projects, dict.projects) as Project[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Bitlauncher | Bitcash',
    slug: 'bitcash-bitlauncher',
    pitch: 'Building Ai & Crypto Apps For The New Global Economy.',
    fundraiseGoal: '$400,000',
    maxAllocation: '$1,500',
    heroImage: '/images/projects/bitcash-cover.webp',
    thumbnailImage: BitcashPic,
    badgeText: 'LIVE',
    linkPath: '/bitcash-bitlauncher',
    token: TestnetMBOTSPL,
    auctionId: 9,
    presaleOpen: false,
    twitterUsername: 'bitcashorg',
    telegramGroup: 'bitlauncher',
    discordServer: 'KuR48XUxnG',
    // September 15, 2024
    presaleStart: '2024-09-15T00:00:00Z',
    presaleId: 1, // in database
  },
  {
    id: 2,
    title: 'Masterbots',
    slug: '',
    pitch:
      'Elevating AI Beyond ChatGPT: Specialized Chatbots, Social Sharing and User-Friendly Innovation',
    fundraiseGoal: '$200,000',
    maxAllocation: '$10,000',
    heroImage: '/images/projects/masterbots.webp',
    thumbnailImage: MasterbotsPic,
    badgeText: 'COMING SOON',
    linkPath: '#',
    auctionId: 9,
    token: TestnetMBOTSPL,
    presaleOpen: true,
    twitterUsername: 'masterbotsai',
    telegramGroup: 'bitlauncher',
    discordServer: 'KuR48XUxnG',
    presaleStart: '',
  },
  {
    id: 3,
    title: 'WizartWorld',
    slug: '',
    pitch: 'Unleash The Master Artist In You - Generate Ai Art & NFTs.',
    fundraiseGoal: '$200,000',
    maxAllocation: '$10,000',
    heroImage: '/images/projects/wizartworld.webp',
    thumbnailImage: WizartPic,
    badgeText: 'FUTURE',
    linkPath: '#',
    token: TestnetMBOTSPL,
    auctionId: 9,
    twitterUsername: 'wizartworld',
    telegramGroup: 'bitlauncher',
    discordServer: 'KuR48XUxnG',
    presaleStart: '2024-09-15T00:00:00Z',
  },
  {
    id: 4,
    title: 'Bitlauncher Test',
    slug: 'bitlauncher-test',
    pitch: 'Building Ai & Crypto Apps For The New Global Economy.',
    fundraiseGoal: '$400,000',
    maxAllocation: '$1,500',
    heroImage: '/images/projects/bitcash-cover.webp',
    thumbnailImage: BitcashPic,
    badgeText: 'LIVE',
    linkPath: '/bitlauncher-test',
    token: TestnetMBOTSPL,
    auctionId: 9,
    presaleOpen: true,
    twitterUsername: 'bitcashorg',
    telegramGroup: 'bitlauncher',
    discordServer: 'KuR48XUxnG',
    // September 15, 2024
    presaleStart: '2024-09-15T00:00:00Z',
    presaleId: 2, // in database
  },
]

export interface Project {
  id: number
  title: string
  slug: string
  pitch: string
  fundraiseGoal: string
  maxAllocation: string
  heroImage: string
  thumbnailImage: string | StaticImageData
  badgeText: string
  linkPath: string
  twitterUsername: string
  telegramGroup: string
  discordServer: string
  content?: Record<
    'highlights' | 'product' | 'problem' | 'solution' | 'businessModel' | 'tokenomics',
    ContentSection
  >
  auctionId?: number
  token?: TokenContractData
  presaleOpen?: boolean
  registrationOpen?: boolean
  auctionClosed?: boolean
  presaleId?: number
  presaleStart?: string
}

export interface ContentSection {
  title: string
  content: string | string[][]
  image: string
}

export interface ProjectContent {
  id: number
  content: Record<
    'highlights' | 'product' | 'problem' | 'solution' | 'businessModel' | 'tokenomics',
    ContentSection
  >
}
export type ProjectWithAuction = Required<Pick<Project, 'auctionId' | 'token'>> & Project

export async function getProjectBySlug(slug: string, dict: any) {
  const project = projects.find((p) => p.slug == slug)
  if (!project) return null
  const content = dict.projects.find((c: any) => c.id == project.id)?.content || {}
  return { ...project, content } as Project
}
