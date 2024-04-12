
import Contact from "./components/Contact"
import Education from "./components/Education"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  )
}

export default App
