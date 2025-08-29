"use client"

import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/portfolio"
import { scrollToSection } from "@/lib/utils"
import Image from "next/image"

export function HeroSection() {
  const handleDownloadCV = () => {
    // Create a link to download CV
    const link = document.createElement('a')
    link.href = '/cv/Prince-Kumar-CV.pdf'
    link.download = 'Prince-Kumar-CV.pdf'
    link.click()
  }

  const handleContactClick = () => {
    scrollToSection('contact')
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700/25 bg-[size:60px_60px] opacity-20" />
      
      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-purple-50/20 dark:from-transparent dark:via-blue-900/20 dark:to-purple-900/10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-500" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Professional Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for Opportunities
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>

              {/* Professional Title */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 font-medium mb-6"
              >
                <span className="text-blue-600 dark:text-blue-400">{personalInfo.title}</span>
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl"
              >
                {personalInfo.bio}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button
                  size="lg"
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleContactClick}
                  className="border-2 border-slate-300 dark:border-slate-600 px-8 py-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center lg:justify-start space-x-4"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
                >
                  <Github className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
                >
                  <Linkedin className="h-6 w-6 text-blue-600" />
                </a>
                <a
                  href={personalInfo.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
                >
                  <ExternalLink className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl transform scale-110" />
                  
                  {/* Main Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-2">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800 flex items-center justify-center">
                      {/* Placeholder for profile image - you can replace this with actual image */}
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center">
                        <span className="text-6xl lg:text-8xl font-bold text-white">
                          {personalInfo.initials}
                        </span>
                      </div>
                      {/* Uncomment below and add your profile image */}
                      {/* <Image
                        src="/profile/prince-kumar.jpg"
                        alt="Prince Kumar"
                        fill
                        className="object-cover"
                        priority
                      /> */}
                    </div>
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <span className="text-white font-bold text-sm">AWS</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <span className="text-white font-bold text-sm">JS</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-1/2 -left-8 w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <span className="text-white font-bold text-xs">React</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{ x: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                    className="absolute top-1/2 -right-8 w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <span className="text-white font-bold text-xs">Next</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Professional Wavy Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-24 lg:h-32"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white dark:fill-slate-900"
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

    </section>
  )
}