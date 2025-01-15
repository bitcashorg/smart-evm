import type * as Icons from 'lucide-react'

export interface Feature {
  icon: keyof typeof Icons
  title: string
  description: string
}

export interface FeatureContent {
  title: string
  description: string
  label?: string
  imgSrc?: string
  imgAlt?: string
}
