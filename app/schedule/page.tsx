"use client"

export default function SchedulePage() {
  const events = [
    {
      time: "FEB 15",
      title: "The Gate Opens",
      description: "Registration closes. Opening ceremony and team formation begins.",
      phase: "Day 1",
    },
    {
      time: "FEB 15",
      title: "Into the Void",
      description: "Hacking officially begins. Mentors available for guidance.",
      phase: "Day 1",
    },
    {
      time: "FEB 16",
      title: "The Upside Down",
      description: "Midnight checkpoint. Workshops and mini-challenges throughout the day.",
      phase: "Day 2",
    },
    {
      time: "FEB 17",
      title: "The Final Showdown",
      description: "Submissions due. Demo presentations and judging.",
      phase: "Day 3",
    },
    {
      time: "FEB 17",
      title: "Closing the Rift",
      description: "Winners announced. Closing ceremony and networking.",
      phase: "Day 3",
    },
  ]

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden font-sans selection:bg-[#c12d28] selection:text-white"
      style={{
        backgroundImage: "url(/air-max.png)",
        backgroundSize: "40%",
        backgroundPosition: "center 70%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Black gradient at the top - responsive height */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-5" />

      {/* Content */}
      <div className="relative z-20">
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8">
              <p className="text-xs tracking-[0.3em] uppercase text-[#c12d28] mb-2">
                The Journey
              </p>
              <h2 className="text-5xl md:text-7xl font-black mb-3 uppercase tracking-tighter heading-font">
                Timeline
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-4 mb-0 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-[35%] ${
                      index % 2 === 0 ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"
                    }`}
                  >
                    <span className="text-xs tracking-widest text-[#c12d28] uppercase font-bold">
                      {event.phase}
                    </span>
                    <p className="text-sm text-gray-400 mt-0.5 mb-1 font-mono">{event.time}</p>
                    <h3 className="text-xl md:text-2xl font-bold mb-1 heading-font">{event.title}</h3>
                    <p className="text-sm text-gray-300 leading-tight">{event.description}</p>
                  </div>

                  {/* Center spacer for more distance */}
                  <div className="hidden md:block w-[30%] flex-shrink-0" />

                  {/* Content on opposite side */}
                  <div className="hidden md:block md:w-[35%]" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
