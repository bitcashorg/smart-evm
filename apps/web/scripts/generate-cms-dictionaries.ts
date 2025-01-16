import {
  getArticleSections,
  getBlogArticleData,
  getBlogCategoryLandingData
} from "@/services/datocms";

import { generateShortLink } from "@/app/actions/general";
import { Lang } from "@/dictionaries/locales";
import { AVAILABLE_LANGS } from "@/lib/config";
import * as fs from "fs";
import { constants } from 'fs/promises';
import path from "node:path";
import pLimit from 'p-limit';

async function getArticleCategories(lang: Lang) {
  const categoriesData = await getArticleSections(lang as Lang);
  return categoriesData.map((section) => section.slug);
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.promises.access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function addShortLinksForArticles(lang: Lang, category: string, slugs: string[]) {
  const limit = pLimit(4);

  const processSlug = async (slug: string) => {
    const dirPath = `./dictionaries/${lang}/blog/${category}`;
    const fileName = `${slug}.json`;
    const filePath = path.resolve(dirPath, fileName);

    if (!(await fileExists(filePath))) {
      console.error(`File does not exist: ${filePath}`);
      return;
    }

    try {
      await getBlogArticleData(lang as Lang, category, slug);

      const data = await fs.promises.readFile(filePath, "utf-8");
      const json = JSON.parse(data);

      const canonicalUrl = `https://bitlauncher.ai/${lang}/${category}/${slug}`;

      if (!json.shortLink) {
        const shortLink = (await generateShortLink(canonicalUrl, false)).data?.shortLink;

        json["shortLink"] = shortLink ?? "";

        const updatedJson = JSON.stringify(json, null, 2);
        await fs.promises.writeFile(filePath, updatedJson, "utf-8");
      }
    } catch (e) {
      console.error(`Failed to generate short link for article ${filePath}:`, e);
    }
  };

  const shortLinkPromises = slugs.map(slug => limit(() => processSlug(slug)));
  await Promise.all(shortLinkPromises);
}

async function main() {
  const limit = pLimit(1);

  const categories = await Promise.all(AVAILABLE_LANGS.map(lang => getArticleCategories(lang as Lang)));
  let langIndex = 0;

  for (const lang of AVAILABLE_LANGS) {
    for (const category of categories[langIndex]) {
      const articles = (await getBlogCategoryLandingData(lang as Lang, category)).sections.map((section) => section.articles);
      const slugs = articles.map((art) => art.map((a) => a.slug)).flat();
      
      const throttledTasks = slugs.map(slug => 
        limit(() => addShortLinksForArticles(lang as Lang, category, [slug]))
      );
      await Promise.all(throttledTasks);
    }
    langIndex++;
  }
}

main();