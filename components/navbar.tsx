"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = ["#home", "#challenges", "#timeline", "#awards", "#register"]
      const scrollPosition = window.scrollY + 200 // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i])
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Challenges", href: "#challenges" },
    { label: "Timeline", href: "#timeline" },
    { label: "Awards", href: "#awards" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const isActiveSection = (href: string) => {
    return activeSection === href
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-3xl"
      >
        <div
          className={`relative flex items-center justify-center px-3 sm:px-4 py-3 rounded-full transition-all duration-500 ${scrolled
            ? "bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-black/20 backdrop-blur-sm border border-transparent shadow-none"
            }`}
        >
          {/* CYBERNAUTS on the left */}
          <div className="absolute left-4 sm:left-6 flex items-center">
            <motion.span
              whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(193,45,40,0.8)" }}
              className="font-bold text-xs sm:text-sm cursor-pointer heading-font"
              style={{ color: "#c12d28" }}
            >
              Cybernauts
            </motion.span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/5">
            {navItems.map((item) => {
              const isActive = isActiveSection(item.href)
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${isActive
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#c12d28] rounded-full -z-10 shadow-[0_0_15px_rgba(193,45,40,0.5)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              )
            })}
          </div>

          {/* Register Button and Mobile Menu - Positioned on the right */}
          <div className="absolute right-3 sm:right-4 flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="https://ciencia26.vercel.app/event/hackathon"
              onClick={(e) => handleNavClick(e, "#register")}
              className="hidden sm:block text-xs font-bold px-5 py-2 rounded-full bg-white text-black transition-all cursor-pointer"
            >
              Register
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/10 text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed top-20 left-4 right-4 z-40 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => {
                const isActive = isActiveSection(item.href)
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-sm font-semibold tracking-wide py-4 px-5 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="mobile-nav-pill"
                        className="absolute inset-0 bg-[#c12d28]/20 border border-[#c12d28]/50 rounded-2xl -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.a>
                )
              })}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                href="#register"
                onClick={(e) => handleNavClick(e, "#register")}
                className="sm:hidden text-sm font-bold text-center mt-4 px-4 py-3.5 rounded-2xl bg-white text-black transition-all hover:bg-neutral-200 cursor-pointer"
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
