import type { ContentTextType, PageContentData } from '@/components/shared/content'

const securityTips = [
  {
    title: 'Méfiez-vous des attaques de phishing',
    content:
      "Le phishing est une technique courante utilisée par les attaquants pour accéder à vos informations personnelles. Vérifiez toujours l'URL de Bitlauncher et assurez-vous qu'il s'agit du site légitime avant de connecter votre portefeuille MetaMask. Soyez prudent avec les emails ou les sites web se faisant passer pour Bitlauncher.",
  },
  {
    title: 'Sécurité de MetaMask',
    content:
      "Lorsque vous utilisez MetaMask, ne partagez jamais votre phrase de récupération avec quiconque. Soyez vigilant envers tout site web ou personne vous demandant vos identifiants MetaMask. Verrouillez toujours votre portefeuille MetaMask lorsqu'il n'est pas utilisé.",
  },
  {
    title: "Usurpation d'identité sur Discord et les réseaux sociaux",
    content:
      'Méfiez-vous des individus sur des plateformes comme Discord et les réseaux sociaux qui prétendent être des représentants de Bitlauncher. Le personnel officiel ne demandera jamais vos clés privées ou vos identifiants de portefeuille.',
  },
  {
    title: 'Sécurisez votre environnement numérique',
    content:
      "Assurez-vous que vos appareils sont protégés avec les dernières mises à jour de sécurité et un logiciel antivirus. Évitez d'utiliser des réseaux Wi-Fi publics lorsque vous interagissez avec votre portefeuille MetaMask ou participez aux enchères sur Bitlauncher.",
  },
  {
    title: 'Vérifiez bien les détails de la transaction',
    content:
      "Avant de confirmer toute transaction sur MetaMask, vérifiez deux fois l'adresse du destinataire, le montant et les frais de gaz. Les escrocs essaient souvent de manipuler les détails de la transaction.",
  },
  {
    title: 'SRester informé et à jour',
    content:
      'Suivez uniquement les canaux officiels de Bitlauncher pour les mises à jour et les informations. Ne faites pas confiance aux sources non vérifiées.',
  },
  {
    title: 'Signaler les activités suspectes',
    content:
      "Si vous rencontrez une activité suspecte ou si vous pensez être victime d'une escroquerie, contactez immédiatement le support officiel de Bitlauncher.",
  },
] as const

// Define the content using mapped security tips
const content: PageContentData = [
  {
    type: 'h1',
    text: 'Recommandations de sécurité pour les participants de Bitlauncher',
  },
  {
    type: 'p',
    text: 'Participer aux enchères sur Bitlauncher, un fork de Gnosis, nécessite de la vigilance et une prise de conscience des diverses menaces de sécurité. Voici quelques conseils essentiels pour protéger vos investissements:',
  },
  ...securityTips.flatMap((tip, index) => [
    { type: 'h2' as ContentTextType, text: `${tip.title}` },
    { type: 'p' as ContentTextType, text: tip.content },
  ]),
  // { type: 'hr' }
]

export const security = {
  content,
} as const
