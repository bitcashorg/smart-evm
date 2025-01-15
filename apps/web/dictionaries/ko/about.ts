import type { PageContentData } from '@/components/shared/content'

export const about = {
  content: [
    { type: 'h1', text: 'Bitlauncher 작동 방식' },
    {
      type: 'p',
      text: 'Bitlauncher는 토큰 경매에 대한 공정한 가격 발견을 가능하게 하는 플랫폼입니다. 플랫폼의 목적은 팀이 토큰의 공정한 가격을 쉽게 찾을 수 있도록 하는 것입니다.',
    },
    {
      type: 'p',
      text: 'Bitlauncher는 분산형 금융 세계와 전통적인 금융 세계 모두에 대해 공정한 가격을 보장하기 위해 널리 사용되는 메커니즘인 일괄 경매를 사용합니다. 일괄 경매를 통해 모든 참가자에게 동일한 정산 가격으로 구매자와 판매자의 지정가 주문을 일치시킬 수 있습니다. 초기 DEX 제공(예: Gnosis 프로토콜 v1의 Mesa 인터페이스)과 같은 암호화 사용 사례부터 기존 금융 경매(예: Google IPO 및 NYSE 공개 경매)에 이르기까지 일괄 경매는 경매 자산의 민주화에 중요한 역할을 합니다. 이 기능은 신뢰할 수 없고 효율적으로 운영하면서 공정한 토큰 배포를 보장해야 하는 분산형 팀에 특히 중요합니다. 일괄 경매는 사용자에게 토큰에 대한 가장 투명하고 공정한 경매 메커니즘을 제공하는 데 관심이 있는 모든 팀이나 커뮤니티를 위한 기본적인 "DeFi 레고" 블록이 될 것입니다.',
    },
    { type: 'h2', text: '다양한 경매 메커니즘 비교' },
    {
      type: 'p',
      text: 'bitlauncher의 오픈 소스 스마트 계약을 통해 프로젝트는 자체 분산형 공정 경매를 빠르고 안전하게 만들 수 있습니다. 중앙 집중식 큐레이션 프로세스에 의존하는 일부 솔루션과 달리 Bitlauncher는 무허가이므로 모든 Ethereum 팀이 가격 찾기를 위해 일괄 경매를 배포하고 실행할 수 있습니다. Bitlauncher를 사용하면 모든 Ethereum 프로젝트 또는 커뮤니티에서 다음과 같은 경매를 수행할 수 있습니다.',
    },
    {
      type: 'Image',
      src: '/images/auction-comparison.webp',
      alt: 'Comparison Chart',
      width: 720,
      height: 400,
      layout: 'responsive',
      className: 'dark:invert',
    },
    { type: 'h2', text: 'Bitlauncher를 통한 공정한 가격 발견' },
    {
      type: 'p',
      text: '일괄 경매를 통해 가격 검색을 위한 쉬운 인터페이스를 제공함으로써 Bitlauncher는 다음을 가능하게 합니다.',
    },
    {
      type: 'ul',
      items: [
        '경매인은 자신의 토큰을 판매하려는 최소 가격을 결정합니다.',
        '입찰자는 지불할 의사가 있는 최대 가격을 설정합니다.',
      ],
    },
    {
      type: 'p',
      text: '이러한 특성을 통해 플랫폼은 두 참가자 모두 자신이 받고 싶은 것 이상을 얻을 수 있는 공정한 가격 책정 역학을 만들 수 있습니다. 또한 경매의 배치 시간 특성은 선행 실행 및 가스 입찰 전쟁을 크게 줄여 경매인과 입찰자로부터 추출되는 가치의 양을 줄입니다.',
    },
  ] as PageContentData,
}
