import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiDownload, HiArrowNarrowRight, HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const titles = [
  'Software Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'MERN Stack Developer',
]

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setTitleIndex((prev) => (prev + 1) % titles.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentTitle.substring(0, displayText.length - 1)
              : currentTitle.substring(0, displayText.length + 1)
          )
        },
        isDeleting ? 50 : 100
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow" />
            <div className="absolute inset-[3px] rounded-full bg-dark-secondary overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 via-dark-secondary to-secondary/30 flex items-center justify-center">
                <img 
                  src="/profile.jpg" 
                  alt="Anubhav Gupta" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </div>
            {/* Online status */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-dark-secondary animate-pulse" />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Anubhav Gupta</span>
        </motion.h1>

        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-12 md:h-16 flex items-center justify-center mb-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            I'm a{' '}
            <span className="gradient-text font-bold">{displayText}</span>
            <span className="animate-pulse text-primary">|</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          B.Tech CSE student passionate about Full-Stack Development and DSA. 
          Proficient in building scalable web applications using React.js, Node.js, MongoDB, and JavaScript.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 magnetic-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload className="text-lg" />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 glass rounded-xl hover:text-white hover:border-primary/30 transition-all duration-300 magnetic-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <HiArrowNarrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 glass rounded-xl hover:text-white hover:border-primary/30 transition-all duration-300 magnetic-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiMail className="text-lg" />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/anubh7', label: 'GitHub' },
            { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/anubhav-gupta-428b0932a', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass text-gray-400 hover:text-white hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll Down</span>
            <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1">
              <motion.div
                className="w-1 h-2 rounded-full bg-current"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero