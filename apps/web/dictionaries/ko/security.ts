import type {
  ContentTextType,
  PageContentData,
} from '@/components/shared/content'

const securityTips = [
  {
    title: '피싱 공격에 주의하세요',
    content:
      '피싱은 공격자가 귀하의 개인 정보에 접근하기 위해 사용하는 일반적인 기술입니다. MetaMask 지갑을 연결하기 전에 항상 Bitlauncher의 URL을 확인하고 합법적인 사이트인지 확인하세요. Bitlauncher를 사칭하는 이메일이나 웹사이트에 주의하세요.',
  },
  {
    title: '메타마스크 보안',
    content:
      'MetaMask를 사용할 때 시드 문구를 누구와도 공유하지 마십시오. MetaMask 자격 증명을 요구하는 웹사이트나 사람을 조심하세요. MetaMask 지갑을 사용하지 않을 때는 항상 잠그세요.',
  },
  {
    title: 'Discord 및 소셜 미디어에서의 명의 도용',
    content:
      'Bitlauncher의 대표자라고 주장하는 Discord 및 소셜 미디어와 같은 플랫폼의 개인을 조심하세요. 공식 직원은 절대 개인 키나 지갑 자격 증명을 요구하지 않습니다.',
  },
  {
    title: '디지털 환경을 보호하세요',
    content:
      '퓨터와 인터넷 연결이 안전한지 확인하세요. 바이러스 백신 소프트웨어를 사용하고, 방화벽을 활성화하고, 정기적으로 소프트웨어를 업데이트하여 맬웨어 공격을 방지하세요.',
  },
  {
    title: '거래내역 다시 확인',
    content:
      'MetaMask에서 거래를 확인하기 전에 수신자 주소, 금액, 가스 요금을 다시 확인하세요. 사기꾼은 종종 거래 세부 정보를 조작하려고 시도합니다.',
  },
  {
    title: '최신 정보를 받아보세요',
    content:
      '업데이트 및 정보는 공식 Bitlauncher 채널만 따르십시오. 확인되지 않은 출처를 신뢰하지 마십시오.',
  },
  {
    title: '의심스러운 활동 신고',
    content:
      '의심스러운 활동을 발견하거나 사기 피해자라고 생각되면 즉시 공식 Bitlauncher 지원팀에 문의하세요.',
  },
] as const

// Define the content using mapped security tips
const content: PageContentData = [
  { type: 'h1', text: 'Bitlauncher 참가자를 위한 보안 권장 사항' },
  {
    type: 'p',
    text: 'Gnosis의 포크인 Bitlauncher의 경매에 참여하려면 다양한 보안 위협에 대한 경계와 인식이 필요합니다. 다음은 귀하의 투자를 안전하게 유지하는 데 도움이 되는 몇 가지 중요한 팁입니다.',
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
