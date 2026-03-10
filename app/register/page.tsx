"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
// Ensure motion/react works. If not, fallback to framer-motion or just motion
import { useMotionTemplate, useMotionValue, motion } from "motion/react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RegisterPage() {
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
    <div
      className="relative min-h-screen bg-black overflow-hidden font-sans"
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
      <div className="relative z-20 flex flex-col min-h-screen justify-center items-center py-12 px-4 md:py-20">
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

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
              <LabelInputContainer>
                <Label htmlFor="fullName" className="text-neutral-200">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="rollNumber" className="text-neutral-200">Roll Number (if you are from CVR)</Label>
                <Input
                  id="rollNumber"
                  name="rollNumber"
                  placeholder="Enter your roll number"
                  type="text"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                />
              </LabelInputContainer>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
              <LabelInputContainer>
                <Label htmlFor="email" className="text-neutral-200">Email ID *</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="mobileNumber" className="text-neutral-200">Mobile Number *</Label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="+91 XXXXXXXXXX"
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                />
              </LabelInputContainer>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
              <LabelInputContainer>
                <Label htmlFor="year" className="text-neutral-200">Year of Study *</Label>
                <Select
                  value={formData.year}
                  onValueChange={(value) => handleSelectChange("year", value)}
                  required
                >
                  <GlowSelectTrigger className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500">
                    <SelectValue placeholder="Select Year" />
                  </GlowSelectTrigger>
                  <SelectContent className="bg-black/90 border-white/10 text-white backdrop-blur-xl">
                    <SelectItem value="2nd" className="focus:bg-[#c12d28]/50 focus:text-white">2nd Year</SelectItem>
                    <SelectItem value="3rd" className="focus:bg-[#c12d28]/50 focus:text-white">3rd Year</SelectItem>
                    <SelectItem value="4th" className="focus:bg-[#c12d28]/50 focus:text-white">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="teamSize" className="text-neutral-200">Team Size *</Label>
                <Select
                  value={formData.teamSize}
                  onValueChange={(value) => handleSelectChange("teamSize", value)}
                  required
                >
                  <GlowSelectTrigger className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500">
                    <SelectValue placeholder="Select Team Size" />
                  </GlowSelectTrigger>
                  <SelectContent className="bg-black/90 border-white/10 text-white backdrop-blur-xl">
                    <SelectItem value="2" className="focus:bg-[#c12d28]/50 focus:text-white">2</SelectItem>
                    <SelectItem value="3" className="focus:bg-[#c12d28]/50 focus:text-white">3</SelectItem>
                    <SelectItem value="4" className="focus:bg-[#c12d28]/50 focus:text-white">4</SelectItem>
                  </SelectContent>
                </Select>
              </LabelInputContainer>
            </div>

            <div className="border-t border-white/10 pt-4 mt-4">
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Team Leader Information</h3>
              <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
                <LabelInputContainer>
                  <Label htmlFor="teamLeaderName" className="text-neutral-200">Team Leader Name *</Label>
                  <Input
                    id="teamLeaderName"
                    name="teamLeaderName"
                    placeholder="Team Leader Name"
                    type="text"
                    value={formData.teamLeaderName}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="teamLeaderPhone" className="text-neutral-200">Team Leader phone number *</Label>
                  <Input
                    id="teamLeaderPhone"
                    name="teamLeaderPhone"
                    placeholder="+91 XXXXXXXXXX"
                    type="tel"
                    value={formData.teamLeaderPhone}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                  />
                </LabelInputContainer>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 mt-4">
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Team Member 1</h3>
              <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
                <LabelInputContainer>
                  <Label htmlFor="teamMember1Name" className="text-neutral-200">Team Member 1 Name *</Label>
                  <Input
                    id="teamMember1Name"
                    name="teamMember1Name"
                    placeholder="Team Member 1 Name"
                    type="text"
                    value={formData.teamMember1Name}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="teamMember1Phone" className="text-neutral-200">Team Member 1 phone number *</Label>
                  <Input
                    id="teamMember1Phone"
                    name="teamMember1Phone"
                    placeholder="+91 XXXXXXXXXX"
                    type="tel"
                    value={formData.teamMember1Phone}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                  />
                </LabelInputContainer>
              </div>
            </div>

            {showMember2 && (
              <div className="border-t border-white/10 pt-4 mt-4">
                <h3 className="text-lg font-semibold text-neutral-200 mb-4">Team Member 2</h3>
                <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
                  <LabelInputContainer>
                    <Label htmlFor="teamMember2Name" className="text-neutral-200">Team Member 2 Name</Label>
                    <Input
                      id="teamMember2Name"
                      name="teamMember2Name"
                      placeholder="Team Member 2 Name"
                      type="text"
                      value={formData.teamMember2Name}
                      onChange={handleChange}
                      className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="teamMember2Phone" className="text-neutral-200">Team Member 2 phone number</Label>
                    <Input
                      id="teamMember2Phone"
                      name="teamMember2Phone"
                      placeholder="+91 XXXXXXXXXX"
                      type="tel"
                      value={formData.teamMember2Phone}
                      onChange={handleChange}
                      className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                    />
                  </LabelInputContainer>
                </div>
              </div>
            )}

            {showMember3 && (
              <div className="border-t border-white/10 pt-4 mt-4">
                <h3 className="text-lg font-semibold text-neutral-200 mb-4">Team Member 3</h3>
                <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
                  <LabelInputContainer>
                    <Label htmlFor="teamMember3Name" className="text-neutral-200">Team Member 3 Name</Label>
                    <Input
                      id="teamMember3Name"
                      name="teamMember3Name"
                      placeholder="Team Member 3 Name"
                      type="text"
                      value={formData.teamMember3Name}
                      onChange={handleChange}
                      className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="teamMember3Phone" className="text-neutral-200">Team Member 3 phone number</Label>
                    <Input
                      id="teamMember3Phone"
                      name="teamMember3Phone"
                      placeholder="+91 XXXXXXXXXX"
                      type="tel"
                      value={formData.teamMember3Phone}
                      onChange={handleChange}
                      className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                    />
                  </LabelInputContainer>
                </div>
              </div>
            )}

            <LabelInputContainer>
              <Label htmlFor="college" className="text-neutral-200">College *</Label>
              <Select
                value={formData.college}
                onValueChange={(value) => handleSelectChange("college", value)}
                required
              >
                <GlowSelectTrigger className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500">
                  <SelectValue placeholder="Select College" />
                </GlowSelectTrigger>
                <SelectContent className="bg-black/90 border-white/10 text-white backdrop-blur-xl">
                  <SelectItem value="CVR" className="focus:bg-[#c12d28]/50 focus:text-white">CVR College of Engineering</SelectItem>
                  <SelectItem value="Other" className="focus:bg-[#c12d28]/50 focus:text-white">Other</SelectItem>
                </SelectContent>
              </Select>
            </LabelInputContainer>

            {formData.college === "Other" && (
              <LabelInputContainer>
                <Label htmlFor="collegeOther" className="text-neutral-200">College Name *</Label>
                <Input
                  id="collegeOther"
                  name="collegeOther"
                  placeholder="Enter your college name"
                  type="text"
                  value={formData.collegeOther}
                  onChange={handleChange}
                  required={formData.college === "Other"}
                  className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500"
                />
              </LabelInputContainer>
            )}

            <LabelInputContainer>
              <Label className="text-neutral-200 mb-3 block">Food choice *</Label>
              <RadioGroup
                value={formData.foodChoice}
                onValueChange={(value) => handleSelectChange("foodChoice", value)}
                required
                className="flex flex-row gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="veg" id="veg" className="border-white/30 text-[#c12d28] focus:ring-[#c12d28]" />
                  <Label htmlFor="veg" className="text-neutral-200 cursor-pointer font-normal">Veg</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non-veg" id="non-veg" className="border-white/30 text-[#c12d28] focus:ring-[#c12d28]" />
                  <Label htmlFor="non-veg" className="text-neutral-200 cursor-pointer font-normal">Non-veg</Label>
                </div>
              </RadioGroup>
            </LabelInputContainer>

            <button
              className="group/btn relative block h-11 md:h-12 w-full rounded-md bg-gradient-to-br from-[#c12d28] to-[#a02520] font-bold text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all hover:bg-[#a02520] hover:scale-[1.01] active:scale-[0.99] mt-6 md:mt-8 text-sm md:text-base"
              type="submit"
            >
              REGISTER NOW
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
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
    const radius = 150 // Increased radius for better effect
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
        }}
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
        }}
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
