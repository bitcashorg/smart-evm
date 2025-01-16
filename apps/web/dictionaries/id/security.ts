import type {
  ContentTextType,
  PageContentData,
} from '@/components/shared/content'

const securityTips = [
  {
    title: 'Waspadai Serangan Phishing',
    content:
      'Phishing adalah teknik umum yang digunakan oleh penyerang untuk mendapatkan akses ke informasi pribadi Anda. Selalu verifikasi URL Bitlauncher dan pastikan itu adalah situs yang sah sebelum menghubungkan dompet MetaMask Anda. Berhati-hatilah terhadap email atau situs web yang meniru Bitlauncher.',
  },
  {
    title: 'Keamanan MetaMask',
    content:
      'Saat menggunakan MetaMask, jangan pernah membagikan frase awal Anda kepada siapa pun. Berhati-hatilah terhadap situs web atau orang mana pun yang meminta kredensial MetaMask Anda. Selalu kunci dompet MetaMask Anda saat tidak digunakan.',
  },
  {
    title: 'Peniruan Identitas di Discord dan Media Sosial',
    content:
      'Berhati-hatilah terhadap individu di platform seperti Discord dan media sosial yang mengaku sebagai perwakilan Bitlauncher. Staf resmi tidak akan pernah meminta kunci pribadi atau kredensial dompet Anda.',
  },
  {
    title: 'Amankan Lingkungan Digital Anda',
    content:
      'Pastikan komputer dan koneksi internet Anda aman. Gunakan perangkat lunak antivirus, aktifkan firewall, dan perbarui perangkat lunak Anda secara rutin untuk mencegah serangan malware.',
  },
  {
    title: 'Periksa Kembali Detail Transaksi',
    content:
      'Sebelum mengonfirmasi transaksi apa pun di MetaMask, periksa kembali alamat penerima, jumlah, dan biaya bahan bakar. Penipu sering kali mencoba memanipulasi detail transaksi.',
  },
  {
    title: 'Tetap Terinformasi dan Diperbarui',
    content:
      'Ikuti hanya saluran resmi Bitlauncher untuk pembaruan dan informasi. Jangan percaya sumber yang tidak terverifikasi.',
  },
  {
    title: 'Laporkan Aktivitas Mencurigakan',
    content:
      'Jika Anda menemukan aktivitas mencurigakan atau yakin Anda adalah korban penipuan, segera hubungi dukungan resmi Bitlauncher.',
  },
] as const

// Define the content using mapped security tips
const content: PageContentData = [
  { type: 'h1', text: 'Rekomendasi Keamanan untuk Peserta Bitlauncher' },
  {
    type: 'p',
    text: 'Berpartisipasi dalam lelang di Bitlauncher, sebuah cabang dari Gnosis, memerlukan kewaspadaan dan kesadaran terhadap berbagai ancaman keamanan. Berikut beberapa tip penting untuk membantu menjaga investasi Anda tetap aman:',
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
