import type {
  ContentTextType,
  PageContentData,
} from '@/components/shared/content'

const policiesAndTerms = [
  {
    title: 'Chính sách quyền riêng tư',
    content:
      'Chúng tôi tôn trọng sự riêng tư của bạn. Không có dữ liệu cá nhân nào được lưu trữ hoặc chia sẻ với bên thứ ba. Chúng tôi chỉ thu thập email của những người đăng ký nhận bản tin và đảm bảo việc bảo vệ họ khỏi bị truy cập trái phép.',
  },
  {
    title: 'Điều khoản dịch vụ',
    content:
      'Bằng cách sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản của chúng tôi. Đảm bảo bạn hiểu những rủi ro liên quan đến tiền tệ và nền tảng kỹ thuật số. Chúng tôi không lưu trữ dữ liệu cá nhân của bạn ngoại trừ đăng ký email.',
  },
  {
    title: 'Chính sách không có cookie',
    content:
      'Trang web của chúng tôi không sử dụng cookie. Việc điều hướng và tương tác của bạn với các dịch vụ của chúng tôi là riêng tư và không bị cookie theo dõi.',
  },
  {
    title: 'Đăng ký nhận bản tin',
    content:
      'Những người đăng ký nhận bản tin của chúng tôi đồng ý cung cấp địa chỉ email của họ để cập nhật thường xuyên. Bạn có thể hủy đăng ký bất cứ lúc nào thông qua liên kết được cung cấp trong mỗi email.',
  },
  {
    title: 'Bảo vệ dữ liệu',
    content:
      'Chúng tôi thực hiện các biện pháp bảo mật nghiêm ngặt để bảo vệ thông tin của bạn. Email của bạn được lưu trữ an toàn và chỉ được sử dụng để gửi bản tin.',
  },
] as const

// Define the content using mapped policies and terms
const content: PageContentData = [
  {
    type: 'h1',
    text: 'Chính sách quyền riêng tư và Điều khoản dịch vụ dành cho người tham gia Bitlauncher',
  },
  {
    type: 'p',
    text: 'Hiểu cam kết của chúng tôi về quyền riêng tư và trách nhiệm của bạn khi sử dụng các dịch vụ launchpad tiền điện tử của chúng tôi:',
  },
  ...policiesAndTerms.flatMap((item, index) => [
    { type: 'h2' as ContentTextType, text: `${index + 1}. ${item.title}` },
    { type: 'p' as ContentTextType, text: item.content },
  ]),
]

export const terms = {
  content,
} as const
