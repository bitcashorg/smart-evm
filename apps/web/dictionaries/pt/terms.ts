import type {
  ContentTextType,
  PageContentData,
} from '@/components/shared/content'

const policiesAndTerms = [
  {
    title: 'Política de Privacidade',
    content:
      'Nós respeitamos sua privacidade. Nenhum dado pessoal é armazenado ou compartilhado com terceiros. Recolhemos apenas e-mails dos assinantes da nossa newsletter e garantimos a sua proteção contra acessos não autorizados.',
  },
  {
    title: 'Termos de Serviço',
    content:
      'Ao utilizar nossos serviços, você concorda com nossos termos. Certifique-se de compreender os riscos associados às moedas e plataformas digitais. Não armazenamos os seus dados pessoais, exceto para assinaturas de e-mail.',
  },
  {
    title: 'Nenhuma política de cookies',
    content:
      'Nosso site não utiliza cookies. A sua navegação e interação com os nossos serviços são privadas e não rastreadas por cookies.',
  },
  {
    title: 'Assinatura do boletim informativo',
    content:
      'Os assinantes da nossa newsletter concordam em fornecer seus endereços de e-mail para atualizações regulares. Você pode cancelar a inscrição a qualquer momento através do link fornecido em cada e-mail.',
  },
  {
    title: 'Proteção de dados',
    content:
      'Implementamos medidas de segurança rigorosas para proteger suas informações. Seu e-mail é armazenado com segurança e é usado apenas para envio de newsletters.',
  },
] as const

// Define the content using mapped policies and terms
const content: PageContentData = [
  {
    type: 'h1',
    text: 'Política de Privacidade e Termos de Serviço para Participantes do Bitlauncher',
  },
  {
    type: 'p',
    text: 'Entenda nosso compromisso com sua privacidade e suas responsabilidades ao usar nossos serviços de plataforma de lançamento de criptografia:',
  },
  ...policiesAndTerms.flatMap((item, index) => [
    { type: 'h2' as ContentTextType, text: `${index + 1}. ${item.title}` },
    { type: 'p' as ContentTextType, text: item.content },
  ]),
]

export const terms = {
  content,
} as const
