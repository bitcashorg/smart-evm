import type { Lang } from '@/dictionaries/locales'

export interface LangProp {
  lang: Lang
}

export interface CommonPageParams extends LangProp {}

export interface CommonPageProps {
  params: CommonPageParams
}

export interface ProjectPageParams extends CommonPageParams {
  project: string
}

export interface ProjectPageProps {
  params: ProjectPageParams
}

export interface ProjectPagePropsWithChildren {
  children: React.ReactNode
}
