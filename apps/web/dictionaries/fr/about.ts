import type { PageContentData } from '@/components/shared/content'

export const about = {
  content: [
    { type: 'h1', text: 'Comment fonctionne BitLauncher' },
    {
      type: 'p',
      text: "Bitlauncher est une plateforme permettant la découverte de prix équitables pour les enchères de tokens. L'objectif de la plateforme est de faciliter pour les équipes la découverte d'un prix juste pour leur token.",
    },
    {
      type: 'p',
      text: "Bitlauncher utilise des enchères par lots, un mécanisme populaire pour garantir un prix équitable tant pour les mondes de la finance décentralisée que traditionnelle. Les enchères par lots permettent de faire correspondre les ordres limités des acheteurs et des vendeurs avec le même prix de compensation pour tous les participants. Des cas d'utilisation de la crypto comme les Initial DEX Offerings (comme ceux sur l'interface Mesa pour le protocole Gnosis v1) aux enchères financières traditionnelles (comme l'IPO de Google et l'enchère ouverte du NYSE), les enchères par lots jouent un rôle important dans la démocratisation des actifs mis aux enchères. Cette fonction est particulièrement importante pour les équipes décentralisées qui doivent garantir des distributions de tokens équitables tout en opérant de manière transparente et efficace. Les enchères par lots sont sur le point de devenir une brique fondamentale du « DeFi Lego » pour toute équipe ou communauté intéressée à offrir à ses utilisateurs le mécanisme d'enchères le plus transparent et le plus équitable pour leur token.",
    },
    { type: 'h2', text: "Comparaison des Différents Mécanismes d'Enchères" },
    {
      type: 'p',
      text: "Avec le contrat intelligent open-source de Bitlauncher, les projets peuvent rapidement et en toute sécurité créer leurs propres enchères décentralisées et équitables. Contrairement à certaines solutions dépendantes d'un processus de curation centralisé, Bitlauncher est sans permission, ce qui permet à toute équipe Ethereum de déployer et d'exécuter des enchères par lots pour trouver un prix. Bitlauncher permet à tout projet ou communauté Ethereum de conduire des enchères qui:",
    },
    {
      type: 'Image',
      src: '/images/auction-comparison.webp',
      alt: 'Comparison Chart',
      width: 720,
      height: 400,
      layout: 'responsive',
      className: 'dark:invert',
    },
    { type: 'h2', text: 'Découverte de Prix Équitable avec Bitlauncher' },
    {
      type: 'p',
      text: 'En fournissant une interface facile pour la découverte de prix avec des enchères par lots, Bitlauncher permet:',
    },
    {
      type: 'ul',
      items: [
        'Aux enchérisseurs de déterminer un prix minimum auquel ils sont prêts à vendre leurs jetons, et',
        "Aux enchérisseurs de fixer le prix maximum qu'ils sont prêts à payer",
      ],
    },
    {
      type: 'p',
      text: "Ces caractéristiques permettent à la plateforme de créer une dynamique de tarification équitable dans laquelle les deux participants obtiennent soit ce qu'ils étaient prêts à recevoir, soit plus. De plus, la nature par lots des enchères réduit considérablement le frontrunning et les guerres d'enchères de gas, diminuant la quantité de valeur extraite des enchérisseurs et des participants.",
    },
  ] as PageContentData,
}
