import { security } from './security'
import { about } from './about'
import home from './home'
import { projects } from './projects'
import { whitepaper } from './whitepaper'
import { terms } from './terms'
import auction from './auction'
import footer from './footer'
import faq from './faq'

export default {
  home,
  projects,
  whitepaper,
  about,
  security,
  terms, 
  auction,
  footer, 
  faq
} as const
