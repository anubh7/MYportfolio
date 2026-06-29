import { motion } from 'framer-motion'
import { useInView } from './useInView'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiDocker,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { FaDatabase, FaCode, FaObjectGroup, FaPuzzlePiece, FaCogs } from 'react-icons/fa'

interface Skill {
  name: string
  icon: React.ReactNode
  level: number
  category: string
  color: string
}

const skills: Skill[] = [
  { name: 'HTML5', icon: <SiHtml5 />, level: 95, category: 'Languages', color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss />, level: 90, category: 'Languages', color: '#1572B6' },
  { name: 'JavaScript', icon: <SiJavascript />, level: 90, category: 'Languages', color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 80, category: 'Languages', color: '#3178C6' },
  { name: 'Python', icon: <SiPython />, level: 85, category: 'Languages', color: '#3776AB' },
  { name: 'C++', icon: <SiCplusplus />, level: 80, category: 'Languages', color: '#00599C' },
  { name: 'SQL', icon: <FaDatabase />, level: 78, category: 'Languages', color: '#4479A1' },
  { name: 'React.js', icon: <SiReact />, level: 88, category: 'Frameworks', color: '#61DAFB' },
  { name: 'Node.js', icon: <SiNodedotjs />, level: 82, category: 'Frameworks', color: '#339933' },
  { name: 'Express.js', icon: <SiExpress />, level: 80, category: 'Frameworks', color: '#FFFFFF' },
  { name: 'React Native', icon: <SiReact />, level: 70, category: 'Frameworks', color: '#61DAFB' },
  { name: 'MongoDB', icon: <SiMongodb />, level: 82, category: 'Frameworks', color: '#47A248' },
  { name: 'REST APIs', icon: <FaCode />, level: 85, category: 'Frameworks', color: '#0ea5e9' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, category: 'Frameworks', color: '#06B6D4' },
  { name: 'Git', icon: <SiGit />, level: 85, category: 'Tools', color: '#F05032' },
  { name: 'GitHub', icon: <SiGithub />, level: 88, category: 'Tools', color: '#FFFFFF' },
  { name: 'VS Code', icon: <VscVscode />, level: 92, category: 'Tools', color: '#007ACC' },
  { name: 'Postman', icon: <SiPostman />, level: 80, category: 'Tools', color: '#FF6C37' },
  { name: 'Docker', icon: <SiDocker />, level: 65, category: 'Tools', color: '#2496ED' },
  { name: 'DSA', icon: <FaPuzzlePiece />, level: 85, category: 'CS Fundamentals', color: '#8b5cf6' },
  { name: 'OOP', icon: <FaObjectGroup />, level: 88, category: 'CS Fundamentals', color: '#06b6d4' },
  { name: 'System Design', icon: <FaCogs />, level: 70, category: 'CS Fundamentals', color: '#10b981' },
  { name: 'DBMS', icon: <FaDatabase />, level: 78, category: 'CS Fundamentals', color: '#4479A1' },
]

const Skills = () => {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="skills" className="relative section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            What I Know
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and concepts I use to build modern applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="glass-card rounded-xl p-5 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${skill.color}15`,
                    color: skill.color,
                  }}
                >
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                  <span className="text-xs text-gray-500 font-mono">{skill.category}</span>
                </div>
                <span className="text-sm font-bold text-gray-300">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-dark-tertiary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.03, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills