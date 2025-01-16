import type {
  ContentTextType,
  PageContentData,
} from '@/components/shared/content'

const policiesAndTerms = [
  {
    title: 'Kebijakan Privasi',
    content:
      'Kami menghormati privasi Anda. Tidak ada data pribadi yang disimpan atau dibagikan dengan pihak ketiga. Kami hanya mengumpulkan email untuk pelanggan buletin kami dan memastikan perlindungan mereka terhadap akses tidak sah.',
  },
  {
    title: 'Ketentuan Layanan',
    content:
      'Dengan menggunakan layanan kami, Anda menyetujui persyaratan kami. Pastikan Anda memahami risiko yang terkait dengan mata uang dan platform digital. Kami tidak menyimpan data pribadi Anda kecuali untuk langganan email.',
  },
  {
    title: 'Tidak Ada Kebijakan Cookie',
    content:
      'Situs web kami tidak menggunakan cookie. Navigasi dan interaksi Anda dengan layanan kami bersifat pribadi dan tidak dilacak oleh cookie.',
  },
  {
    title: 'Berlangganan Buletin',
    content:
      'Pelanggan buletin kami setuju untuk memberikan alamat email mereka untuk pembaruan rutin. Anda dapat berhenti berlangganan kapan saja melalui tautan yang disediakan di setiap email.',
  },
  {
    title: 'Perlindungan Data',
    content:
      'Kami menerapkan langkah-langkah keamanan yang ketat untuk melindungi informasi Anda. Email Anda disimpan dengan aman dan hanya digunakan untuk mengirim buletin.',
  },
] as const

// Define the content using mapped policies and terms
const content: PageContentData = [
  {
    type: 'h1',
    text: 'Kebijakan Privasi dan Ketentuan Layanan untuk Peserta Bitlauncher',
  },
  {
    type: 'p',
    text: 'Pahami komitmen kami terhadap privasi Anda dan tanggung jawab Anda saat menggunakan layanan peluncuran kripto kami:',
  },
  ...policiesAndTerms.flatMap((item, index) => [
    { type: 'h2' as ContentTextType, text: `${index + 1}. ${item.title}` },
    { type: 'p' as ContentTextType, text: item.content },
  ]),
]

export const terms = {
  content,
} as const
