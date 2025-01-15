import type { FeatureContent } from '@/types/home'

export const featuresContent: FeatureContent[] = [
  {
    title: '特徵',
    description: '了解使 Bitlauncher 成為去中心化金融首要平台的關鍵功能。',
  },
  {
    title: '批量拍賣以實現公平的價格發現',
    description:
      '我們的平台透過實施代幣銷售批量拍賣系統，徹底改變了啟動資金，確保公平和透明的價格發現。這種方式允許所有參與者在固定期限內競價，並以統一的清算價格分配代幣。這種方法可以防止價格操縱，並確保所有投資者都有平等的投資機會，使其成為新創公司和投資者的公平市場。',
    label: 'Batch Auctions',
    imgSrc: '/images/home/auction-bids-chart.svg',
    imgAlt: 'Batch Auctions',
  },
  {
    title: '去中心化自治組織 (DAO) 工具',
    description:
      'Bitlauncher 配備了先進的 DAO 工具，使我們的社群能夠直接參與治理和決策過程。這些工具促進無縫互動和協作，允許代幣持有者在平台內提議、投票和實施變更。這種程度的參與確保每個成員都對專案的方向有發言權，提高透明度並符合我們對社區驅動創新的承諾。',
    label: '去中心化工具',
    imgSrc: '/images/home/dao-vote.svg',
    imgAlt: 'DAO Tools',
  },
]
