export default function Schedule() {
  const days = [
    {
      day: "Day 1",
      title: "CTRL",
      subtitle: "Mindset & Tools",
      events: ["Right Way to Learn Technologies", "Problem Discovery Workshop", "Resources Roadmap"],
    },
    {
      day: "Day 2",
      title: "ALT",
      subtitle: "Creative Workshops",
      events: ["Worst UI Challenge", "Music Creation with AI", "Build One App: AI vs Manual"],
    },
    {
      day: "Day 3",
      title: "CREATE",
      subtitle: "Hackathon",
      events: ["Random Chit Team Formation", "The CREATE Hackathon", "Pitching Sessions"],
    },
  ]

  return (
    <section id="schedule" className="relative py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-4xl sm:text-5xl font-bold text-white neon-text">EVENT SCHEDULE</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {days.map((dayData, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#c12d28]/30 bg-white/5 p-8 backdrop-blur-md hover:border-[#c12d28]/60 transition neon-border group"
            >
              <div className="mb-4">
                <p className="text-sm font-mono text-[#c12d28] uppercase tracking-widest">{dayData.day}</p>
                <h3 className="mt-2 text-3xl font-bold text-white group-hover:text-[#c12d28] transition">
                  {dayData.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{dayData.subtitle}</p>
              </div>

              <div className="space-y-3 border-t border-[#c12d28]/20 pt-6">
                {dayData.events.map((event, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#c12d28] flex-shrink-0" />
                    <p className="text-sm text-gray-300">{event}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
