import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen bg-dark">
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App