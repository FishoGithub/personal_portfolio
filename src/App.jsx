import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Experiences from './components/Experiences'

const App = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white 
    bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">

      {/* navbar */}
        <Navbar/>
        <Hero />
        <AboutMe/>
        <Experiences/>
    </div>
  )
}

export default App


