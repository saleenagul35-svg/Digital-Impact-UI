import React from 'react'
import { GiStarsStack } from "react-icons/gi";
import { TfiRocket } from "react-icons/tfi";
import { CiViewBoard } from "react-icons/ci";
import { LuClipboardPenLine } from "react-icons/lu";
import { GiLindenLeaf } from "react-icons/gi";
import estate from "../../assets/Estate.jpg";
import education from "../../assets/Education.jpg";
import commerce from "../../assets/Commerce.jpg";
import hospitality from "../../assets/Hospitality.jpg";
import healthCare from "../../assets/Health-Care.jpg";
import fintech from "../../assets/Fintech.jpg";
import './services.css'

const Services = () => {


  return (
    <>
      <div className='center-txt'>
        <h1 className='cntr-txt'>
          We Provide The Best
          Services With Our
          Developers
        </h1>
      </div>
      <div className='services-section'>
        <div className='services-box'>
          <h1>Digital Marketing</h1>
          <GiStarsStack className="icon-color" />
          <p>The Digital Impacts have compiled a list of the best digital marketing companies in the world.</p>
        </div>
        <div className='services-box'>
          <h1>Web Development</h1>
          <TfiRocket className="icon-color" />
          <p>Web design services comprise the process of user interface (UI) and user experience (UX) design of any web-based solution.</p>
        </div>
        <div className='services-box'>
          <h1>Graphic Designing</h1>
          <CiViewBoard className="icon-color" />
          <p>Create visual concepts to communicate ideas that inspire and captivate consumers, creative thinking, an aptitude towards art and design</p>
        </div>
      </div>
      <div className='services-section'>
        <div className='services-box'>
          <h1>Content Writter</h1>
          <LuClipboardPenLine className="icon-color" />
          <p>That content can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media</p>
        </div>
        <div className='services-box'>
          <h1>SEO</h1>
          <GiLindenLeaf className="icon-color" />
          <p>Web design services comprise the process of user interface (UI) and user experience (UX) design of any web-based solution.</p>
        </div>

      </div>
      <div className='center-txt'>
        <h1 className='cntr-txt'>
          Industries We
          Work With
        </h1>
        <p className='cntr-txt'>
          We work as a technology partner for various industries
          Our expertise can be applied to the specific demands
          and nuances in your industry
        </p>
      </div>
      <section className='Industries-section'>
        <div className='Industries-top-section'>
          <div>
            <img src={estate} className='services-img' alt="" />
            <h3>REAL ESTATE</h3>
          </div>
          <div>
            <img src={education} className='services-img' alt="" />
            <h3>EDUCATION</h3>
          </div>
          <div>
            <img src={commerce} className='services-img' alt="" />
            <h3>COMMERCE</h3>
          </div>
        </div>
        <div className='Industries-top-section'>
          <div>
            <img src={hospitality} className='services-img' alt="" />
            <h3>HOSPITALITY</h3>
          </div>
          <div>
            <img src={healthCare} className='services-img' alt="" />
            <h3>HEALTHCARE</h3>
          </div>
          <div>
            <img src={fintech} className='services-img' alt="" />
            <h3>FINTECH</h3>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services