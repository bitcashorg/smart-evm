import type { PageContentData } from '@/components/shared/content'

export const about = {
  content: [
    { type: 'h1', text: 'Cara Kerja Bitlauncher' },
    {
      type: 'p',
      text: 'Bitlauncher adalah platform yang memungkinkan penemuan harga wajar untuk lelang token. Tujuan dari platform ini adalah untuk memudahkan tim menemukan harga yang wajar untuk token mereka.',
    },
    {
      type: 'p',
      text: 'Bitlauncher menggunakan lelang batch, yang merupakan mekanisme populer untuk memastikan harga yang adil bagi dunia keuangan yang terdesentralisasi dan tradisional. Lelang batch memungkinkan pencocokan limit order pembeli dan penjual dengan harga kliring yang sama untuk semua peserta. Dari kasus penggunaan kripto seperti Penawaran DEX Awal (seperti yang ada di antarmuka Mesa untuk Protokol Gnosis v1) hingga lelang keuangan tradisional (seperti IPO Google dan Lelang Terbuka NYSE), lelang batch memainkan peran penting dalam demokratisasi aset yang dilelang. Fungsi ini sangat penting bagi tim terdesentralisasi yang perlu memastikan distribusi token yang adil sambil beroperasi tanpa kepercayaan dan efisien. Lelang batch akan menjadi dasar “DeFi Lego” bagi tim atau komunitas mana pun yang tertarik untuk menawarkan mekanisme lelang paling transparan dan paling adil untuk token mereka kepada penggunanya.',
    },
    { type: 'h2', text: 'Perbandingan Mekanisme Lelang yang Berbeda' },
    {
      type: 'p',
      text: 'Dengan kontrak cerdas sumber terbuka bitlauncher, proyek dapat dengan cepat dan aman membuat lelang adil terdesentralisasi mereka sendiri. Tidak seperti beberapa solusi yang bergantung pada proses kurasi terpusat, Bitlauncher tidak memiliki izin sehingga tim Ethereum mana pun dapat menerapkan & melaksanakan lelang batch untuk menemukan harga. Bitlauncher mengizinkan proyek atau komunitas Ethereum mana pun untuk melakukan lelang yang:',
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
    { type: 'h2', text: 'Penemuan Harga Wajar dengan Bitlauncher' },
    {
      type: 'p',
      text: 'Dengan menyediakan antarmuka yang mudah untuk penemuan harga dengan lelang batch, Bitlauncher memungkinkan:',
    },
    {
      type: 'ul',
      items: [
        'Juru lelang menentukan harga minimum yang mereka bersedia untuk menjual token mereka, dan',
        'Penawar menetapkan harga maksimum yang bersedia mereka bayarkan',
      ],
    },
    {
      type: 'p',
      text: 'Karakteristik ini memungkinkan platform untuk menciptakan dinamika penetapan harga yang adil di mana kedua peserta mendapatkan apa yang mereka ingin terima atau lebih. Selain itu, sifat lelang yang bersifat batched time sangat mengurangi perang frontrunning dan penawaran gas, sehingga mengurangi jumlah nilai yang diperoleh dari juru lelang dan penawar.',
    },
  ] as PageContentData,
}
