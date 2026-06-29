import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { FaExternalLinkAlt } from 'react-icons/fa'
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
} from 'react-icons/si'

interface Profile {
  name: string
  icon: React.ReactNode
  username: string
  problemsSolved: string
  badges: string
  rating: string
  color: string
  url: string
}

const profiles: Profile[] = [
  {
    name: 'GitHub',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
    username: '@anubh7',
    problemsSolved: '6 Repositories',
    badges: 'Full-Stack Developer',
    rating: 'MERN Stack Enthusiast',
    color: '#ffffff',
    url: 'https://github.com/anubh7',
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode />,
    username: '@anubhavleetc',
    problemsSolved: '200+ Problems',
    badges: 'Active Problem Solver',
    rating: 'Consistent Practitioner',
    color: '#FFA116',
    url: 'https://leetcode.com/u/anubhavleetc/',
  },
  {
    name: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks />,
    username: '@anubhavgupta',
    problemsSolved: '100+ Problems',
    badges: 'DSA Enthusiast',
    rating: 'Problem Solving Focus',
    color: '#2F8D46',
    url: 'https://www.geeksforgeeks.org/',
  },
  {
    name: 'HackerRank',
    icon: <SiHackerrank />,
    username: '@anubhavgupta',
    problemsSolved: '50+ Challenges',
    badges: 'Problem Solving',
    rating: 'Python & JavaScript',
    color: '#00A69E',
    url: 'https://www.hackerrank.com/',
  },
  {
    name: 'LinkedIn',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    username: 'Anubhav Gupta',
    problemsSolved: 'B.Tech CSE Student',
    badges: 'Open to Work',
    rating: 'MPEC Kanpur',
    color: '#0A66C2',
    url: 'https://www.linkedin.com/in/anubhav-gupta-428b0932a',
  },
]

const CodingProfiles = () => {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="profiles" className="relative section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Where I Code
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My active presence on competitive programming and development platforms
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden">
                {/* Glow on hover */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: profile.color }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: profile.color }}
                    >
                      {profile.icon}
                    </div>
                    <FaExternalLinkAlt className="text-gray-600 group-hover:text-gray-400 transition-colors" size={14} />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-mono mb-4">{profile.username}</p>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {profile.problemsSolved}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {profile.badges}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {profile.rating}
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles