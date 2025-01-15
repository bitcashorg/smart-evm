import type { FeatureContent } from '@/types/home'

export const featuresContent: FeatureContent[] = [
  {
    title: 'Características',
    description:
      'Descubra os principais recursos que fazem do Bitlauncher a principal plataforma para finanças descentralizadas.',
  },
  {
    title: 'Leilões em lote para descoberta de preços equitativos',
    description:
      'Nossa plataforma revoluciona o financiamento de startups ao implementar um sistema de leilão em lote para vendas de tokens, garantindo uma descoberta de preço justa e transparente. Esse método permite que todos os participantes façam lances dentro de um período fixo, com tokens alocados a um preço de compensação uniforme. Essa abordagem evita a manipulação de preços e garante que todos os investidores tenham acesso igual às oportunidades de investimento, tornando-o um mercado justo para startups e investidores.',
    label: 'Leilões em lote',
    imgSrc: '/images/home/auction-bids-chart.svg',
    imgAlt: 'Batch Auctions',
  },
  {
    title: 'Ferramentas de Organização Autônoma Descentralizada (DAO)',
    description:
      'O Bitlauncher é equipado com ferramentas DAO avançadas que capacitam nossa comunidade a participar diretamente dos processos de governança e tomada de decisão. Essas ferramentas facilitam a interação e colaboração contínuas, permitindo que os detentores de tokens proponham, votem e implementem mudanças dentro da plataforma. Esse nível de engajamento garante que cada membro tenha uma voz na direção do projeto, aumentando a transparência e alinhando-se com nosso compromisso com a inovação orientada pela comunidade.',
    label: 'Ferramentas DAO',
    imgSrc: '/images/home/dao-vote.svg',
    imgAlt: 'DAO Tools',
  },
]
