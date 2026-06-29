import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  image: string
  features: string[]
  technologies: string[]
  github: string
  live: string
  gradient: string
}

const projects: Project[] = [
  {
    title: 'NexusHub',
    description: 'A full-stack social networking platform built with the MERN stack. Features Redux Toolkit for state management, Material UI for responsive design with dark mode, JWT authentication with role-based authorization, and real-time notifications.',
    image: '🌐',
    features: ['JWT Authentication', 'Real-time Notifications', 'Analytics Dashboard', 'Dark Mode', 'Advanced Search'],
    technologies: ['React.js', 'Redux Toolkit', 'Material UI', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/anubh7/Nexushub',
    live: '#',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Task Management App',
    description: 'A full-stack task management application with a RESTful API backend using Node.js and Express.js. Features secure user registration with JWT auth, role-based access control, and MVC architecture. Deployed on Render.',
    image: '📋',
    features: ['JWT Authentication', 'Role-Based Access', 'MVC Architecture', 'REST API', 'Deployed on Render'],
    technologies: ['Node.js', 'Express.js', 'JavaScript', 'JWT', 'bcrypt', 'REST APIs'],
    github: 'https://github.com/anubh7/task_managementapp',
    live: '#',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    title: 'Student Performance Analysis',
    description: 'A Python-based data analysis project that analyzes student performance using statistical techniques. Identifies patterns between study habits, attendance, and academic results to improve student outcomes.',
    image: '📊',
    features: ['Data Processing', 'Statistical Analysis', 'Pattern Recognition', 'Performance Insights'],
    technologies: ['Python', 'Data Analysis', 'Statistics'],
    github: 'https://github.com/anubh7/student-performance-analysis',
    live: '#',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'Urban System',
    description: 'A system-level project focusing on urban infrastructure and management solutions.',
    image: '🏙️',
    features: ['System Design', 'Infrastructure Management', 'Data Processing'],
    technologies: ['JavaScript'],
    github: 'https://github.com/anubh7/urban-system',
    live: '#',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Water Footprints',
    description: 'A project focused on tracking and analyzing water consumption patterns and environmental impact metrics.',
    image: '💧',
    features: ['Environmental Analysis', 'Data Tracking', 'Impact Metrics'],
    technologies: ['JavaScript'],
    github: 'https://github.com/anubh7/WATER-FOOTPRINTS',
    live: '#',
    gradient: 'from-teal-500 to-green-600',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth Framer Motion animations, glassmorphism design, and dark theme.',
    image: '💼',
    features: ['Responsive Design', 'Smooth Animations', 'Dark Theme', 'Contact Form'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/anubh7',
    live: '#',
    gradient: 'from-violet-500 to-indigo-600',
  },
]

const Projects = () => {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="projects" className="relative section-padding" ref={ref}>
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
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of projects that demonstrate my skills in full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Project Image / Gradient Header */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary/80 border border-primary/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-gray-500"
                      >
                        #{tech.toLowerCase().replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects