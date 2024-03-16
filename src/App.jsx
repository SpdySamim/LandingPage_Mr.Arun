import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Image from './components/Image'
import Course from './components/Course'
import Rewards from './components/Rewards'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
     <Hero/>
     <About/>
     <Course/>
     <Rewards/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
