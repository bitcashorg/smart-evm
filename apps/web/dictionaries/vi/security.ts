import type { ContentTextType, PageContentData } from '@/components/shared/content'

const securityTips = [
  {
    title: 'Cảnh giác với các cuộc tấn công lừa đảo',
    content:
      'Lừa đảo là một kỹ thuật phổ biến mà kẻ tấn công sử dụng để truy cập vào thông tin cá nhân của bạn. Luôn xác minh URL của Bitlauncher và đảm bảo đó là trang web hợp pháp trước khi kết nối ví MetaMask của bạn. Hãy thận trọng với các email hoặc trang web mạo danh Bitlauncher.',
  },
  {
    title: 'Bảo mật MetaMask',
    content:
      'Khi sử dụng MetaMask, đừng bao giờ chia sẻ cụm từ gốc của bạn với bất kỳ ai. Hãy thận trọng với bất kỳ trang web hoặc người nào yêu cầu thông tin đăng nhập MetaMask của bạn. Luôn khóa ví MetaMask của bạn khi không sử dụng.',
  },
  {
    title: 'Mạo danh trên Discord và phương tiện truyền thông xã hội',
    content:
      'Hãy cảnh giác với những cá nhân trên các nền tảng như Discord và mạng xã hội tự nhận là đại diện của Bitlauncher. Nhân viên chính thức sẽ không bao giờ yêu cầu khóa riêng hoặc thông tin xác thực ví của bạn.',
  },
  {
    title: 'Bảo vệ môi trường kỹ thuật số của bạn',
    content:
      'Đảm bảo máy tính và kết nối internet của bạn an toàn. Sử dụng phần mềm diệt vi-rút, bật tường lửa và cập nhật phần mềm thường xuyên để ngăn chặn các cuộc tấn công của phần mềm độc hại.',
  },
  {
    title: 'Kiểm tra kỹ chi tiết giao dịch',
    content:
      'Trước khi xác nhận bất kỳ giao dịch nào trên MetaMask, hãy kiểm tra kỹ địa chỉ người nhận, số tiền và phí gas. Những kẻ lừa đảo thường cố gắng thao túng chi tiết giao dịch.',
  },
  {
    title: 'Luôn thông tin và cập nhật',
    content:
      'Chỉ theo dõi các kênh Bitlauncher chính thức để biết thông tin và cập nhật. Đừng tin tưởng các nguồn chưa được xác minh.',
  },
  {
    title: 'Báo cáo hoạt động đáng ngờ',
    content:
      'Nếu bạn gặp bất kỳ hoạt động đáng ngờ nào hoặc tin rằng mình là nạn nhân của một vụ lừa đảo, hãy liên hệ ngay với bộ phận hỗ trợ chính thức của Bitlauncher.',
  },
] as const

// Define the content using mapped security tips
const content: PageContentData = [
  { type: 'h1', text: 'Khuyến nghị bảo mật cho người tham gia Bitlauncher' },
  {
    type: 'p',
    text: 'Việc tham gia đấu giá trên Bitlauncher, một nhánh của Gnosis, đòi hỏi sự cảnh giác và nhận thức về các mối đe dọa bảo mật khác nhau. Dưới đây là một số lời khuyên quan trọng để giúp giữ an toàn cho khoản đầu tư của bạn:',
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
