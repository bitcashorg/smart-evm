import type { FeatureContent } from '@/types/home'

export const featuresContent: FeatureContent[] = [
  {
    title: 'Caractéristiques',
    description:
      'Découvrez les fonctionnalités clés qui font de Bitlauncher la première plateforme de finance décentralisée.',
  },
  {
    title: 'Enchères par lots pour une découverte de prix équitable',
    description:
      "Notre plateforme révolutionne le financement des startups en mettant en œuvre un système d'enchères par lots pour les ventes de jetons, garantissant une découverte des prix juste et transparente. Cette méthode permet à tous les participants d'enchérir dans un délai fixe, les jetons étant attribués à un prix de compensation uniforme. Cette approche empêche la manipulation des prix et garantit à tous les investisseurs un accès égal aux opportunités d'investissement, ce qui en fait un marché équitable pour les startups et les investisseurs.",
    imgSrc: '/images/home/auction-bids-chart.svg',
    imgAlt: 'Batch Auctions',
  },
  {
    title: "Outils d'organisation autonome décentralisée (DAO)",
    description:
      "Bitlauncher est équipé d'outils DAO avancés qui permettent à notre communauté de participer directement aux processus de gouvernance et de prise de décision. Ces outils facilitent une interaction et une collaboration transparentes, permettant aux détenteurs de jetons de proposer, de voter et de mettre en œuvre des changements au sein de la plateforme. Ce niveau d'engagement garantit que chaque membre a son mot à dire sur la direction du projet, améliorant ainsi la transparence et s'alignant sur notre engagement en faveur de l'innovation axée sur la communauté.",
    label: 'Outils DAO',
    imgSrc: '/images/home/dao-vote.svg',
    imgAlt: 'DAO Tools',
  },
]
