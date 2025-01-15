import type { PageContentData } from '@/components/shared/content'

export const about = {
  content: [
    { type: 'h1', text: 'Bitlauncher 的工作原理' },
    {
      type: 'p',
      text: 'Bitlauncher 是一個為代幣拍賣提供公平價格發現的平台。該平台的目的是讓團隊輕鬆找到其代幣的公平價格。',
    },
    {
      type: 'p',
      text: 'Bitlauncher 使用大量拍賣，這是一種流行的機制，可確保去中心化和傳統金融世界的公平價格。大量拍賣可以將買家和賣家的限價訂單進行匹配，所有參與者的清算價格相同。從初始DEX 產品（如Gnosis 協議v1 的Mesa 介面上的產品）等加密用例到傳統金融拍賣（如Google 的IPO 和紐約證券交易所公開拍賣），大量拍賣在拍賣資產的民主化中發揮著重要作用。此功能對於去中心化團隊尤其重要，因為他們需要確保公平的代幣分配，同時無需信任且有效率地運作。對於任何有興趣為用戶提供最透明、最公平的代幣拍賣機制的團隊或社群來說，批量拍賣將成為基本的「DeFi 樂高」積木。',
    },
    { type: 'h2', text: '不同拍賣機制的比較' },
    {
      type: 'p',
      text: '借助bitlauncher的開源智能合約，專案可以快速、安全地創建自己的去中心化公平拍賣。與某些依賴集中管理流程的解決方案不同，Bitlauncher 是無需許可的，因此任何以太坊團隊都可以部署和執行批量拍賣以進行價格查找。 Bitlauncher 允許任何以太坊項目或社區進行拍賣：',
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
    { type: 'h2', text: '使用 Bitlauncher 發現公平價格' },
    {
      type: 'p',
      text: '透過為批量拍賣的價格發現提供簡單的介面，Bitlauncher 能夠：',
    },
    {
      type: 'ul',
      items: [
        '拍賣師確定他們願意出售代幣的最低價格，以及',
        '投標者設定他們願意支付的最高價格',
      ],
    },
    {
      type: 'p',
      text: '這些特徵使平台能夠創造公平的定價動態，使參與者都能獲得他們願意接受的東西或更多。此外，拍賣的分批時間性質大大減少了搶先交易和天然氣競價戰，從而減少了從拍賣師和投標者那裡獲取的價值。',
    },
  ] as PageContentData,
}
