import type { ContentTextType, PageContentData } from '@/components/shared/content'

const securityTips = [
  {
    title: '小心網路釣魚攻擊',
    content:
      '網路釣魚是攻擊者用來獲取您的個人資訊的常用技術。在連接 MetaMask 錢包之前，請務必驗證 Bitlauncher 的 URL 並確保其是合法網站。請警惕冒充 Bitlauncher 的電子郵件或網站。',
  },
  {
    title: 'MetaMask 安全',
    content:
      '使用 MetaMask 時，切勿與任何人分享您的助記詞。請警惕任何要求您提供 MetaMask 憑證的網站或個人。不使用時請務必鎖定您的 MetaMask 錢包。',
  },
  {
    title: '在 Discord 和社群媒體上冒充',
    content:
      '警惕 Discord 和社群媒體等平台上自稱是 Bitlauncher 代表的個人。官方工作人員絕不會詢問您的私鑰或錢包憑證。',
  },
  {
    title: '保護您的數位環境',
    content:
      '確保您的電腦和網路連線安全。使用防毒軟體、啟用防火牆並定期更新軟體以防止惡意軟體攻擊。',
  },
  {
    title: '仔細檢查交易詳情',
    content:
      '在 MetaMask 上確認任何交易之前，請仔細檢查收件人地址、金額和 Gas 費用。詐騙者經常試圖操縱交易細節。',
  },
  {
    title: '隨時了解情況並更新',
    content: '僅關注官方 Bitlauncher 頻道以獲取更新和資訊。不要相信未經驗證的來源。',
  },
  {
    title: '報告可疑活動',
    content:
      '如果您遇到任何可疑活動或認為自己是詐騙的受害者，請立即聯絡 Bitlauncher 官方支援人員。',
  },
] as const

// Define the content using mapped security tips
const content: PageContentData = [
  { type: 'h1', text: '針對 Bitlauncher 參與者的安全建議' },
  {
    type: 'p',
    text: '參與 Gnosis 分叉 Bitlauncher 上的拍賣需要對各種安全威脅保持警惕和認識。以下是一些有助於確保您的投資安全的重要提示：',
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
