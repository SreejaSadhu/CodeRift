import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Heading with gradient effect */}
      <div className="text-center">
        <div className="mb-4 text-base font-mono uppercase tracking-widest text-[#c12d28]/80">
          Where will creativity take you?
        </div>
        <div className="mb-8 flex justify-center">
          <Image
            src="/title.png"
            alt="CTRL + ALT + CREATE"
            width={800}
            height={200}
            className="w-full max-w-4xl h-auto image-glow"
            priority
          />
        </div>
        <p className="mx-auto mb-12 max-w-2xl text-lg sm:text-xl text-gray-300">
          A 3-day creativity & AI innovation event designed to help students move beyond tutorial hell and embrace
          practical, project-first learning.
        </p>

        {/* Event Details */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm border border-[#c12d28]/30 neon-border">
            <div className="text-3xl font-bold text-[#c12d28]">3</div>
            <p className="mt-2 text-sm text-gray-400">Days</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm border border-[#c12d28]/30 neon-border">
            <div className="text-3xl font-bold text-[#c12d28]">∞</div>
            <p className="mt-2 text-sm text-gray-400">Possibilities</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm border border-[#c12d28]/30 neon-border">
            <div className="text-3xl font-bold text-[#c12d28]">+</div>
            <p className="mt-2 text-sm text-gray-400">AI Tools</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="rounded-lg border-2 border-[#c12d28] bg-[#c12d28] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#a02520] hover:shadow-lg hover:shadow-[#c12d28]/50 neon-border">
          REGISTER NOW
        </button>

        {/* Organization Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">Organized by</p>
          <p className="mt-2 text-2xl font-bold text-[#c12d28]">CYBERNAUTS</p>
          <p className="mt-1 text-xs text-gray-500">CVR College of Engineering</p>
        </div>
      </div>
    </section>
  )
}
