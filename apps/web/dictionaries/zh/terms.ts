import type { ContentTextType, PageContentData } from '@/components/shared/content'

const policiesAndTerms = [
  {
    title: '隱私權政策',
    content:
      '我們尊重您的隱私。不會儲存或與第三方共享任何個人資料。我們僅收集時事通訊訂閱者的電子郵件，並確保他們免受未經授權的存取。',
  },
  {
    title: '服務條款',
    content:
      '使用我們的服務即表示您同意我們的條款。確保您了解與數位貨幣和平台相關的風險。除電子郵件訂閱外，我們不會儲存您的個人資料。',
  },
  {
    title: '無 Cookie 政策',
    content:
      '我們的網站不使用cookie。您的導航以及與我們服務的互動都是私密的，不會被 cookie 追蹤。',
  },
  {
    title: '訂閱新聞通訊',
    content:
      '我們時事通訊的訂閱者同意提供他們的電子郵件地址以進行定期更新。您可以隨時透過每封電子郵件中提供的連結取消訂閱。',
  },
  {
    title: '資料保護',
    content:
      '我們實施嚴格的安全措施來保護您的資訊。您的電子郵件將被安全地存儲，並且僅用於發送新聞通訊。',
  },
] as const

// Define the content using mapped policies and terms
const content: PageContentData = [
  {
    type: 'h1',
    text: 'Bitlauncher 參與者的隱私權政策和服務條款',
  },
  {
    type: 'p',
    text: '了解我們對您的隱私的承諾以及您在使用我們的加密啟動板服務時的責任：',
  },
  ...policiesAndTerms.flatMap((item, index) => [
    { type: 'h2' as ContentTextType, text: `${index + 1}. ${item.title}` },
    { type: 'p' as ContentTextType, text: item.content },
  ]),
]

export const terms = {
  content,
} as const
