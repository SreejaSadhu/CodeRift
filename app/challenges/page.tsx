"use client"

import { useState } from "react"

import { FaChevronDown, FaPaintbrush, FaBolt, FaRocket } from "react-icons/fa6"

export default function ChallengesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const challenges = [
    {
      id: 1,
      number: "001",
      title: "The Worst UI Challenge",
      description: "Design intentionally bad user interfaces and learn what NOT to do.",
      details: "Create the most unusable interface possible. Learn poor design patterns through extreme examples.",
      tips: ["Clashing colors", "Bad typography", "Confusing navigation", "Over-complications"],
    },
    {
      id: 2,
      number: "002",
      title: "Build One App: AI vs Manual",
      description: "Build the same app twice—with AI assistance and manually.",
      details: "Experience the power and limitations of AI by creating identical applications using different methods.",
      tips: ["Time comparison", "Code quality", "Learning speed", "Problem-solving"],
    },
    {
      id: 3,
      number: "003",
      title: "The CREATE Hackathon",
      description: "Create innovative prototypes to solve real problems.",
      icon: FaRocket,
      details: "Transform ideas into working prototypes. Work in teams to build solutions that matter.",
      tips: ["Real-world problems", "Team collaboration", "Rapid prototyping", "Pitch your idea"],
    },
  ]

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background image container */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/vecna_vs_steve.png)",
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
      />

      {/* Shadow overlay for smaller screens and iPad */}
      <div className="absolute inset-0 bg-black/50 lg:hidden pointer-events-none z-5" />

      {/* Black gradient at the top - responsive height */}
      <div className="absolute top-0 left-0 right-0 h-10 sm:h-12 md:h-16 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-5" />

      {/* Content */}
      <div className="relative z-20">


        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 pt-28 sm:pt-32">
          <div className="ml-auto max-w-5xl mr-0 md:mr-8 lg:mr-16">
            {/* Header */}
            <div className="mb-8 sm:mb-10 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight heading-font">CHALLENGES</h1>

            </div>

            {/* Challenges List - Stacked */}
            <div className="space-y-4 sm:space-y-6">
              {challenges.slice(0, 2).map((challenge, index) => {
                const IconComponent = challenge.icon
                const isExpanded = expandedId === challenge.id
                return (
                  <div
                    key={challenge.id}
                    className={`group cursor-pointer transition-all duration-500 ease-out ${index === 0 ? 'ml-[30%]' : index === 1 ? 'ml-[20%]' : ''}`}
                    onClick={() => setExpandedId(isExpanded ? null : challenge.id)}
                  >
                    {/* Challenge Number */}
                    <div className="mb-2">
                      <span className="text-xl sm:text-2xl font-light text-gray-500 tracking-tight">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Challenge Content */}
                    <div className="flex flex-col gap-2">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">

                        </div>
                        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight heading-font group-hover:text-gray-200 transition-colors duration-300">
                          {challenge.title}
                        </h2>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-2">
                        {challenge.description}
                      </p>

                      {/* Expanded Details */}
                      <div className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="pt-2 border-t border-gray-800">
                          <p className="text-xs text-gray-300 font-light leading-relaxed mb-3">
                            {challenge.details}
                          </p>

                          {/* Tips Grid */}
                          <div className="grid grid-cols-2 gap-2">
                            {challenge.tips.map((tip, i) => (
                              <div
                                key={i}
                                className="text-center py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-gray-700"
                              >
                                <p className="text-xs text-gray-300 font-light">
                                  {tip}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Expand Indicator */}
                      <div className="flex justify-end mt-1">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                          <FaChevronDown
                            size={12}
                            className={`text-gray-400 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>


      </div>
    </div>
  )
}
