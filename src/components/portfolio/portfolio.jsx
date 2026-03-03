import React from 'react'

import './portfolio.css'
import Unifresh from "../../assets/Unifresh.jpg"
import Revive from "../../assets/Revive.jpg"
import Voeux from "../../assets/Voeux.jpg"
import Kings from "../../assets/The Kingz.jpg"
import { FaRegListAlt } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { SiAmazonwebservices } from "react-icons/si";

const Portfolio = () => {


  return (
    <>
      <h1 className='portfolio-h1'>Projects We've Delivered</h1>
      <p className='portfolio-para'>Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web and mobile apps related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports, finance and sharing economy.</p>
      <section className='portfolio-section'>
        <div className='portfolio-flx1'>
          <div className='portfolio-flx2'>
            <span>INDUSTRY</span>
            <h1>REVIVE</h1>
            <span>Revive Beauty Salon & Institute</span>
            <div className='portfolio-flx3'>
              <FaRegListAlt className="icon-color" />
              <span>WEB DEVELOPMENT</span>
            </div>
            <div className='portfolio-flx3'>
              <FaRegListAlt className="icon-color" />
              <span>QUALITY ASSURANCE</span>
            </div>
            <div className='portfolio-flx3'>
              <SiReact className="icon-color" />
              <SiAmazonwebservices className="icon-color" />
            </div>
          </div>
          <a href=""><img src={Revive} alt="" className='portfolio-img' /></a>

        </div>
        <div className='portfolio-flx1'>
          <a href=""><img src={Voeux} alt="" className='portfolio-img' /></a>
          <div className='portfolio-flx2'>
            <span>INDUSTRY</span>
            <h1>REVIVE</h1>
            <span>Revive Beauty Salon & Institute</span>
            <div className='portfolio-flx3'>
              <FaRegListAlt className="icon-color" />
              <span>WEB DEVELOPMENT</span>
            </div>
            <div className='portfolio-flx3'>
              <FaRegListAlt className="icon-color" />
              <span>QUALITY ASSURANCE</span>
            </div>
            <div className='portfolio-flx3'>
              <SiReact className="icon-color" />
              <SiAmazonwebservices className="icon-color" />
            </div>
          </div>


        </div>
        <div className='portfolio-flx1'>

          <div className='portfolio-flx2'>
            <span>INDUSTRY</span>
            <h1>REVIVE</h1>
            <span>Revive Beauty Salon & Institute</span>
            <div className='portfolio-flx3'>
              <FaRegListAlt className="icon-color" />
              <span>WEB DEVELOPMENT</span>
            </div>
            <div className='portfolio-flx3'>
              <FaRegListAlt className="icon-color" />
              <span>QUALITY ASSURANCE</span>
            </div>
            <div className='portfolio-flx3'>
              <SiReact className="icon-color" />
              <SiAmazonwebservices className="icon-color" />
            </div>
          </div>
          <a href=""><img src={Kings} alt="" className='portfolio-img' /></a>
        </div>


        <div className='portfolio-flx1'>
          <a href=""><img src={Unifresh} alt="" className='portfolio-img' /></a>
          <div className='portfolio-flx2'>
            <span>INDUSTRY</span>
            <h1>REVIVE</h1>
            <span>Revive Beauty Salon & Institute</span>
            <div className='portfolio-flx3'>
              <FaRegListAlt className="icon-color" />
              <span>WEB DEVELOPMENT</span>
            </div>
            <div className='portfolio-flx3'>
              <FaRegListAlt className="icon-color" />
              <span>QUALITY ASSURANCE</span>
            </div>
            <div className='portfolio-flx3'>
              <SiReact className="icon-color" />
              <SiAmazonwebservices className="icon-color" />
            </div>
          </div>

        </div>
      </section >
    </>
  )
}

export default Portfolio