import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/anubh7', label: 'GitHub' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/anubhav-gupta-428b0932a', label: 'LinkedIn' },
    { icon: <HiMail />, href: 'mailto:dadagupta709@gmail.com', label: 'Email' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark-secondary/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <motion.a
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToTop() }}
                className="text-2xl font-bold font-mono gradient-text inline-block mb-3"
                whileHover={{ scale: 1.05 }}
              >
                {'</>'}
              </motion.a>
              <p className="text-sm text-gray-500 leading-relaxed">
                Building innovative solutions with code and creativity.
                B.Tech CSE student passionate about full-stack development and problem solving.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.querySelector(link.href)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm text-gray-500 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Connect
              </h4>
              <div className="flex justify-center md:justify-end gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-white hover:border-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © {currentYear} Anubhav Gupta. All rights reserved.
            </p>
            <p className="text-sm text-gray-600">
              Built with{' '}
              <span className="text-primary">React</span> &{' '}
              <span className="text-secondary">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/30 transition-all duration-300 shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </footer>
  )
}

export default Footer