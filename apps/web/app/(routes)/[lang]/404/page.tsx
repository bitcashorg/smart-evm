import Image from 'next/image'

export default function NotFoundPage() {
  return (
    <div className="content-container !py-10 px-7 md:px-3 md:py-24">
      <h1 className="heading flex justify-center text-center">Not Found Kek</h1>
      <picture className="max-h-300 max-w-700">
        <Image
          src={'/images/kek.webp'}
          alt={'KEK'}
          fill
          priority
          className="max-h-300 max-w-700"
        />
      </picture>
    </div>
  )
}
