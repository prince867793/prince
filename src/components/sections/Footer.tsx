"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react"
import { personalInfo } from "@/data/portfolio"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{personalInfo.initials}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{personalInfo.name}</h3>
                  <p className="text-slate-400 text-sm">{personalInfo.title}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Building scalable cloud solutions and modern web applications with passion for innovation and excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Contact', href: '#contact' },
                  { name: 'GitHub', href: personalInfo.github, external: true },
                  { name: 'LinkedIn', href: personalInfo.linkedin, external: true },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    {link.name}
                    {link.external && (
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {personalInfo.email}
                </a>
                <p className="text-slate-400 text-sm">
                  {personalInfo.location}
                </p>
                <div className="flex space-x-4 pt-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="flex items-center text-slate-400 text-sm">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>using Next.js, TypeScript & TailwindCSS</span>
            </div>
            <div className="text-slate-400 text-sm">
              <span>Version 2.0 • Last updated August 2025</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}