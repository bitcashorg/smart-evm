import { getCMSSdk } from '@/services/datocms/graphql/cms'
import type { PageSeoRecord } from '@/services/datocms/graphql/generated/cms'

export async function getPageSeoText(type: string): Promise<CMSPageSeoText> {
  try {
    const data = await getCMSSdk().query({
      pageSeo: {
        __args: {
          locale: 'en',
          fallbackLocales: ['en'],
          filter: {
            seoType: {
              eq: type,
            },
          },
        },
        pageSeo: {
          description: true,
          image: {
            alt: true,
            height: true,
            url: true,
            title: true,
            size: true,
            width: true,
          },
          title: true,
          twitterCard: true,
        },
        description: true,
        title: true,
        seoType: true,
        id: true,
        _createdAt: true,
      },
    })

    return data.pageSeo as CMSPageSeoText
  } catch (error) {
    console.error('datocms-layout.service::getLayoutText::[ERROR]', error)

    return {
      pageSeo: {
        description: 'Lorem ipsum dolor sit amet consort sit!',
        image: null,
        title: 'Eli5 | BitcashBank',
        twitterCard: null,
        noIndex: false,
        __typename: 'SeoField',
      },
      description: 'Lorem ipsum dolor sit amet consort sit!',

      title: 'Eli5 | BitcashBank',
      seoType: 'eli5',
      id: '164119661',
      _createdAt: '2023-06-12T06:53:45+01:00',
    }
  }
}

export interface CMSPageSeoText {
  pageSeo: PageSeoRecord['pageSeo']
  seoType: PageSeoRecord['seoType']
  id: PageSeoRecord['id']
  description: PageSeoRecord['description']
  title: PageSeoRecord['title']
  _createdAt: PageSeoRecord['_createdAt']
}
