import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SocialLinks from './components/SocialLinks'

const App = () => {
  return (
    <div>
      <Navbar />
      <SocialLinks />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App