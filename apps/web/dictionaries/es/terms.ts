import type {
  ContentTextType,
  PageContentData,
} from '@/components/shared/content'

const policiesAndTerms = [
  {
    title: 'Política de Privacidad',
    content:
      'Respetamos tu privacidad. No se almacena ni se comparte ningún dato personal con terceros. Solo recopilamos correos electrónicos de los suscriptores de nuestro boletín y garantizamos su protección contra el acceso no autorizado.',
  },
  {
    title: 'Términos de Servicio',
    content:
      'Al usar nuestros servicios, aceptas nuestros términos. Asegúrate de entender los riesgos asociados con las monedas digitales y las plataformas. No almacenamos tus datos personales excepto para las suscripciones por correo electrónico.',
  },
  {
    title: 'Política sin Cookies',
    content:
      'Nuestro sitio web no utiliza cookies. Tu navegación e interacción con nuestros servicios son privadas y no están rastreadas por cookies.',
  },
  {
    title: 'Suscripción al Boletín',
    content:
      'Los suscriptores de nuestro boletín aceptan proporcionar sus direcciones de correo electrónico para recibir actualizaciones regulares. Puedes darte de baja en cualquier momento a través del enlace proporcionado en cada correo electrónico.',
  },
  {
    title: 'Protección de Datos',
    content:
      'Implementamos medidas de seguridad rigurosas para proteger tu información. Tu correo electrónico se almacena de manera segura y solo se utiliza para enviar boletines informativos.',
  },
] as const

// Define the content using mapped policies and terms
const content: PageContentData = [
  {
    type: 'h1',
    text: 'Política de Privacidad y Términos de Servicio para Participantes de Bitlauncher',
  },
  {
    type: 'p',
    text: 'Entiende nuestro compromiso con tu privacidad y tus responsabilidades al usar nuestros servicios de plataforma de lanzamiento de criptomonedas:',
  },
  ...policiesAndTerms.flatMap((item, index) => [
    { type: 'h2' as ContentTextType, text: `${index + 1}. ${item.title}` },
    { type: 'p' as ContentTextType, text: item.content },
  ]),
]

export const terms = {
  content,
} as const
