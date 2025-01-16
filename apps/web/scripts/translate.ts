import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import { type Lang, locales } from '@/dictionaries/locales'
import { promiseAllWithConcurrencyLimit } from '@/lib/utils'
import { anthropicTranslate } from '@/services/anthropic'
import type { BlogArticleData } from '@/services/datocms'
import {
  type TranslationData,
  extractTextForTranslation,
  extractTitleAndDescriptionNested,
  injectTextAfterTranslation,
} from '@/services/datocms/translation/utils'
import { getErrorMessage } from '@repo/errors'
import _ from 'lodash'

async function processFile(
  file: string,
  subDir: string,
  targetDir: string,
  lang: Lang,
) {
  if (file.endsWith('-index.json')) return

  if (file.endsWith('.json')) {
    const sourcePath = path.join(subDir, file)
    const targetPath = path.join(targetDir, path.basename(subDir), file)

    try {
      await fs.access(targetPath)
      console.log(`Translation already exists for ${targetPath}`)
      return
    } catch (err) {}

    console.log('🧑🏻‍💻 New Translation Started ', targetPath)
    await ensureDirectoryExists(path.join(targetDir, path.basename(subDir)))

    try {
      const englishVersion: BlogArticleData = JSON.parse(
        await fs.readFile(sourcePath, 'utf8'),
      )

      // get related blogs translataion
      const relatedBlogsPayload = {
        ...englishVersion,
        blogContent: undefined,
        relatedBlogs: englishVersion.relatedBlogs.map(
          extractTitleAndDescriptionNested,
        ),
      }
      const relatedBlogs = await anthropicTranslate(relatedBlogsPayload, lang)
      // console.log('relatedBlogs', relatedBlogs)
      // process.exit(0)
      if (!relatedBlogs) throw new Error('❌ Failed to translate related blogs')
      console.log('✅ related blogs and topics translated')

      // get blog content translation
      const optimized = extractTextForTranslation(englishVersion.blogContent)
      const optmizedMeta = _.omit(optimized, 'contentBlock')
      const blogMeta = await anthropicTranslate(optmizedMeta, lang)
      if (!blogMeta) throw new Error('❌ Failed to translate blog meta')
      console.log('✅ blog meta translated')

      if (!optimized.contentBlock)
        throw new Error('❌ Failed to optimize blog content')

      const optmizedContentActions = optimized.contentBlock?.map(
        (block) => () => {
          console.log('🧑🏻‍💻 translating blog content block ...')
          return anthropicTranslate(block, lang)
        },
      )
      const blogContentResults = await promiseAllWithConcurrencyLimit(
        optmizedContentActions.map((action) => async () => {
          const result = await action()
          if (!result || !result.translation) {
            throw new Error('❌ Failed to translate a blog content block')
          }
          return result
        }),
        1,
      ).then((results) => {
        if (results.some((result) => result === null)) {
          throw new Error(
            '❌ One or more blog content blocks failed to translate',
          )
        }
        return results
      })

      const blogContent = blogContentResults.flatMap(
        (result) => result?.translation,
      )

      const translations: TranslationData = {
        ...blogMeta.translation,
        contentBlock: blogContent,
        relatedBlogs: relatedBlogs.translation,
      }

      const translatedContent = {
        ...englishVersion,
        topics: relatedBlogs.translation.topics,
        blogContent: injectTextAfterTranslation(
          englishVersion.blogContent,
          translations,
        ),
        relatedBlogs: englishVersion.relatedBlogs.map((blog, index) => {
          return {
            ...blog,
            ...relatedBlogs.translation.relatedBlogs[index],
          }
        }),
      }

      await fs.writeFile(targetPath, JSON.stringify(translatedContent, null, 2))
      console.log('✅ New Translation completed', targetPath)
    } catch (error) {
      console.log(getErrorMessage(error))
    }
  }
}

async function processDirectory(
  directory: string,
  targetDir: string,
  lang: Lang,
) {
  const subDir = path.join(directory)
  const subFiles = await fs.readdir(subDir)

  for (const subFile of subFiles) {
    await processFile(subFile, subDir, targetDir, lang)
  }
}

async function copyJsonFiles(lang: Lang) {
  const sourceDir = path.join('./dictionaries/en/blog')
  const targetDir = path.join(`./dictionaries/${lang}/blog`)

  await ensureDirectoryExists(targetDir)

  try {
    const files = await fs.readdir(sourceDir, { withFileTypes: true })

    for (const file of files) {
      if (file.isDirectory()) {
        await processDirectory(path.join(sourceDir, file.name), targetDir, lang)
      }
    }
  } catch (err) {
    console.error('Error processing files:', err)
  }
}
async function ensureDirectoryExists(directory: string) {
  await fs.mkdir(directory, { recursive: true })
}

async function processLocale(): Promise<void> {
  await promiseAllWithConcurrencyLimit(
    locales
      .filter((lang) => lang !== 'en')
      .map((lang) => () => copyJsonFiles(lang)),
    1,
  )
}

processLocale()
