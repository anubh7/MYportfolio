import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'
import emailjs from '@emailjs/browser'
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiOutlinePaperAirplane,
} from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [ref, isInView] = useInView(0.1)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: <HiMail />,
      label: 'Email',
      value: 'dadagupta709@gmail.com',
      href: 'mailto:dadagupta709@gmail.com',
    },
    {
      icon: <HiPhone />,
      label: 'Phone',
      value: '+91-9569664801',
      href: 'tel:+919569664801',
    },
    {
      icon: <HiLocationMarker />,
      label: 'Location',
      value: 'Kanpur, Uttar Pradesh, India',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/anubhav-gupta-428b0932a', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/anubh7', label: 'GitHub' },
    { icon: <HiMail />, href: 'mailto:dadagupta709@gmail.com', label: 'Email' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.sendForm(
        'service_1u9xsln',
        'template_706lcpk',
        formRef.current!,
        '2A9Z2EtsYVJ0A2mZn'
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative section-padding" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-secondary/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 glass-card rounded-xl p-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:bg-primary/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-tertiary border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/25 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-tertiary border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/25 transition-all duration-300"
                    placeholder="Name@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-tertiary border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/25 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-dark-tertiary border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/25 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed magnetic-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <HiOutlinePaperAirplane className="text-lg" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-400"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-red-400"
                >
                  Failed to send message. Please try again or email me directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact