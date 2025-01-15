import type { ContentTextType, PageContentData } from '@/components/shared/content'

const securityTips = [
  {
    title: 'Cuidado com ataques de phishing',
    content:
      'Phishing é uma técnica comum usada por invasores para obter acesso às suas informações pessoais. Sempre verifique a URL do Bitlauncher e certifique-se de que é o site legítimo antes de conectar sua carteira MetaMask. Tenha cuidado com e-mails ou sites que se fazem passar pelo Bitlauncher.',
  },
  {
    title: 'Segurança MetaMask',
    content:
      'Ao usar MetaMask, nunca compartilhe sua frase-semente com ninguém. Tenha cuidado com qualquer site ou pessoa que solicite suas credenciais MetaMask. Sempre bloqueie sua carteira MetaMask quando não estiver em uso.',
  },
  {
    title: 'Representação no Discord e nas mídias sociais',
    content:
      'Desconfie de indivíduos em plataformas como Discord e mídias sociais que afirmam ser representantes do Bitlauncher. A equipe oficial nunca solicitará suas chaves privadas ou credenciais de carteira.',
  },
  {
    title: 'Proteja seu ambiente digital',
    content:
      'Certifique-se de que seu computador e sua conexão com a Internet estejam seguros. Use software antivírus, habilite firewalls e atualize seu software regularmente para evitar ataques de malware.',
  },
  {
    title: 'Verifique novamente os detalhes da transação',
    content:
      'Antes de confirmar qualquer transação no MetaMask, verifique novamente o endereço do destinatário, o valor e as taxas do gás. Os golpistas muitas vezes tentam manipular os detalhes da transação.',
  },
  {
    title: 'Mantenha-se informado e atualizado',
    content:
      'Siga apenas os canais oficiais do Bitlauncher para atualizações e informações. Não confie em fontes não verificadas.',
  },
  {
    title: 'Denunciar atividades suspeitas',
    content:
      'Se você encontrar alguma atividade suspeita ou acreditar que foi vítima de um golpe, entre em contato com o suporte oficial do Bitlauncher imediatamente.',
  },
] as const

// Define the content using mapped security tips
const content: PageContentData = [
  {
    type: 'h1',
    text: 'Recomendações de segurança para participantes do Bitlauncher',
  },
  {
    type: 'p',
    text: 'Participar de leilões no Bitlauncher, um fork do Gnosis, requer vigilância e consciência sobre diversas ameaças à segurança. Aqui estão algumas dicas cruciais para ajudar a manter seus investimentos seguros:',
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
