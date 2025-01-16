import type {
  ContentTextType,
  PageContentData,
} from '@/components/shared/content'

const policiesAndTerms = [
  {
    title: '개인정보 보호정책',
    content:
      '우리는 귀하의 개인 정보를 존중합니다. 개인 데이터는 저장되거나 제3자와 공유되지 않습니다. 우리는 뉴스레터 구독자의 이메일만 수집하고 무단 액세스로부터 이메일을 보호합니다.',
  },
  {
    title: '서비스 약관',
    content:
      '당사 서비스를 사용함으로써 귀하는 당사 약관에 동의합니다. 디지털 통화 및 플랫폼과 관련된 위험을 이해했는지 확인하세요. 당사는 이메일 구독을 제외하고 귀하의 개인 데이터를 저장하지 않습니다.',
  },
  {
    title: '쿠키 금지 정책',
    content:
      '당사 웹사이트는 쿠키를 사용하지 않습니다. 귀하의 탐색 및 당사 서비스와의 상호 작용은 비공개이며 쿠키로 추적되지 않습니다.',
  },
  {
    title: '뉴스레터 구독',
    content:
      '뉴스레터 구독자는 정기적인 업데이트를 위해 이메일 주소를 제공하는 데 동의합니다. 각 이메일에 제공된 링크를 통해 언제든지 구독을 취소할 수 있습니다.',
  },
  {
    title: '데이터 보호',
    content:
      '우리는 귀하의 정보를 보호하기 위해 엄격한 보안 조치를 시행합니다. 귀하의 이메일은 안전하게 저장되며 뉴스레터 발송에만 사용됩니다.',
  },
] as const

// Define the content using mapped policies and terms
const content: PageContentData = [
  {
    type: 'h1',
    text: 'Bitlauncher 참가자를 위한 개인정보 보호정책 및 서비스 약관',
  },
  {
    type: 'p',
    text: '당사의 Crypto Launchpad 서비스를 사용할 때 귀하의 개인 정보 보호에 대한 당사의 헌신과 귀하의 책임을 이해하십시오.',
  },
  ...policiesAndTerms.flatMap((item, index) => [
    { type: 'h2' as ContentTextType, text: `${index + 1}. ${item.title}` },
    { type: 'p' as ContentTextType, text: item.content },
  ]),
]

export const terms = {
  content,
} as const
