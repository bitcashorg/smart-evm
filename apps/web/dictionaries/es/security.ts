import type { ContentTextType, PageContentData } from '@/components/shared/content'

const securityTips = [
  {
    title: 'Cuidado con los Ataques de Phishing',
    content:
      'El phishing es una técnica común utilizada por atacantes para obtener acceso a tu información personal. Siempre verifica la URL de Bitlauncher y asegúrate de que sea el sitio legítimo antes de conectar tu cartera MetaMask. Ten cuidado con correos electrónicos o sitios web que se hagan pasar por Bitlauncher.',
  },
  {
    title: 'Seguridad de MetaMask',
    content:
      'Al usar MetaMask, nunca compartas tu frase semilla con nadie. Ten cuidado con cualquier sitio web o persona que te pida las credenciales de MetaMask. Siempre bloquea tu cartera MetaMask cuando no la estés utilizando.',
  },
  {
    title: 'Suplantación de Identidad en Discord y Redes Sociales',
    content:
      'Ten cuidado con personas en plataformas como Discord y redes sociales que afirmen ser representantes de Bitlauncher. El personal oficial nunca te pedirá tus claves privadas o credenciales de cartera.',
  },
  {
    title: 'Protege tu Entorno Digital',
    content:
      'Asegúrate de que tus dispositivos estén protegidos con las últimas actualizaciones de seguridad y software antivirus. Evita usar redes Wi-Fi públicas cuando interactúes con tu cartera MetaMask o participes en subastas en Bitlauncher.',
  },
  {
    title: 'Verifica Detalles de las Transacciones',
    content:
      'Antes de confirmar cualquier transacción en MetaMask, verifica dos veces la dirección del destinatario, el monto y las tarifas de gas. Los estafadores a menudo intentan manipular los detalles de la transacción.',
  },
  {
    title: 'Mantente Informado y Actualizado',
    content:
      'Sigue solo los canales oficiales de Bitlauncher para obtener actualizaciones e información. No confíes en fuentes no verificadas.',
  },
  {
    title: 'Informa Actividades Sospechosas',
    content:
      'Si encuentras alguna actividad sospechosa o crees que eres víctima de una estafa, contacta inmediatamente con el soporte oficial de Bitlauncher.',
  },
] as const

// Define the content using mapped security tips
const content: PageContentData = [
  {
    type: 'h1',
    text: 'Recomendaciones de Seguridad para Participantes de Bitlauncher',
  },
  {
    type: 'p',
    text: 'Participar en subastas en Bitlauncher, una bifurcación de Gnosis, requiere vigilancia y conocimiento de diversas amenazas de seguridad. Aquí tienes algunos consejos cruciales para ayudar a mantener tus inversiones seguras:',
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
