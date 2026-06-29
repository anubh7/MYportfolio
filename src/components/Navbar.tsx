import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl md:text-2xl font-bold font-mono gradient-text">
              {'</>'}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Resume Button (Desktop) */}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick('#contact')
            }}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 magnetic-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-gray-400 hover:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar