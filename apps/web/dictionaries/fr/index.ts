import { about } from './about'
import auction from './auction'
import faq from './faq'
import { featuresContent } from './features'
import footer from './footer'
import home from './home'
import nav from './nav'
import { projects } from './projects'
import { security } from './security'
import { terms } from './terms'
import { whitepaper } from './whitepaper'
import { whyChooseUs } from './whyChooseUs'

export default {
  home,
  projects,
  whitepaper,
  about,
  security,
  terms,
  auction,
  footer,
  faq,
  whyChooseUs,
  featuresContent,
  nav,
} as const
