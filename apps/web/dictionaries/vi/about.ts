import type { PageContentData } from '@/components/shared/content'

export const about = {
  content: [
    { type: 'h1', text: 'Bitlauncher hoạt động như thế nào' },
    {
      type: 'p',
      text: 'Bitlauncher là một nền tảng cho phép khám phá mức giá hợp lý cho các cuộc đấu giá mã thông báo. Mục đích của nền tảng là giúp các nhóm dễ dàng khám phá mức giá hợp lý cho mã thông báo của họ.',
    },
    {
      type: 'p',
      text: 'Bitlauncher sử dụng đấu giá hàng loạt, đây là một cơ chế phổ biến để đảm bảo mức giá hợp lý cho cả thế giới tài chính phi tập trung và truyền thống. Đấu giá hàng loạt cho phép khớp lệnh giới hạn của người mua và người bán với cùng mức giá thanh toán bù trừ cho tất cả người tham gia. Từ các trường hợp sử dụng tiền điện tử như Ưu đãi DEX ban đầu (như các trường hợp trên giao diện Mesa cho Giao thức Gnosis v1) đến đấu giá tài chính truyền thống (như IPO của Google và Phiên đấu giá mở NYSE), đấu giá hàng loạt đóng một vai trò quan trọng trong việc dân chủ hóa tài sản được đấu giá. Chức năng này đặc biệt quan trọng đối với các nhóm phi tập trung cần đảm bảo phân phối mã thông báo công bằng trong khi hoạt động một cách đáng tin cậy và hiệu quả. Các cuộc đấu giá hàng loạt được thiết lập để trở thành một viên gạch “DeFi Lego” cơ bản cho bất kỳ nhóm hoặc cộng đồng nào quan tâm đến việc cung cấp cho người dùng cơ chế đấu giá minh bạch và công bằng nhất cho mã thông báo của họ.',
    },
    { type: 'h2', text: 'So sánh các cơ chế đấu giá khác nhau' },
    {
      type: 'p',
      text: 'Với hợp đồng thông minh mã nguồn mở của bitlauncher, các dự án có thể tạo các phiên đấu giá công bằng phi tập trung của riêng mình một cách nhanh chóng và an toàn. Không giống như một số giải pháp phụ thuộc vào quy trình quản lý tập trung, Bitlauncher không được cấp phép để bất kỳ nhóm Ethereum nào cũng có thể triển khai và thực hiện đấu giá hàng loạt để tìm giá. Bitlauncher cho phép bất kỳ dự án hoặc cộng đồng Ethereum nào tiến hành các cuộc đấu giá:',
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
    { type: 'h2', text: 'Khám phá giá hợp lý với Bitlauncher' },
    {
      type: 'p',
      text: 'Bằng cách cung cấp giao diện dễ dàng để khám phá giá với các cuộc đấu giá hàng loạt, Bitlauncher cho phép:',
    },
    {
      type: 'ul',
      items: [
        'Các nhà đấu giá xác định mức giá tối thiểu mà họ sẵn sàng bán mã thông báo của mình và',
        'Người đấu giá sẽ đặt mức giá tối đa mà họ sẵn sàng trả',
      ],
    },
    {
      type: 'p',
      text: 'Những đặc điểm này cho phép nền tảng tạo ra động lực định giá hợp lý trong đó cả hai người tham gia đều nhận được những gì họ sẵn sàng nhận hoặc hơn thế nữa. Ngoài ra, tính chất thời gian theo đợt của các cuộc đấu giá giúp giảm đáng kể các cuộc chiến tranh đấu giá trực tiếp và khí đốt, làm giảm lượng giá trị thu được từ các nhà đấu giá và người đấu giá.',
    },
  ] as PageContentData,
}
