import { getCMSSdk } from '@/services/datocms/graphql/cms'
import type {
  BlogAiModelFilter,
  BlogAiRecord,
  BlogBitcashModelFilter,
  BlogBitcashRecord,
  BlogBitcoinModelFilter,
  BlogBitcoinRecord,
  BlogBitlauncherRecord,
  BlogCryptoModelFilter,
  BlogInvestingRecord,
  BlogNewsModelFilter,
  BlogNewsRecord,
  BlogStartupModelFilter,
  BlogStartupRecord,
  ResearchAiRecord,
  SeoField,
} from '@/services/datocms/graphql/generated/cms'

export async function getBlogCategory(
  category: string,
  filter?:
    | BlogBitcashModelFilter
    | BlogAiModelFilter
    | BlogNewsModelFilter
    | BlogCryptoModelFilter
    | BlogBitcoinModelFilter
    | BlogStartupModelFilter,
  first?: number,
) {
  let dataRecord: BlogArticleRecord[] = []
  let error

  try {
    let categoryRecordName = ''

    switch (category) {
      case 'bitcoin':
        categoryRecordName = 'allBlogBitcoins'
        break
      case 'crypto':
        categoryRecordName = 'allBlogCryptos'
        break
      case 'investing':
        categoryRecordName = 'allBlogInvestings'
        break
      case 'startup':
        categoryRecordName = 'allBlogStartups'
        break
      case 'ai':
        categoryRecordName = 'allBlogAis'
        break
      case 'news':
        categoryRecordName = 'allBlogNews'
        break
      case 'bitcash':
        categoryRecordName = 'allBlogBitcashes'
        break
      case 'bitlauncher':
        categoryRecordName = 'allBlogBitlaunchers'
        break
      case 'ai-research':
        categoryRecordName = 'allResearchAis'
        break
      default:
        throw new Error('Invalid category')
    }

    const data = await getCMSSdk().query({
      [categoryRecordName]: {
        __args: {
          orderBy: ['_publishedAt_DESC'],
          locale: 'en',
          fallbackLocales: ['en'],
          filter,
          first,
        },
        id: true,
        topics: true,
        title: true,
        slug: true,
        authorName: true,
        authorPicture: {
          url: true,
        },
        _publishedAt: true,
        description: true,
        thumbnail: {
          url: true,
        },
        contentBlock: {
          mainContent: {
            value: true,
          },
          topImages: {
            basename: true,
            height: true,
            width: true,
            filename: true,
            format: true,
            alt: true,
            url: true,
          },
        },
        seo: {
          description: true,
          title: true,
          twitterCard: true,
          image: {
            width: true,
            height: true,
            title: true,
            alt: true,
            url: true,
          },
        },
      },
    })

    dataRecord = data[categoryRecordName as keyof typeof data] as BlogArticleRecord[]

    if (!dataRecord.length) {
      throw new Error('No records has been found for  ' + category)
    }
  } catch (err) {
    console.log(
      'datocms-blog-category.service::getBlogCategory::[ERROR]:: ' + category,
      err,
    )

    error = (err as Error).message
  } finally {
    // replacing category kebab case with camel case
    const blogCategory = category.replace(/(\-\w)/g, (m) => m[1].toUpperCase())

    return {
      [`${blogCategory}Data`]: dataRecord,
      [`${blogCategory}Error`]: error,
    }
  }
}

export async function getBlogCategories(): Promise<getBlogCategoriesTypes> {
  try {
    const data = await getCMSSdk().query({
      allBlogBitcoins: {
        __args: {
          orderBy: ['_publishedAt_DESC'],
          locale: 'en',
          fallbackLocales: ['en'],
        },
        id: true,
        topics: true,
        title: true,
        slug: true,
        authorName: true,
        authorPicture: {
          url: true,
        },
        _publishedAt: true,
        description: true,
        thumbnail: {
          url: true,
        },
        contentBlock: {
          mainContent: {
            value: true,
          },
          topImages: {
            basename: true,
            height: true,
            width: true,
            filename: true,
            format: true,
            alt: true,
            url: true,
          },
        },
        seo: {
          description: true,
          title: true,
          twitterCard: true,
          image: {
            width: true,
            height: true,
            title: true,
            alt: true,
            url: true,
          },
        },
      },
      allBlogCryptos: {
        __args: {
          orderBy: ['_publishedAt_DESC'],
          locale: 'en',
          fallbackLocales: ['en'],
        },
        id: true,
        topics: true,
        title: true,
        slug: true,
        authorName: true,
        authorPicture: {
          url: true,
        },
        _publishedAt: true,
        description: true,
        thumbnail: {
          url: true,
        },
        contentBlock: {
          mainContent: {
            value: true,
          },
          topImages: {
            basename: true,
            height: true,
            width: true,
            filename: true,
            format: true,
            alt: true,
            url: true,
          },
        },
        seo: {
          description: true,
          title: true,
          twitterCard: true,
          image: {
            width: true,
            height: true,
            title: true,
            alt: true,
            url: true,
          },
        },
      },
      allBlogInvestings: {
        __args: {
          orderBy: ['_publishedAt_DESC'],
          locale: 'en',
          fallbackLocales: ['en'],
        },
        id: true,
        topics: true,
        title: true,
        slug: true,
        authorName: true,
        authorPicture: {
          url: true,
        },
        _publishedAt: true,
        description: true,
        thumbnail: {
          url: true,
        },
        contentBlock: {
          mainContent: {
            value: true,
          },
          topImages: {
            basename: true,
            height: true,
            width: true,
            filename: true,
            format: true,
            alt: true,
          },
        },
        seo: {
          description: true,
          title: true,
          twitterCard: true,
          image: {
            width: true,
            height: true,
            title: true,
            alt: true,
            url: true,
          },
        },
      },
      allBlogStartups: {
        __args: {
          orderBy: ['_publishedAt_DESC'],
          locale: 'en',
          fallbackLocales: ['en'],
        },
        id: true,
        topics: true,
        title: true,
        slug: true,
        authorName: true,
        authorPicture: {
          url: true,
        },
        _publishedAt: true,
        description: true,
        thumbnail: {
          url: true,
        },
        contentBlock: {
          mainContent: {
            value: true,
          },
          topImages: {
            basename: true,
            height: true,
            width: true,
            filename: true,
            format: true,
            alt: true,
            url: true,
          },
        },
        seo: {
          description: true,
          title: true,
          twitterCard: true,
          image: {
            width: true,
            height: true,
            title: true,
            alt: true,
            url: true,
          },
        },
      },

      allBlogAis: {
        __args: {
          orderBy: ['_publishedAt_DESC'],
          locale: 'en',
          fallbackLocales: ['en'],
        },
        id: true,
        topics: true,
        title: true,
        slug: true,
        authorName: true,
        authorPicture: {
          url: true,
        },
        _publishedAt: true,
        description: true,
        thumbnail: {
          url: true,
        },
        contentBlock: {
          mainContent: {
            value: true,
          },
          topImages: {
            basename: true,
            height: true,
            width: true,
            filename: true,
            format: true,
            alt: true,
            url: true,
          },
        },
        seo: {
          description: true,
          title: true,
          twitterCard: true,
          image: {
            width: true,
            height: true,
            title: true,
            alt: true,
            url: true,
          },
        },
      },

      allBlogNews: {
        __args: {
          orderBy: ['_publishedAt_DESC'],
          locale: 'en',
          fallbackLocales: ['en'],
        },
        id: true,
        topics: true,
        title: true,
        slug: true,
        authorName: true,
        authorPicture: {
          url: true,
        },
        _publishedAt: true,
        description: true,
        thumbnail: {
          url: true,
        },
        contentBlock: {
          mainContent: {
            value: true,
          },
          topImages: {
            basename: true,
            height: true,
            width: true,
            filename: true,
            format: true,
            alt: true,
            url: true,
          },
        },
        seo: {
          description: true,
          title: true,
          twitterCard: true,
          image: {
            width: true,
            height: true,
            title: true,
            alt: true,
            url: true,
          },
        },
      },

      allBlogBitlaunchers: {
        __args: {
          orderBy: ['_publishedAt_DESC'],
          locale: 'en',
          fallbackLocales: ['en'],
        },
        id: true,
        topics: true,
        title: true,
        slug: true,
        authorName: true,
        authorPicture: {
          url: true,
        },
        _publishedAt: true,
        description: true,
        thumbnail: {
          url: true,
        },
        contentBlock: {
          mainContent: {
            value: true,
          },
          topImages: {
            basename: true,
            height: true,
            width: true,
            filename: true,
            format: true,
            alt: true,
            url: true,
          },
        },
        seo: {
          description: true,
          title: true,
          twitterCard: true,
          image: {
            width: true,
            height: true,
            title: true,
            alt: true,
            url: true,
          },
        },
      },

      allBlogBitcashes: {
        __args: {
          orderBy: ['_publishedAt_DESC'],
          locale: 'en',
          fallbackLocales: ['en'],
        },
        id: true,
        topics: true,
        title: true,
        slug: true,
        authorName: true,
        authorPicture: {
          url: true,
        },
        _publishedAt: true,
        description: true,
        thumbnail: {
          url: true,
        },
        contentBlock: {
          mainContent: {
            value: true,
          },
          topImages: {
            basename: true,
            height: true,
            width: true,
            filename: true,
            format: true,
            alt: true,
            url: true,
          },
        },
        seo: {
          description: true,
          title: true,
          twitterCard: true,
          image: {
            width: true,
            height: true,
            title: true,
            alt: true,
            url: true,
          },
        },
      },
      allResearchAis: {
        __args: {
          orderBy: ['_publishedAt_DESC'],
          locale: 'en',
          fallbackLocales: ['en'],
        },
        id: true,
        topics: true,
        title: true,
        slug: true,
        authorName: true,
        authorPicture: {
          url: true,
        },
        _publishedAt: true,
        description: true,
        thumbnail: {
          url: true,
        },
        contentBlock: {
          mainContent: {
            value: true,
          },
          topImages: {
            basename: true,
            height: true,
            width: true,
            filename: true,
            format: true,
            alt: true,
          },
        },
        seo: {
          description: true,
          title: true,
          twitterCard: true,
          image: {
            width: true,
            height: true,
            title: true,
            alt: true,
          },
        },
      },
    })

    return data as unknown as getBlogCategoriesTypes
  } catch (error) {
    console.error('datocms-blog-category.service::getBlogCategories::[ERROR]', error)

    return {
      allBlogBitcoins: [defaultBlogArticle],
      allBlogCryptos: [defaultBlogArticle],
      allBlogInvestings: [defaultBlogArticle],
      allBlogStartups: [defaultBlogArticle],
      allBlogAis: [defaultBlogArticle],
      allBlogNews: [defaultBlogArticle],
      allBlogBitlaunchers: [defaultBlogArticle],
      allBlogBitcashes: [defaultBlogArticle],
      allResearchAis: [defaultBlogArticle],
    }
  }
}

const defaultBlogArticle: BlogArticleRecord = {
  id: 0,
  title:
    'The Art of Researching and Evaluating Bitcoin Exchanges: A Guide for Contributors',
  slug: 'the-art-of-researching-and-evaluating-bitcoin-exchanges-a-guide-for-contributors',
  authorName: 'Jun Dam',
  authorPicture: {
    url: 'https://www.datocms-assets.com/101962/1686758812-jdamx170-removebg-preview.png',
  },
  _publishedAt: '2023-06-15T03:14:17+01:00',
  description: '',
  thumbnail: {
    url: 'https://www.datocms-assets.com/101962/1686794861-bb5-img1.png',
  },
  topics: ['bitcoin'],
  contentBlock: [
    {
      mainContent: {
        value: {
          schema: '',
          document: {
            type: '',
            children: [
              {
                type: '',
                marks: [],
                value: '',
              },
            ],
          },
        },
      },
      topImages: [],
    },
  ],
  seo: {
    description:
      'The Art of Researching and Evaluating Bitcoin Exchanges: A Guide for Contributors',
    title:
      'The Art of Researching and Evaluating Bitcoin Exchanges: A Guide for Contributors',
    twitterCard: '',
    noIndex: false,
    image: null,
    __typename: 'SeoField',
  },
}

export interface MainArticleContentBlock {
  contentBlock: {
    mainContent: {
      value: {
        schema: string
        document: {
          type: string
          level?: number
          children: {
            level?: any
            type: string
            marks: any[]
            value: string
            children?: {
              level?: any
              type: string
              marks: any[]
              value: string
            }[]
          }[]
        }
      }
    }
    topImages: []
  }[]
}

export interface BlogArticleRecord {
  id:
    | BlogAiRecord['id']
    | BlogNewsRecord['id']
    | BlogBitlauncherRecord['id']
    | BlogBitcashRecord['id']
    | BlogBitcoinRecord['id']
    | BlogStartupRecord['id']
    | BlogInvestingRecord['id']
    | ResearchAiRecord['id']
  topics: string[]
  title: string
  slug: string
  authorName: string
  authorPicture: {
    url: string
  }
  _publishedAt: string
  description: string
  thumbnail: {
    url: string
  }
  contentBlock: MainArticleContentBlock['contentBlock']
  seo: SeoField
}

export interface getBlogCategoriesTypes {
  allBlogBitcoins: BlogArticleRecord[]
  allBlogCryptos: BlogArticleRecord[]
  allBlogInvestings: BlogArticleRecord[]
  allBlogStartups: BlogArticleRecord[]
  allBlogAis: BlogArticleRecord[]
  allBlogNews: BlogArticleRecord[]
  allBlogBitlaunchers: BlogArticleRecord[]
  allBlogBitcashes: BlogArticleRecord[]
  allResearchAis: BlogArticleRecord[]
}
