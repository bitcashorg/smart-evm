import type { ContentTextType, PageContentData } from '@/components/shared/content'

const policiesAndTerms = [
  {
    title: 'Politique de confidentialité',
    content:
      "Nous respectons votre vie privée. Aucune donnée personnelle n'est stockée ou partagée avec des tiers. Nous ne collectons que les adresses e-mail de nos abonnés à la newsletter et nous assurons leur protection contre tout accès non autorisé.",
  },
  {
    title: "Conditions d'utilisation",
    content:
      'En utilisant nos services, vous acceptez nos conditions. Assurez-vous de comprendre les risques associés aux devises numériques et aux plateformes. Nous ne stockons pas vos données personnelles sauf pour les abonnements par e-mail.',
  },
  {
    title: 'Politique sans cookies',
    content:
      "Notre site Web n'utilise pas de cookies. Votre navigation et votre interaction avec nos services sont privées et non suivies par des cookies.",
  },
  {
    title: 'Abonnement à la newsletter',
    content:
      'Les abonnés à notre newsletter acceptent de fournir leur adresse e-mail pour des mises à jour régulières. Vous pouvez vous désabonner à tout moment via le lien fourni dans chaque e-mail.',
  },
  {
    title: 'Protection des données',
    content:
      "Nous mettons en œuvre des mesures de sécurité rigoureuses pour protéger vos informations. Votre adresse e-mail est stockée de manière sécurisée et n'est utilisée que pour l'envoi de newsletters.",
  },
] as const

// Define the content using mapped policies and terms
const content: PageContentData = [
  {
    type: 'h1',
    text: "Politique de confidentialité et Conditions d'utilisation pour les participants à Bitlauncher",
  },
  {
    type: 'p',
    text: "Comprenez notre engagement envers votre vie privée et vos responsabilités lors de l'utilisation de nos services de lancement de crypto:",
  },
  ...policiesAndTerms.flatMap((item, index) => [
    { type: 'h2' as ContentTextType, text: `${index + 1}. ${item.title}` },
    { type: 'p' as ContentTextType, text: item.content },
  ]),
]

export const terms = {
  content,
} as const
