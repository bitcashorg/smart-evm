import * as fs from 'node:fs'
import path from 'node:path'
import type { Lang } from '@/dictionaries/locales'
import { getFilePath, parseFile } from '@/lib/file'
import { getErrorMessage } from '@repo/errors'
import { uniq } from 'lodash'
import { type BlogArticleRecord, getBlogCategory } from './datacms-blog-category.service'
import { getLayoutText } from './datocms-layout.service'
import { getPageSeoText } from './datocms-seo.service'
import type { BlogAiRecord } from './graphql/generated/cms'

export const getBlogData = async () => {
  const [
    i18n,
    pageSeo,
    { bitcoinData, bitcoinError },
    { cryptoData, cryptoError },
    { investingData, investingError },
    { startupData, startupError },
    { aiData, aiError },
    // { newsData, newsError },
    { bitcashData, bitcashError },
    { aiResearchData, researchError },
    { bitlauncherData, bitlauncherError },
  ] = await Promise.all([
    getLayoutText(),
    getPageSeoText('home'),
    getBlogCategory('bitcoin', undefined, 5),
    getBlogCategory('crypto', undefined, 5),
    getBlogCategory('investing', undefined, 5),
    getBlogCategory('startup', undefined, 5),
    getBlogCategory('ai', undefined, 5),
    // getBlogCategory('news', undefined, 5),
    getBlogCategory('bitcash', undefined, 5),
    getBlogCategory('ai-research', undefined, 5),
    getBlogCategory('bitlauncher', undefined, 5),
  ])
  return {
    i18n,
    pageSeo,
    bitcoinData,
    bitcoinError,
    cryptoData,
    cryptoError,
    investingData,
    investingError,
    startupData,
    startupError,
    aiData,
    aiError,
    // newsData,
    // newsError,
    bitcashData,
    bitcashError,
    aiResearchData,
    researchError,
    bitlauncherError,
    bitlauncherData,
  }
}

export async function getArticleSections(lang: Lang): Promise<ArticlesSection[]> {
  const dirPath = `/dictionaries/${lang}/blog/`
  const fileName = `blog-index.json`
  const filePath = path.resolve(dirPath, fileName)

  let fileContents: { sections: ArticlesSection[] } | undefined
  // return cached translations
  try {
    // ? The idea is to get the file contents and return it if it exists and it should be up to date with the latest on DatoCMS, so we can reduce the amount of requests to DatoCMS
    fileContents = parseFile(filePath)
    // ? Due we are not updating the file contents frequently, we can return the file contents directly
    // console.info('in', process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
      return fileContents?.sections as ArticlesSection[]
    }
  } catch (error) {
    console.log('😬 translation not found', getErrorMessage(error))
    try {
      console.log('😬 trying english version', { dirPath, filePath, fileName })
      const englishVersion = parseFile(`/dictionaries/en/blog/${fileName}`)
      if (englishVersion) {
        console.log('😬 returning english version')
        return englishVersion.sections
      }
    } catch (error) {
      console.error('❌ Failed to get cached file. Fetching new data', error)
    }
  }

  const {
    bitcoinData,
    cryptoData,
    investingData,
    startupData,
    aiData,
    // newsData,
    bitcashData,
    aiResearchData,
    bitlauncherData,
  } = await getBlogData()

  const sections: ArticlesSection[] = [
    {
      name: 'AI',
      slug: 'ai',
      articles: (aiData?.slice(0, 4) || []) as BlogArticleRecord[],
    },
    {
      name: 'AI Research',
      slug: 'ai-research',
      articles: (aiResearchData?.slice(0, 4) || []) as BlogArticleRecord[],
    },
    // {
    //   name: 'News',
    //   slug: 'news',
    //   articles: (newsData?.slice(0, 4) || []) as BlogArticleRecord[],
    // },
    {
      name: 'Bitlauncher',
      slug: 'bitlauncher',
      articles: (bitlauncherData?.slice(0, 4) || []) as BlogArticleRecord[],
    },
    {
      name: 'Bitcash',
      slug: 'bitcash',
      articles: (bitcashData?.slice(0, 4) || []) as BlogArticleRecord[],
    },
    {
      name: 'Startup',
      slug: 'startup',
      articles: (startupData?.slice(1, 5) || []) as BlogArticleRecord[],
    },
    {
      name: 'Crypto',
      slug: 'crypto',
      articles: (cryptoData?.slice(1, 5) || []) as BlogArticleRecord[],
    },
    {
      name: 'Bitcoin',
      slug: 'bitcoin',
      articles: (bitcoinData?.slice(1, 5) || []) as BlogArticleRecord[],
    },
    {
      name: 'Investing',
      slug: 'investing',
      articles: (investingData?.slice(1, 5) || []) as BlogArticleRecord[],
    },
  ]

  sections.forEach((section) => {
    section.articles.forEach((article) => {
      article.contentBlock = []
    })
  })

  // Check file sections against new sections. If no section found on files, then we update the sections
  const fileSections = fileContents?.sections || []
  const updatedSections = sections.map((section) => {
    const fileSection = fileSections?.find(
      (fs) =>
        fs.name === section.name &&
        fs.articles[0]._publishedAt === section.articles[0]._publishedAt,
    )
    if (fileSection) {
      return fileSection
    }
    return section
  })
  fileContents = {
    sections: updatedSections,
  }

  // TODO: Fix cache file update on production build.
  // ! It's not updating the file and we might choose to add cache to the user's browser instead.
  // ? Or moving this to actions.ts
  try {
    fs.mkdirSync(getFilePath(dirPath), { recursive: true })
    fs.writeFileSync(getFilePath(filePath), JSON.stringify(fileContents, null, 2))
  } catch (error) {
    console.error('❌❌❌❌ Failed to update cache on file.', error)
  }

  return sections as ArticlesSection[]
}

export async function getRecentArticleSections(): Promise<ArticlesSection[]> {
  const {
    bitcoinData,
    cryptoData,
    investingData,
    startupData,
    aiData,
    // newsData,
    bitcashData,
    aiResearchData,
  } = await getBlogData()

  const recentArticles = [
    {
      name: 'Bitcoin',
      slug: 'bitcoin',
      articles: (bitcoinData?.slice(0) || []) as BlogArticleRecord[],
    },
    {
      name: 'Crypto',
      slug: 'crypto',
      articles: (cryptoData?.slice(0) || []) as BlogArticleRecord[],
    },
    {
      name: 'Startup',
      slug: 'startup',
      articles: (startupData?.slice(0) || []) as BlogArticleRecord[],
    },

    {
      name: 'Investment',
      slug: 'investing',
      articles: (investingData?.slice(0) || []) as BlogArticleRecord[],
    },
  ]

  return recentArticles
}

export async function getBlogCategoryLandingData(lang: Lang, category: string) {
  const [i18n, categories, pageSeo] = await Promise.all([
    getLayoutText(),
    getBlogCategory(category, undefined, 100),
    getPageSeoText(category),
  ])

  const dirPath = `/dictionaries/${lang}/blog/${category}`
  const fileName = `${category}-index.json`
  const filePath = path.resolve(dirPath, fileName)
  // console.log('getBlogCategoryLandingData', { dirPath, filePath })

  let fileContents: { sections: ArticlesSection[] } | undefined
  // return cached translations
  try {
    // ? The idea is to get the file contents and return it if it exists and it should be up to date with the latest on DatoCMS, so we can reduce the amount of requests to DatoCMS
    fileContents = parseFile(filePath)
    // ? Due we are not updating the file contents frequently, we can return the file contents directly
    // console.info('in', process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
      return fileContents?.sections as ArticlesSection[]
    }
  } catch (error) {
    // console.log('error', error)
    try {
      const englishVersion = parseFile(`/dictionaries/en/blog/${category}/${fileName}`)
      if (englishVersion) return englishVersion
    } catch (error) {
      console.error('❌ Failed to get cached file. Fetching new data', error)
    }
  }

  // replacing category kebab case with camel case
  const blogCategory = category.replace(/(\-\w)/g, (m: string) => m[1].toUpperCase())
  const categoryContent: BlogArticleRecord[] | undefined = categories[
    `${blogCategory}Data`
  ] as BlogArticleRecord[] | undefined

  if (!categoryContent) return null
  // get topics
  const allTopics: string[] = []

  categoryContent.forEach((blog) => {
    blog?.topics?.forEach((topic: string) => {
      allTopics.push(topic)
    })
  })

  // section topics & blogs content
  const topics = uniq(allTopics)

  const sections: ArticlesSection[] = topics?.map((tp, index) => {
    const articles = categoryContent.filter((content) => content.topics.includes(tp))
    articles.forEach((article) => {
      article.contentBlock = []
    })

    return {
      name: tp,
      slug: `${tp.toLocaleLowerCase()}`,
      articles,
    }
  })

  // Check file sections against new sections. If no section found on files, then we update the sections
  const fileSections = fileContents?.sections || []
  const updatedSections = sections.map((section) => {
    const fileSection = fileSections?.find(
      (fs) =>
        fs.name === section.name &&
        fs.articles[0]._publishedAt === section.articles[0]._publishedAt,
    )
    if (fileSection) {
      return fileSection
    }
    return section
  })
  fileContents = {
    sections: updatedSections,
  }

  const result = {
    sections: fileContents?.sections as ArticlesSection[],
    pageSeo,
  }

  // TODO: Fix cache file update on production build.
  // ! It's not updating the file and we might choose to add cache to the user's browser instead.
  // ? Or moving this to actions.ts
  try {
    fs.mkdirSync(getFilePath(dirPath), { recursive: true })
    fs.writeFileSync(getFilePath(filePath), JSON.stringify(result, null, 2))
  } catch (error) {
    console.error('❌❌❌❌ Failed to update cache on file.', error)
  }

  return result
}

export type BlogArticleData = {
  relatedBlogs: BlogArticleRecord[]
  blogContent: BlogArticleRecord
  topics: string[]
}

export async function getBlogArticleData(lang: Lang, category: string, slug: string) {
  const dirPath = `/dictionaries/${lang}/blog/${category}`
  const fileName = `${slug}.json`
  const filePath = path.resolve(dirPath, fileName)

  let fileContents: BlogArticleData | undefined
  // return cached translations
  try {
    // ? The idea is to get the file contents and return it if it exists and it should be up to date with the latest on DatoCMS, so we can reduce the amount of requests to DatoCMS
    fileContents = parseFile(filePath)
    // ? Due we are not updating the file contents frequently, we can return the file contents directly
    // console.info('in', process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
      return fileContents as BlogArticleData
    }
  } catch (error) {
    try {
      const englishVersion: BlogArticleData = parseFile(
        `/dictionaries/en/blog/${category}/${slug}.json`,
      )
      if (englishVersion) return englishVersion
    } catch (error) {
      console.error('❌ Failed to get cached file. Fetching new data', error)
    }
  }

  // console.log('getBlogArticleData', { locale, category, slug })
  const [i18n, categories] = await Promise.all([
    getLayoutText(),
    getBlogCategory(category, {
      slug: {
        eq: slug,
      },
    }),
  ])

  // replacing category kebab case with camel case
  const blogCategory = category.replace(/(\-\w)/g, (m: string) => m[1].toUpperCase())
  const data: any = categories[`${blogCategory}Data`]
  const error: any = categories[`${blogCategory}Error`]

  let categoryContent: any[]
  categoryContent = data
  if (categoryContent.length < 1 || error) return null

  let relatedBlogs: any = []
  const blogContent = categoryContent[0]

  const topics = blogContent?.topics

  if (topics.length > 0) {
    relatedBlogs = await getBlogCategory(category, {
      slug: {
        neq: slug,
      },
    })
    const escapeRegExp = (string: string): string => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
    }

    // Prepare the regex pattern outside the filter function for efficiency
    const escapedTitle = escapeRegExp(blogContent.title).replace(/\s+/g, '|')
    const titleRegex = new RegExp(`(${escapedTitle})`, 'gi')

    relatedBlogs = relatedBlogs[`${blogCategory}Data`]
      .map((blog: any) => {
        const { contentBlock, ...rest } = blog
        return rest
      })
      .filter(
        (blog: BlogAiRecord) =>
          (blog.topics as string[]).some((topic: string) => topics.includes(topic)) &&
          blog.description?.match(titleRegex) &&
          blog.title?.match(titleRegex),
      )
  }

  // always create an english dictionary
  const result: BlogArticleData = { relatedBlogs, blogContent, topics }
  const fullPath = getFilePath(filePath)

  if (fileContents?.blogContent) {
    // Check file article against new article. If no updated found on files, then we update the article
    const fileArticle = fileContents
    if (
      fileArticle.blogContent.title === blogContent.title &&
      fileArticle.blogContent._publishedAt === blogContent._publishedAt
    ) {
      return fileArticle
    }
  }

  // TODO: Fix cache file update on production build.
  // ! It's not updating the file and we might choose to add cache to the user's browser instead.
  // ? Or moving this to actions.ts
  try {
    fs.mkdirSync(getFilePath(dirPath), { recursive: true })
    fs.writeFileSync(getFilePath(filePath), JSON.stringify(result, null, 2))
  } catch (error) {
    console.error('❌❌❌❌ Failed to update cache on file.', error)
  }

  return result
}

export type ArticlesSection = {
  name: string
  slug: string
  articles: BlogArticleRecord[]
}
