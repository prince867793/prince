"use client"

import { motion } from "framer-motion"
import { skills, personalInfo } from "@/data/portfolio"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 lg:h-24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white dark:fill-slate-900"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Passionate about building scalable solutions and optimizing cloud infrastructure
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 shadow-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">{personalInfo.initials}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {personalInfo.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {personalInfo.title}
                  </p>
                </div>
                
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    <span>2+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                    <span>Cloud & DevOps Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3" />
                    <span>AWS & Azure Certified</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Matrix */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                Technical Expertise
              </h3>
              
              <div className="grid gap-8">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 shadow-lg"
                  >
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                      {category}
                    </h4>
                    <div className="space-y-4">
                      {skillList.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {skill.name}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 1, 
                                delay: categoryIndex * 0.1 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                              className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { number: "2+", label: "Years Experience" },
              { number: "15+", label: "Projects Completed" },
              { number: "99.9%", label: "Uptime Achieved" },
              { number: "25%", label: "Cost Reduction" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}