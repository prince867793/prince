"use client"

import { motion } from "framer-motion"
import { Award, Shield, Container, Cloud } from "lucide-react"
import { experience, education, certifications } from "@/data/portfolio"

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const getCertificationIcon = (iconType: string) => {
    switch (iconType) {
      case 'aws':
        return <Cloud className="h-6 w-6" />
      case 'shield':
        return <Shield className="h-6 w-6" />
      case 'container':
        return <Container className="h-6 w-6" />
      default:
        return <Award className="h-6 w-6" />
    }
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
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
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Professional journey focused on cloud excellence and full-stack development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">EXP</span>
                </div>
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.period}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Cloud className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <p className="text-slate-600 dark:text-slate-400 text-sm">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Education */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg mr-3 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">EDU</span>
                  </div>
                  Education
                </h3>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 shadow-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {edu.institution}
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">
                            {edu.period}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mr-3 flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                Certifications
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                        <div className="text-white">
                          {getCertificationIcon(cert.icon)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {cert.name}
                        </h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 dark:text-slate-400 text-sm">
                        Year: {cert.year}
                      </span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-semibold">
                        Certified
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills Summary */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg mr-3 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🚀</span>
                  </div>
                  Core Competencies
                </h3>
                
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 shadow-lg"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Cloud Architecture",
                      "DevOps Automation",
                      "Full Stack Development", 
                      "Cost Optimization",
                      "System Monitoring",
                      "Security Implementation",
                      "Performance Tuning",
                      "Team Collaboration"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mr-3" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}