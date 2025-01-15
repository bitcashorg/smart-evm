import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ShareIcon } from 'lucide-react'

export function MediaPlayerLanding() {
  return (
    <main className="flex flex-1 min-h-screen text-white bg-black">
      <div className="flex items-center justify-center flex-1 bg-black">
        <div className="w-full max-w-4xl">
          <div className="bg-gray-900 aspect-w-16 aspect-h-9">
            <img
              src="/placeholder.svg"
              alt="Video"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h1 className="text-xl font-bold">
              From Prison to Bitcoin A Journey to Freedom
              <span className="text-blue-500"> #bitcoin #crypto #liberty</span>
            </h1>
            <div className="flex items-center mt-2 space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-bold">Bitlauncher | Bitcash</div>
                <div className="text-sm text-gray-400">202 subscribers</div>
              </div>
              <Button variant="outline" className="ml-auto">
                Subscribed
              </Button>
            </div>
          </div>
        </div>
      </div>
      <aside className="h-full w-96 overflow-y-auto bg-[#181818] p-4">
        <h2 className="mb-4 text-lg font-bold">Bitcash Breakthrough: Your Gateway...</h2>
        <ul className="space-y-2">
          {[...Array(20)].map((_, index) => (
            <li key={index} className="flex items-center space-x-2">
              <img
                src="/placeholder.svg"
                alt="Thumbnail"
                className="object-cover w-24 h-14"
              />
              <div>
                <div className="font-bold">Video Title {index + 1}</div>
                <div className="text-sm text-gray-400">Bitlauncher | Bitcash</div>
                <div className="text-sm text-gray-400">0:56</div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  )
}
