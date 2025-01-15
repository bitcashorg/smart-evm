import { BlogSections } from '@/components/routes/blog/blog-sections'
import { type MediaSection, MediaSections } from '@/components/shared/media-sections'
import { Section } from '@/components/shared/section'
import type { ArticlesSection } from '@/services/datocms'
import type { LangProp } from '@/types/routing.type'

export async function RecentArticles({ lang }: LangProp) {
  const recentMedia: MediaSection[] = [
    {
      title: 'Shorts',
      videos: latestShorts,
      link: {
        href: 'https://www.youtube.com/@bitlauncher',
        label: 'More Shorts',
      },
    },
  ]

  const recentArcticles = [
    {
      name: 'Recent Articles',
      slug: 'ai',
      articles: [
        {
          id: 'SpdLuuYEQgW8rwSHNzhmxA',
          topics: ['Apps'],
          title:
            'Masterbots: Elevating AI Beyond ChatGPT with Social Sharing and User-Friendly Innovation',
          slug: 'masterbots-elevating-ai-beyond-chatgpt-with-social-sharing-and-user-friendly-inno',
          authorName: 'Jun Dam',
          authorPicture: {
            url: 'https://www.datocms-assets.com/101962/1686758812-jdamx170-removebg-preview.png',
          },
          _publishedAt: '2024-04-04T23:48:35+01:00',
          description:
            'The blog introduces Masterbots, a platform revolutionizing AI interaction with user-friendly, domain-specific chatbots and a unique social sharing feature, inviting collaborators to join its open-source, community-driven development.',
          thumbnail: {
            url: 'https://www.datocms-assets.com/101962/1712270604-screenshot-2024-04-04-at-3-43-11-pm.png',
          },
          contentBlock: [],
          seo: null,
        },
        {
          id: '190259319',
          topics: ['Summary', 'LLM', 'Training'],
          title:
            'Latent Space Podcast 8-16-23 Summary: The Mathematics of Training LLMs with Quentin Anthony',
          slug: 'latent-space-podcast-8-16-23-summary-the-mathematics-of-training-llms-with-que',
          authorName: 'Prof. Otto Nomos',
          authorPicture: {
            url: 'https://www.datocms-assets.com/101962/1692842125-profottonomosheadshot.png',
          },
          _publishedAt: '2023-10-05T09:19:45+01:00',
          description:
            'Explore the math behind training LLMs with Quentin Anthony from Eleuther AI. Dive into the Transformers Math 101 article & master distributed training techniques for peak GPU performance.',
          thumbnail: {
            url: 'https://www.datocms-assets.com/101962/1692324088-screenshot-2023-08-17-at-9-59-17-pm.png',
          },
          contentBlock: [],
          seo: null,
        },
        {
          id: '190259129',
          topics: ['LLM', 'Hardware', 'Summary', 'Edge'],
          title:
            'Latent Space Podcast 8-10-23 Summary: LLMs Everywhere - Running 70B Models in Browsers',
          slug: 'latent-space-podcast-8-10-23-summary-llms-everywhere-running-70b-models-in-browse',
          authorName: 'Prof. Otto Nomos',
          authorPicture: {
            url: 'https://www.datocms-assets.com/101962/1692842125-profottonomosheadshot.png',
          },
          _publishedAt: '2023-10-05T09:18:37+01:00',
          description:
            "Explore the magic of MLC with Tianqi Chen: deploying 70B models on browsers & iPhones. Dive into XGBoost, TVM's creation, & the future of universal AI deployments. ",
          thumbnail: {
            url: 'https://www.datocms-assets.com/101962/1691894611-screenshot-2023-08-12-at-10-42-43-pm.png',
          },
          contentBlock: [],
          seo: null,
        },
        {
          id: '190259087',
          topics: ['Summary', 'LLM', 'Code', 'Open Source', 'Small Models'],
          title:
            'Latent Space Podcast 8-4-23 Summary: Latent Space x AI Breakdown - Crossover Podcast',
          slug: 'latent-space-podcast-8-4-23-summary-latent-space-x-ai-breakdown-crossover-pod',
          authorName: 'Prof. Otto Nomos',
          authorPicture: {
            url: 'https://www.datocms-assets.com/101962/1692842125-profottonomosheadshot.png',
          },
          _publishedAt: '2023-10-05T09:16:33+01:00',
          description:
            'Join AI Breakdown & Latent Space for the summer AI tech roundup: Dive into GPT4.5, Llama 2, AI tools, the rising AI engineer, and more!',
          thumbnail: {
            url: 'https://www.datocms-assets.com/101962/1691539617-screenshot-2023-08-08-at-8-02-52-pm.png',
          },
          contentBlock: [],
          seo: null,
        },
        {
          id: '190259087',
          topics: ['Summary', 'LLM', 'Code', 'Open Source', 'Small Models'],
          title:
            'Latent Space Podcast 8-4-23 Summary: Latent Space x AI Breakdown - Crossover Podcast',
          slug: 'latent-space-podcast-8-4-23-summary-latent-space-x-ai-breakdown-crossover-pod',
          authorName: 'Prof. Otto Nomos',
          authorPicture: {
            url: 'https://www.datocms-assets.com/101962/1692842125-profottonomosheadshot.png',
          },
          _publishedAt: '2023-10-05T09:16:33+01:00',
          description:
            'Join AI Breakdown & Latent Space for the summer AI tech roundup: Dive into GPT4.5, Llama 2, AI tools, the rising AI engineer, and more!',
          thumbnail: {
            url: 'https://www.datocms-assets.com/101962/1691539617-screenshot-2023-08-08-at-8-02-52-pm.png',
          },
          contentBlock: [],
          seo: null,
        },
      ],
    },
  ]

  return (
    <Section heading="Recent Media and Articles">
      <MediaSections sections={recentMedia} lang={lang} />
      <BlogSections
        sections={recentArcticles as unknown as ArticlesSection[]}
        lang={lang}
        className="pb-0 mb-0"
      />
    </Section>
  )
}

const latestShorts = [
  {
    kind: 'youtube#playlistItem',
    etag: 'gNlGgzV_GELSlM0eMgLN2ESUYm0',
    id: 'UEw2QktHVnFla2hCXzNPaEZZX3pwSndtYWFWNnNMeEx3Si4xRDJGOTc4RkUxMzUwMUFG',
    snippet: {
      publishedAt: '2024-05-20T04:55:10Z',
      channelId: 'UChzuWZjo_PvOrRTDfkojp3w',
      title: 'From Prison to Bitcoin A Journey to Freedom #bitcoin #crypto #liberty',
      description: 'Full video here: https://youtu.be/IXhECniE6-4',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/OlrfEz5dqv0/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/OlrfEz5dqv0/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/OlrfEz5dqv0/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/OlrfEz5dqv0/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/OlrfEz5dqv0/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Bitlauncher | Bitcash',
      playlistId: 'PL6BKGVqekhB_3OhFY_zpJwmaaV6sLxLwJ',
      position: 0,
      resourceId: {
        kind: 'youtube#video',
        videoId: 'OlrfEz5dqv0',
      },
      videoOwnerChannelTitle: 'Bitlauncher | Bitcash',
      videoOwnerChannelId: 'UChzuWZjo_PvOrRTDfkojp3w',
    },
  },
  {
    kind: 'youtube#playlistItem',
    etag: 'rsf4xjYzsvYXGtBJB4U6LtE9J74',
    id: 'UEw2QktHVnFla2hCXzNPaEZZX3pwSndtYWFWNnNMeEx3Si44NzQ1OTI1OUFFM0NFRTc5',
    snippet: {
      publishedAt: '2024-05-20T05:20:57Z',
      channelId: 'UChzuWZjo_PvOrRTDfkojp3w',
      title: 'My First Bitcoin: A Journey Begins #bitcoin #crypto',
      description: 'Full video here: https://youtu.be/O0ZMs_UccMY',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/z-dKmcv_L-M/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/z-dKmcv_L-M/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/z-dKmcv_L-M/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/z-dKmcv_L-M/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/z-dKmcv_L-M/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Bitlauncher | Bitcash',
      playlistId: 'PL6BKGVqekhB_3OhFY_zpJwmaaV6sLxLwJ',
      position: 1,
      resourceId: {
        kind: 'youtube#video',
        videoId: 'z-dKmcv_L-M',
      },
      videoOwnerChannelTitle: 'Bitlauncher | Bitcash',
      videoOwnerChannelId: 'UChzuWZjo_PvOrRTDfkojp3w',
    },
  },
  {
    kind: 'youtube#playlistItem',
    etag: '-ZQffBSEpAK6_lpTkVvdNpYnp7s',
    id: 'UEw2QktHVnFla2hCXzNPaEZZX3pwSndtYWFWNnNMeEx3Si5ENjg3MEUyQ0IzODMzQThB',
    snippet: {
      publishedAt: '2024-05-20T05:07:26Z',
      channelId: 'UChzuWZjo_PvOrRTDfkojp3w',
      title: 'Protect Your Privacy in the Digital Age #crypto #bitcoin #privacy',
      description: 'Full video here: https://youtu.be/IXhECniE6-4',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/PRXAO31uC8c/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/PRXAO31uC8c/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/PRXAO31uC8c/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/PRXAO31uC8c/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/PRXAO31uC8c/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Bitlauncher | Bitcash',
      playlistId: 'PL6BKGVqekhB_3OhFY_zpJwmaaV6sLxLwJ',
      position: 2,
      resourceId: {
        kind: 'youtube#video',
        videoId: 'PRXAO31uC8c',
      },
      videoOwnerChannelTitle: 'Bitlauncher | Bitcash',
      videoOwnerChannelId: 'UChzuWZjo_PvOrRTDfkojp3w',
    },
  },
  {
    kind: 'youtube#playlistItem',
    etag: 'UqFm-kVdmHh0tYBqG2Kxn3pcPLU',
    id: 'UEw2QktHVnFla2hCXzNPaEZZX3pwSndtYWFWNnNMeEx3Si42MzE1QTJBMEI3NjI4Rjk5',
    snippet: {
      publishedAt: '2024-06-25T02:54:26Z',
      channelId: 'UChzuWZjo_PvOrRTDfkojp3w',
      title: 'Trust is Key in Crypto Market Making #crypto #bitcoin #investing #trading',
      description: 'Watch full video at: https://youtu.be/Kfk6T4QCUMI',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/2q2MGoGdnlI/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/2q2MGoGdnlI/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/2q2MGoGdnlI/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/2q2MGoGdnlI/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/2q2MGoGdnlI/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Bitlauncher | Bitcash',
      playlistId: 'PL6BKGVqekhB_3OhFY_zpJwmaaV6sLxLwJ',
      position: 3,
      resourceId: {
        kind: 'youtube#video',
        videoId: '2q2MGoGdnlI',
      },
      videoOwnerChannelTitle: 'Bitlauncher | Bitcash',
      videoOwnerChannelId: 'UChzuWZjo_PvOrRTDfkojp3w',
    },
  },
  {
    kind: 'youtube#playlistItem',
    etag: 'AWv0QCB9nrKPlsxW7xj5onixZCw',
    id: 'UEw2QktHVnFla2hCXzNPaEZZX3pwSndtYWFWNnNMeEx3Si5CMUM0NzY5NzdEQzlGRjAx',
    snippet: {
      publishedAt: '2024-05-16T03:07:47Z',
      channelId: 'UChzuWZjo_PvOrRTDfkojp3w',
      title: "From NASA to Crypto: Chjango's Journey #crypto #bitcoin #cosmos",
      description: 'Full video here: https://youtu.be/bH8Z80gspGM',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/uqh9zkJI_Tk/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/uqh9zkJI_Tk/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/uqh9zkJI_Tk/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/uqh9zkJI_Tk/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/uqh9zkJI_Tk/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Bitlauncher | Bitcash',
      playlistId: 'PL6BKGVqekhB_3OhFY_zpJwmaaV6sLxLwJ',
      position: 4,
      resourceId: {
        kind: 'youtube#video',
        videoId: 'uqh9zkJI_Tk',
      },
      videoOwnerChannelTitle: 'Bitlauncher | Bitcash',
      videoOwnerChannelId: 'UChzuWZjo_PvOrRTDfkojp3w',
    },
  },
]
