import { loadEnvConfig } from '@repo/config'

const appEnv = process.env.NEXT_PUBLIC_APP_ENV || 'dev'

export const AVAILABLE_LANGS = ['en', 'es', 'pt', 'fr', 'vi', 'ko', 'zh']

export const appConfig = {
  env: appEnv,
  ...loadEnvConfig(appEnv),
  eosRpc: 'https://eos.greymass.com',
  trigger: {
    apiKey: process.env.TRIGGER_SECRET_KEY || '',
  },
  alchemy: {
    notifyToken: process.env.ALCHEMY_NOTIFY_TOKEN || '',
  },
  analytics: {
    google: {
      siteVerification:
        process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN || '',
    },
    pinterest: {
      domainVerification:
        process.env.NEXT_PUBLIC_PINTEREST_DOMAIN_VERIFICATION_TOKEN || '',
    },
    multibase: {
      key: process.env.NEXT_PUBLIC_MULTIBASE_API_KEY,
    },
  },
  features: {
    wallet: process.env.NEXT_PUBLIC_ENABLE_WALLET_REDIRECT === 'true',
    newNavStruct: process.env.NEXT_PUBLIC_FEAT_NEW_NAV_STRUCT === 'true',
    presale: process.env.NEXT_PUBLIC_FEAT_PRESALE === 'true',
    sections: process.env.NEXT_PUBLIC_NEW_SECTIONS === 'true',
    learn: process.env.NEXT_PUBLIC_LEARN_SECTION === 'true',
    i18n: process.env.NEXT_PUBLIC_NEW_I18N === 'true',
    auction: process.env.NEXT_PUBLIC_FEAT_AUCTION === 'true',
    aiAssistant: process.env.NEXT_PUBLIC_FEAT_AI_ASSISTANT === 'true',
  },
  datocms: {
    endpoint: process.env.NEXT_PUBLIC_CMS_GRAPHQL_API || '',
    key: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
  },
} as const
