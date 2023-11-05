import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import { MyContext } from './components/myContext'

const App = () => {
  const {isMenuOpen} = useContext(MyContext)

  return (
    <Router>
      <Navbar />
      <div style={isMenuOpen ? {filter: 'blur(5px)'} : null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

