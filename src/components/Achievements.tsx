import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { FaProjectDiagram, FaCode, FaGithub, FaCertificate } from 'react-icons/fa'

interface Achievement {
  icon: React.ReactNode
  label: string
  value: number
  suffix: string
  color: string
}

const achievements: Achievement[] = [
  { icon: <FaProjectDiagram />, label: 'Projects Completed', value: 6, suffix: '+', color: '#0ea5e9' },
  { icon: <FaCode />, label: 'DSA Problems Solved', value: 200, suffix: '+', color: '#8b5cf6' },
  { icon: <FaGithub />, label: 'GitHub Repositories', value: 6, suffix: '', color: '#10b981' },
  { icon: <FaCertificate />, label: 'Certifications Earned', value: 4, suffix: '', color: '#f59e0b' },
]

const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const [ref, isInView] = useInView(0.5)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

const Achievements = () => {
  const [sectionRef, isInView] = useInView(0.1)

  return (
    <section id="achievements" className="relative section-padding" ref={sectionRef}>
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
            My Journey So Far
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 text-center group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at center, ${achievement.color}10 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${achievement.color}15`,
                  color: achievement.color,
                }}
              >
                {achievement.icon}
              </div>

              {/* Counter */}
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CountUp end={achievement.value} />
                <span className="gradient-text">{achievement.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-sm text-gray-400 font-medium">{achievement.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Certifications & <span className="gradient-text">Internships</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { name: 'Programming with Generative AI', org: 'NPTEL', color: '#0ea5e9' },
              { name: 'Python Development Internship', org: 'Pinnacle Labs', color: '#8b5cf6' },
              { name: 'Software Engineering Virtual Experience', org: 'Forage', color: '#10b981' },
              { name: 'TCS iON Career Edge Young Professional', org: 'TCS', color: '#f59e0b' },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass-card rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-2 h-12 rounded-full" style={{ background: cert.color }} />
                <div>
                  <p className="text-white font-medium text-sm">{cert.name}</p>
                  <p className="text-gray-500 text-xs">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements