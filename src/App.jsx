import React from 'react'

import './App.css'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Services from './components/services/services'
import { Routes, Route } from "react-router-dom"
import Bottom from './components/bottom/bottom'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
        <Route path='/services' element={<Services />} />
       
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Bottom/>
      

    </>
  )
}

export default App
