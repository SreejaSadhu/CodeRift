"use client"


import { FaTrophy, FaMedal } from "react-icons/fa6"

export default function AwardsPage() {
  const awards = [
    {
      rank: 1,
      title: "CTRL Award",
      subtitle: "Best Fundamentals & Learning",
      prize: "₹10,000 + Certificate",
      description: "Exceptional understanding of core concepts",
      icon: FaTrophy,
    },
    {
      rank: 2,
      title: "ALT Award",
      subtitle: "Most Creative & Innovation",
      prize: "₹7,500 + Certificate",
      description: "Most innovative problem-solving approach",
      icon: FaMedal,
    },
    {
      rank: 3,
      title: "CREATE Award",
      subtitle: "Best Final App / Prototype",
      prize: "₹5,000 + Certificate",
      description: "Most polished and functional product",
      icon: FaTrophy,
    },
  ]

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden"
      style={{
        backgroundImage: "url(/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "85% center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Shadow overlay for smaller screens and iPad */}
      <div className="absolute inset-0 bg-black/50 lg:hidden pointer-events-none z-5" />

      {/* Black gradient at the top - responsive height */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-5" />

      {/* Content */}
      <div className="relative z-20">


        <section className="py-16 sm:py-20 px-4 pt-28 sm:pt-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 sm:mb-16 text-center">
              <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter heading-font">AWARDS</h1>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                Three award categories celebrating excellence
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {awards.map((award, idx) => {
                const IconComponent = award.icon
                return (
                  <div
                    key={idx}
                    className="group rounded-lg border border-[#c12d28]/20 bg-white/5 p-4 sm:p-5 backdrop-blur-sm hover:border-[#c12d28]/40 hover:bg-white/10 transition neon-border"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-[#c12d28] group-hover:text-[#c12d28]/80 transition">
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#c12d28] uppercase tracking-widest">
                          {award.rank === 1 ? "1st Place" : award.rank === 2 ? "2nd Place" : "3rd Place"}
                        </p>
                        <h3 className="text-sm sm:text-base font-black group-hover:text-[#c12d28] transition heading-font">
                          {award.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mb-3">{award.subtitle}</p>
                    <p className="text-xs text-gray-300 mb-4">{award.description}</p>

                    <div className="rounded-md border border-[#c12d28]/20 bg-[#c12d28]/10 p-2.5 text-center">
                      <p className="text-xs text-gray-400 mb-1">Prize</p>
                      <p className="text-xs sm:text-sm font-bold text-[#c12d28]">{award.prize}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Special Recognition */}
            <div className="mt-12 rounded-lg border border-[#c12d28]/20 bg-white/5 p-6 sm:p-8 text-center neon-border">
              <h2 className="text-xl sm:text-2xl font-black mb-3 heading-font">Special Recognition</h2>
              <p className="text-xs sm:text-sm text-gray-400 mb-4">
                Outstanding participants showcasing effort, collaboration, and innovation receive special mention and
                certificates.
              </p>
              <button className="inline-block rounded-md border border-[#c12d28] px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold text-[#c12d28] hover:bg-[#c12d28]/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </section>


      </div>
    </div>
  )
}
