import localFont from 'next/font/local'

export const FuturaPTDemi = localFont({
  src: [
    {
      path: './fonts/futura-pt/FuturaCyrillicDemi.woff',
      weight: 'normal',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-futura-pt-demi',
})

export const FuturaPTBold = localFont({
  src: [
    {
      path: './fonts/futura-pt/FuturaCyrillicBold.woff',
      weight: 'normal',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-futura-pt-bold',
})

export const LufgaBold = localFont({
  src: [
    {
      path: './fonts/lufga/LufgaBold.woff',
      weight: 'normal',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-lufga-bold',
})
