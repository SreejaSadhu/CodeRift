"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { FaChevronDown, FaTrophy, FaMedal } from "react-icons/fa6"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useMotionTemplate, useMotionValue, motion } from "motion/react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Home() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    rollNumber: "",
    email: "",
    mobileNumber: "",
    year: "",
    teamSize: "",
    teamLeaderName: "",
    teamLeaderPhone: "",
    teamMember1Name: "",
    teamMember1Phone: "",
    teamMember2Name: "",
    teamMember2Phone: "",
    teamMember3Name: "",
    teamMember3Phone: "",
    college: "",
    collegeOther: "",
    foodChoice: "",
  })
  const [submitted, setSubmitted] = useState(false)

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
  ]

  const events = [
    {
      time: "MAR 9",
      title: "The Gate Opens",
      description: "Registration begins.",
      phase: "",
    },
    {
      time: "MAR 13",
      title: "Into the Void",
      description: "Release of problem statements",
      phase: "",
    },
    {
      time: "MAR 13",
      title: "The Upside Down",
      description: "The official CODE RIFT hackathon begins",
      phase: "",
    },
    {
      time: "MAR 13",
      title: "The Final Showdown",
      description: "Submissions due. Demo presentations and judging.",
      phase: "",
    },
    {
      time: "MAR 13",
      title: "Closing the Rift",
      description: "Winners announced. Closing ceremony and networking.",
      phase: "",
    },
  ]

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

  // Trigger animations only when elements come into view
  useEffect(() => {
    if (typeof window === "undefined") return

    const elements = document.querySelectorAll<HTMLElement>(".fade-in, .slide-up, .slide-in-left")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset team member fields if team size changes
      ...(name === "teamSize" && {
        teamMember2Name: "",
        teamMember2Phone: "",
        teamMember3Name: "",
        teamMember3Phone: "",
      }),
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        fullName: "",
        rollNumber: "",
        email: "",
        mobileNumber: "",
        year: "",
        teamSize: "",
        teamLeaderName: "",
        teamLeaderPhone: "",
        teamMember1Name: "",
        teamMember1Phone: "",
        teamMember2Name: "",
        teamMember2Phone: "",
        teamMember3Name: "",
        teamMember3Phone: "",
        college: "",
        collegeOther: "",
        foodChoice: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  const teamSize = formData.teamSize ? parseInt(formData.teamSize) : 0
  const showMember2 = teamSize >= 3
  const showMember3 = teamSize >= 4

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-1 md:py-20 overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden"
          initial={{ scale: 1.1, filter: "brightness(0.5)" }}
          animate={{ scale: 1, filter: "brightness(1)" }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/bg.jpg"
            alt="Hero Background"
            fill
            quality={80}
            priority
            className="object-cover object-[85%_center]"
          />
        </motion.div>


        {/* Shadow overlay for smaller screens and iPad */}
        <div className="absolute inset-0 bg-black/50 lg:hidden pointer-events-none z-5" />

        {/* Right-side gradient overlay to reduce brightness on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/90 pointer-events-none z-5" />

        {/* Black gradient at the top - responsive height */}
        <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-5" />

        {/* Title image and tagline */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 xl:left-16 top-1/2 -translate-y-1/2 z-10 w-full px-4 lg:px-0 max-w-[350px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[450px] flex flex-col items-center lg:items-start gap-3 sm:gap-5">
          <Image
            src="/title.png"
            alt="CODE RIFT"
            width={450}
            height={225}
            className="w-full h-auto drop-shadow-[0_0_20px_rgba(193,45,40,0.4)]"
            priority
          />
          <div className="relative group overflow-hidden rounded-r-xl border-l-[3px] border-[#c12d28] bg-black/40 backdrop-blur-md px-4 sm:px-5 py-3 sm:py-4 shadow-[0_4px_30px_rgba(193,45,40,0.15)] transition-all duration-500 hover:bg-black/60 hover:shadow-[0_4px_40px_rgba(193,45,40,0.25)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#c12d28]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <p className="text-gray-300 font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] sm:tracking-[0.25em] leading-[1.8] sm:leading-loose uppercase drop-shadow-md text-center lg:text-left">
              Turn the problem <span className="text-white font-bold inline-block hover:scale-105 transition-transform text-[#c12d28] drop-shadow-[0_0_8px_rgba(193,45,40,0.8)]">upside down</span> <br />
              The answer was on the <span className="text-white font-bold inline-block drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">other side</span>.
            </p>
          </div>
        </div>


        {/* Black gradient transition at bottom - larger for smaller screens */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
      </section>

      {/* Challenges Section */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* We now handle challenges bg position via tailwind classes on the image */
      `,
        }}
      />
      <section
        id="challenges"
        className="relative min-h-screen py-1 sm:py-1 md:py-20 px-4 sm:px-6 md:px-8 mt-1 md:mt-24 overflow-hidden"
      >
        {/* Background Image managed by Next Image for performance */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/vecna_vs_steve.png"
            alt="Challenges background"
            fill
            quality={75}
            className="object-cover md:object-[left_48%] lg:object-[left_30%] lg:!scale-90 lg:origin-left"
          />
        </div>

        {/* Shadow overlay for smaller screens and iPad */}
        <div className="absolute inset-0 bg-black/50 lg:hidden pointer-events-none z-5" />

        {/* Black gradient overlay on background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none z-5" />

        {/* Black gradient transition at top - larger for smaller screens */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none z-10" />

        {/* Black gradient at the top - responsive height */}
        <div className="absolute top-0 left-0 right-0 h-2 sm:h-2 md:h-16 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-5" />

        {/* Content */}
        <div className="relative z-20 pt-28 sm:pt-32 slide-up">
          <div
            className="mx-auto lg:ml-auto lg:mr-8 xl:mr-16 max-w-5xl px-4 md:px-8"
            style={{ transform: "translateY(-6%)" }}
          >
            {/* Header */}
            <div className="mb-10 sm:mb-12 md:mb-14 text-center md:text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight heading-font">CHALLENGES</h1>
            </div>

            {/* Problem Statements Content - left aligned on small, right aligned on large */}
            <div className="flex justify-start lg:justify-end fade-in lg:-mr-12 xl:-mr-20">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col justify-center space-y-8 bg-black/40 p-6 md:p-10 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">

                <div className="text-left lg:text-right">
                  <div className="inline-block px-3 py-1 bg-[#c12d28]/20 border border-[#c12d28]/50 rounded-full text-[#c12d28] text-xs font-bold tracking-widest uppercase mb-4">
                    Top Secret
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight heading-font mb-4">
                    To Be Revealed...
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8">
                    The official problem statements for Code Rift are currently locked. They will be revealed exclusively to participants on the day of the event. Prepare yourself for challenges that will push your creativity and coding skills to their limits.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
                    <a
                      href="/sample-problem.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 border border-white/20 overflow-hidden"
                    >
                      <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      View Sample Statement
                    </a>
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>

        {/* Black gradient transition at bottom - larger for smaller screens */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-10" />
      </section>

      {/* Timeline Section */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Default: phone & tablet (smaller than laptop) - fill screen with air-max and center */
        #timeline {
          background-image: url(/air-max.png);
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-size: cover;
        }

        /* Laptop and larger (desktop) - restore original layout */
        @media (min-width: 1024px) {
          #timeline {
            background-size: 40%;
            background-position: center 70%;
          }
        }
      `,
        }}
      />
      <section
        id="timeline"
        className="relative min-h-screen pt-1 md:pt-16 pb-6 md:pb-32 px-4 font-sans selection:bg-[#c12d28] selection:text-white mt-1 md:mt-[72px] fade-in transform translate-y-[20%] lg:translate-y-0"
      >
        {/* Dark overlay for smaller screens */}
        <div className="absolute inset-0 bg-black/60 lg:hidden pointer-events-none z-5" />
        {/* Black gradient transition at top - larger for smaller screens */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none z-10" />

        {/* Black gradient at the top - responsive height */}
        <div className="absolute top-0 left-0 right-0 h-2 sm:h-2 md:h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-5" />

        {/* Content */}
        <div className="relative z-20 slide-up">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 fade-in">
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
                  className={`relative flex items-start gap-4 mb-4 md:mb-6 last:mb-8 md:last:mb-12 slide-up ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-[35%] ${index % 2 === 0 ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"
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
        </div>
      </section>

      {/* Awards Section */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Managed by Next Image */
      `}} />
      <section
        id="awards"
        className="relative min-h-screen flex items-center justify-center px-4 mt-1 md:mt-0 fade-in overflow-hidden"
      >
        <div className="absolute inset-0 z-0 pointer-events-none flex items-end justify-center">
          <div className="relative w-full h-full lg:w-[70%] lg:h-[70%] lg:bottom-0">
            <Image
              src="/crew.png"
              alt="Awards background"
              fill
              quality={80}
              className="object-contain object-bottom scale-[0.98] lg:scale-100"
            />
          </div>
        </div>

        {/* Content */}
        <div
          className="relative z-20 text-center max-w-4xl py-100 slide-up"
          style={{ transform: "translateY(-50%)" }}
        >
          <p className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight heading-font mb-4">
            Rs. 18,000/- prize pool
          </p>
          <p className="text-lg sm:text-xl text-gray-300">
            Remaining details will be revealed soon...
          </p>
        </div>

        {/* Black gradient transition at bottom - larger for smaller screens */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-10" />
      </section>

      {/* Register Section */}
      <section
        id="register"
        className="relative min-h-screen flex flex-col justify-center items-center py-1 px-4 md:py-20 font-sans mt-1 md:mt-[67px] fade-in"
      >
        {/* Steve (left) and Dusty (right) background characters */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -left-4 sm:-left-6 md:-left-8 bottom-0 slide-in-left">
            <Image
              src="/steve.png"
              alt="Steve"
              width={880}
              height={1320}
              className="w-[44vw] sm:w-[38.5vw] md:w-[33vw] max-w-[440px] h-auto object-contain"
            />
          </div>
          <div className="absolute right-0 bottom-0 slide-in-left">
            <Image
              src="/dusty.png"
              alt="Dusty"
              width={600}
              height={1200}
              className="w-[31vw] sm:w-[25vw] md:w-[23vw] max-w-[250px] h-auto object-contain"
            />
          </div>
        </div>
        {/* Black gradient transition at top - larger for smaller screens */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none z-10" />

        {/* Shadow overlay for smaller screens and iPad */}
        <div className="absolute inset-0 bg-black/50 lg:hidden pointer-events-none z-5" />

        {/* Black gradient at the top - responsive height */}
        <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-5" />

        {/* Content */}
        <div className="relative z-20 w-full slide-up">
          <div className="text-center my-8 md:my-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight heading-font">JOIN THE EVENT</h1>
            <p className="text-neutral-300 text-sm sm:text-base mb-4">Register for <Image src="/title.png" alt="CTRL + ALT + CREATE" width={200} height={40} className="inline-block h-6 w-auto mx-1 align-middle image-glow" /> and unleash your creativity</p>
          </div>
          <div className="mx-auto w-full max-w-2xl bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            {submitted && (
              <div className="mb-8 rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-center text-green-400">
                <p className="font-semibold">Registration successful! We'll be in touch soon.</p>
              </div>
            )}

            <div className="flex justify-center mt-6">
              <a
                href="https://ciencia26.vercel.app/event/hackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center justify-center h-11 md:h-12 px-8 rounded-md bg-gradient-to-br from-[#c12d28] to-[#a02520] font-bold text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all hover:bg-[#a02520] hover:scale-[1.01] active:scale-[0.99] text-sm md:text-base overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  REGISTER
                </span>
                <BottomGradient />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#c12d28]/50 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#c12d28] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

// Customized Input component (based on Aceternity UI Input) with Red Glow
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    const radius = 150
    const [visible, setVisible] = useState(false)

    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #c12d28,
          transparent 80%
        )
      `,
        } as any}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <input
          type={type}
          className={cn(
            `flex h-12 w-full rounded-md border-none bg-black/50 px-3 py-2 text-sm text-white shadow-input transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[#c12d28] disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    )
  }
)
Input.displayName = "Input"

// Customized Select Trigger component with Red Glow
const GlowSelectTrigger = React.forwardRef<React.ElementRef<typeof SelectTrigger>, React.ComponentPropsWithoutRef<typeof SelectTrigger>>(
  ({ className, children, ...props }, ref) => {
    const radius = 150
    const [visible, setVisible] = useState(false)
    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #c12d28,
          transparent 80%
        )
      `,
        } as any}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <SelectTrigger
          ref={ref}
          className={cn(
            "flex h-12 w-full rounded-md border-none bg-black/50 px-3 py-2 text-sm text-white shadow-input transition duration-400 placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none",
            className
          )}
          {...props}
        >
          {children}
        </SelectTrigger>
      </motion.div>
    )
  }
)
GlowSelectTrigger.displayName = "GlowSelectTrigger"
