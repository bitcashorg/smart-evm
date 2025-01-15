import type {
  BlogArticleRecord,
  MainArticleContentBlock,
} from '@/services/datocms/datacms-blog-category.service'

export interface TranslationData {
  title: string
  topics: string[]
  description: string
  seo?: {
    title?: string
    description?: string
  }
  contentBlock?: ContentBlockTranslation
}

// Function to extract text for translation
export function extractTextForTranslation(blogData: BlogArticleRecord): TranslationData {
  return {
    title: blogData.title || '',
    description: blogData.description || '',
    topics: blogData.topics || [],
    seo: blogData.seo
      ? {
          title: blogData.seo.title || '',
          description: blogData.seo.description || '',
        }
      : {},
    contentBlock: blogData.contentBlock
      ? optimizeContentBlock(blogData.contentBlock)
      : undefined,
  }
}

// Function to inject text after translation
export function injectTextAfterTranslation(
  blogData: BlogArticleRecord,
  translatedData: TranslationData,
): BlogArticleRecord {
  // console.log('translatedData', translatedData)
  blogData.title = translatedData.title
  blogData.description = translatedData.description
  blogData.topics = translatedData.topics
  if (translatedData.seo) {
    blogData.seo.title = translatedData.seo.title ?? blogData.seo.title
    blogData.seo.description = translatedData.seo.description ?? blogData.seo.description
  }
  if (translatedData.contentBlock) {
    blogData.contentBlock = reconstructContentBlock(
      translatedData.contentBlock,
      blogData.contentBlock,
    )
  }
  return blogData
}

type ContentBlockTranslation = (string | string[])[]

function optimizeContentBlock(
  contentBlock: MainArticleContentBlock['contentBlock'],
): ContentBlockTranslation {
  // console.log('optimizeContentBlock', JSON.stringify(contentBlock))

  function extractValues(block: any): any {
    if (block.value) {
      return block.value
    } else if (block.children) {
      return block.children.map(extractValues)
    }
    return ''
  }

  return contentBlock.map((block) => extractValues(block.mainContent.value.document))
}

function reconstructContentBlock(
  translatedContentBlock: ContentBlockTranslation,
  originalContentBlock: MainArticleContentBlock['contentBlock'],
): MainArticleContentBlock['contentBlock'] {
  function applyTranslation(original: any, translation: any): void {
    if (original.value && translation) {
      original.value =
        typeof translation === 'string' ? translation : translation[0] || original.value
    } else if (original.children && Array.isArray(translation)) {
      original.children.forEach((child: any, idx: number) => {
        applyTranslation(child, translation[idx])
      })
    }
  }

  originalContentBlock.forEach((block: any, index: number) => {
    applyTranslation(block.mainContent.value.document, translatedContentBlock[index])
  })

  return originalContentBlock
}

export function extractTitleAndDescriptionNested(article: BlogArticleRecord) {
  return {
    title: article.title || '',
    description: article.description || '',
    topics: article.topics || [],
    seo: {
      title: article.seo?.title || '',
      description: article.seo?.description || '',
    },
  }
}
