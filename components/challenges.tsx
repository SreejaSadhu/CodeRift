export default function Challenges() {
  const challenges = [
    {
      number: "001",
      title: "The Worst UI Challenge",
      description: "Design intentionally bad user interfaces and learn what NOT to do in UI/UX.",
    },
    {
      number: "002",
      title: "Build One App: AI vs Manual",
      description: "Build the same app twice—once with AI assistance, once manually. Compare approaches.",
    },
    {
      number: "003",
      title: "The CREATE Hackathon",
      description: "Create innovative prototypes to solve real problems identified on Day 1.",
    },
  ]

  return (
    <section id="challenges" className="relative py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-4xl sm:text-5xl font-bold text-white neon-text">CHALLENGES</h2>

        <div className="space-y-6">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-[#c12d28]/30 bg-white/5 p-8 backdrop-blur-md hover:border-[#c12d28]/60 transition neon-border"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="mb-3 text-5xl sm:text-6xl font-bold text-[#c12d28] neon-text">{challenge.number}</div>
                  <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-[#c12d28] transition">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-400">{challenge.description}</p>
                </div>
                <button className="mt-4 rounded-lg border border-[#c12d28]/50 px-6 py-2 text-sm font-medium text-[#c12d28] transition hover:bg-[#c12d28] hover:text-white sm:mt-0">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
