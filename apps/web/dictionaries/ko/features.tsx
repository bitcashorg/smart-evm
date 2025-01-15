import type { FeatureContent } from '@/types/home'

export const featuresContent: FeatureContent[] = [
  {
    title: '특징',
    description:
      'Bitlauncher를 분산형 금융을 위한 최고의 플랫폼으로 만드는 주요 역량을 알아보세요.',
  },
  {
    title: '공평한 가격 발견을 위한 일괄 경매',
    description:
      '저희 플랫폼은 토큰 판매를 위한 일괄 경매 시스템을 구현하여 스타트업 자금 조달에 혁신을 일으켜 공정하고 투명한 가격 발견을 보장합니다. 이 방법을 통해 모든 참가자는 고정된 기간 내에 입찰할 수 있으며 토큰은 균일한 청산 가격으로 할당됩니다. 이 접근 방식은 가격 조작을 방지하고 모든 투자자가 투자 기회에 동등하게 접근할 수 있도록 하여 스타트업과 투자자 모두에게 공정한 시장을 제공합니다.',
    label: '일괄 경매',
    imgSrc: '/images/home/auction-bids-chart.svg',
    imgAlt: 'Batch Auctions',
  },
  {
    title: '분산형 자율 조직(DAO) 도구',
    description:
      'Bitlauncher에는 커뮤니티가 거버넌스 및 의사 결정 프로세스에 직접 참여할 수 있도록 지원하는 고급 DAO 도구가 장착되어 있습니다. 이러한 도구는 원활한 상호 작용과 협업을 촉진하여 토큰 보유자가 플랫폼 내에서 변경 사항을 제안하고, 투표하고, 구현할 수 있도록 합니다. 이러한 수준의 참여를 통해 모든 구성원은 프로젝트 방향에 대한 목소리를 낼 수 있으며 투명성을 높이고 커뮤니티 중심 혁신에 대한 약속을 준수할 수 있습니다.',
    label: 'DAO 도구',
    imgSrc: '/images/home/dao-vote.svg',
    imgAlt: 'DAO Tools',
  },
]
