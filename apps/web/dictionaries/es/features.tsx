import type { FeatureContent } from '@/types/home'

export const featuresContent: FeatureContent[] = [
  {
    title: 'Características',
    description:
      'Descubra las capacidades clave que hacen de Bitlauncher la principal plataforma para finanzas descentralizadas.',
  },
  {
    title: 'Subastas por lotes para el descubrimiento de precios equitativos',
    description:
      'Nuestra plataforma revoluciona la financiación inicial al implementar un sistema de subasta por lotes para la venta de tokens, lo que garantiza un descubrimiento de precios justo y transparente. Este método permite a todos los participantes ofertar dentro de un período fijo, con tokens asignados a un precio de compensación uniforme. Este enfoque evita la manipulación de precios y garantiza que todos los inversores tengan igual acceso a las oportunidades de inversión, lo que lo convierte en un mercado justo tanto para las nuevas empresas como para los inversores.',
    label: 'Subastas por lotes',
    imgSrc: '/images/home/auction-bids-chart.svg',
    imgAlt: 'Batch Auctions',
  },
  {
    title: 'Herramientas de organización autónoma descentralizada (DAO)',
    description:
      'Bitlauncher está equipado con herramientas DAO avanzadas que permiten a nuestra comunidad participar directamente en los procesos de gobernanza y toma de decisiones. Estas herramientas facilitan la interacción y la colaboración fluidas, lo que permite a los poseedores de tokens proponer, votar e implementar cambios dentro de la plataforma. Este nivel de participación garantiza que cada miembro tenga voz en la dirección del proyecto, lo que mejora la transparencia y se alinea con nuestro compromiso con la innovación impulsada por la comunidad.',
    label: 'Herramientas DAO',
    imgSrc: '/images/home/dao-vote.svg',
    imgAlt: 'DAO Tools',
  },
]
