import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-[#c12d28]/20 bg-black/80 py-12 px-4 backdrop-blur-md">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center">
              <Image
                src="/title.png"
                alt="CTRL + ALT + CREATE"
                width={200}
                height={50}
                className="h-auto image-glow"
              />
            </div>
            <p className="text-sm text-gray-400">Where creativity takes flight. Organized by CYBERNAUTS.</p>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/schedule" className="text-gray-400 hover:text-[#c12d28] transition block">
                Schedule
              </Link>
              <Link href="/challenges" className="text-gray-400 hover:text-[#c12d28] transition block">
                Challenges
              </Link>
              <Link href="/awards" className="text-gray-400 hover:text-[#c12d28] transition block">
                Awards
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Event</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>3-Day Hackathon</p>
              <p>AI & Creativity Focus</p>
              <p>BTech Students</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Venue</h4>
            <div className="text-sm text-gray-400">
              <p>CVR College of Engineering</p>
              <p className="mt-2 text-xs">Organized by CYBERNAUTS</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#c12d28]/20 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© 2026 <span className="sr-only">CTRL + ALT + CREATE</span><Image src="/title.png" alt="CTRL + ALT + CREATE" width={150} height={30} className="inline-block h-4 w-auto mx-1 image-glow" />. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
