import { motion } from 'framer-motion'
import { useInView } from './useInView'

const About = () => {
  const [ref, isInView] = useInView(0.2)

  const details = [
    { label: 'name', value: 'Anubhav Gupta' },
    { label: 'email', value: 'dadagupta709@gmail.com' },
    { label: 'location', value: 'Kanpur, India' },
    { label: 'education', value: 'B.Tech CSE (8.2 CGPA)' },
    { label: 'college', value: 'MPEC Kanpur' },
  ]

  const highlights = [
    '🎓 B.Tech CSE student at Maharana Pratap Engineering College, Kanpur',
    '💻 Full-Stack Developer specializing in MERN stack',
    '🧠 Solving DSA problems on LeetCode & GeeksforGeeks',
    '🚀 Built NexusHub - a full-stack social networking platform',
    '🔧 Python Developer Intern at Pinnacle Labs',
    '📜 Certified in Generative AI (NPTEL) & Software Engineering (Forage)',
    '♟️ Strategic thinker — Chess & Cricket enthusiast',
  ]

  return (
    <section id="about" className="relative section-padding" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-secondary/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8">
              {/* Code-style header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-gray-500 font-mono">about.tsx</span>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div>
                  <span className="text-secondary">const</span>{' '}
                  <span className="text-primary">developer</span>{' '}
                  <span className="text-white">=</span> {'{'}
                </div>
                {details.map((detail) => (
                  <div key={detail.label} className="pl-6">
                    <span className="text-accent">{detail.label}</span>
                    <span className="text-white">: </span>
                    <span className="text-yellow-300">"{detail.value}"</span>
                    <span className="text-white">,</span>
                  </div>
                ))}
                <div>
                  <span className="pl-6 text-accent">status</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">"Open to Work"</span>
                  <span className="text-white">,</span>
                </div>
                <div>{'}'}</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Software Engineer & Full-Stack Developer
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I'm a B.Tech CSE student with strong foundations in Full-Stack Development 
              and DSA. Proficient in building scalable websites using HTML, CSS, React.js, 
              Node.js, MongoDB, and JavaScript with a focus on clean, maintainable code.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently pursuing B.Tech at Maharana Pratap Engineering College, Kanpur with 
              a CGPA of 8.2/10. I've completed a Python Developer Internship at Pinnacle Labs 
              and solved 200+ DSA problems on LeetCode and GeeksforGeeks.
            </p>

            <div className="space-y-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-sm mt-0.5">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About