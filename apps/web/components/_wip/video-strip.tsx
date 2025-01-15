import { Button } from '@/components/ui/button'
import { PlayIcon } from 'lucide-react'
import Link from 'next/link'

export function VideoStrip() {
  return (
    <div className="w-full max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Video Strip</h2>
        <Link href="#" className="text-primary hover:underline" prefetch={false}>
          View All
        </Link>
      </div>
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="relative flex-shrink-0 w-40 group sm:w-48 md:w-56 lg:w-64"
              >
                {/* <img
                  src="/placeholder.svg"
                  alt={`Video ${item}`}
                  width={360}
                  height={240}
                  className="object-cover rounded-lg"
                /> */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity rounded-lg opacity-0 bg-black/50 group-hover:opacity-100">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white rounded-full hover:bg-white/20"
                  >
                    <PlayIcon className="w-8 h-8" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 bottom-0 right-0 w-12 pointer-events-none bg-gradient-to-l from-white dark:from-gray-950" />
      </div>
    </div>
  )
}
