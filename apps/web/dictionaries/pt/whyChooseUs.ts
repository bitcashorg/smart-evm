import type { Feature } from '@/types/home'

export const whyChooseUs = {
  title: 'Porque escolher-nos',
  description:
    'Descubra as características únicas que nos diferenciam dos demais.',
  features: [
    {
      icon: 'ShoppingBasket',
      title: 'Leilão em lote para descoberta de preço justo',
      description:
        'Nosso sistema exclusivo de leilão em lote garante a descoberta de preços justa e transparente para todos os participantes.',
    },
    {
      icon: 'Group',
      title: 'Ferramentas DAO para organizações voltadas para a comunidade',
      description:
        'Fortaleça sua comunidade com nosso conjunto de ferramentas DAO para tomada de decisões e governança descentralizadas.',
    },
    {
      icon: 'Check',
      title: 'Avaliação de projetos baseada em fluxo de caixa',
      description:
        'Nosso modelo inovador de avaliação de projetos baseado em fluxo de caixa ajuda você a tomar decisões de investimento informadas.',
    },
    {
      icon: 'Flame',
      title: 'Tokenomics exclusivos de Burn & Mint',
      description:
        'Nosso modelo de token personalizado com mecanismos integrados de queima e cunhagem garante crescimento sustentável e valorização de valor.',
    },
    {
      icon: 'Globe',
      title: 'Estratégia de IA e Global-First',
      description:
        'Aproveitando o poder da IA ​​e uma abordagem global, oferecemos insights e oportunidades inigualáveis.',
    },
  ] as Feature[],
}
