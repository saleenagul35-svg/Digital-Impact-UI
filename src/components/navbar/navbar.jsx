import React from 'react'

import './navbar.css'
import { Link } from "react-router-dom"
import navimg from "../../assets/the-digital-impacts.png"

const Navbar = () => {


  return (
    <>
    
      <nav className='navbar'>
        <img src={navimg} alt="" className='navbar_img' />
        <ul className='navlinks'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
        <button className='navBtn'>Contact Us</button>
      </nav>
      <div className='line'>

      </div>
     

    </>
  )
}

export default Navbar