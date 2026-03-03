import React from 'react'
import homeImg from "../../assets/Home-Image.jpg"
import './home.css'
import Services from '../services/services'
import Bottom from '../bottom/bottom'
import About from '../about/about'
import Portfolio from '../portfolio/portfolio'
import Google from "../../assets/google Map.png"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Home = () => {


const countries = ["Canada", "United States", "India", "Pakistan","Bangladesh", "China", "Japan", "Malysia","Indonesia","Iran","Iraq","Saudi Arabia"];

  return (
    <>
      <div className='HomeFlx'>
        <img src={homeImg} alt="" className='homeImg' />
        <div className='home-text'>
          <h1 className='home-txt1' >We are full Services</h1>
          <h1 className='home-blue-txt2'>Digital Marketing Agency</h1>
          <h1 className='home-blue-txt3'>Welcome to the Digital Impacts</h1>
          <div className='home-line'></div>
          <p>We partner with our clients with a team of professionals, we are able to provide
            the best on our side. We strive to be leaders in digital marketing services worldwide
            by revolutionizing the industry and setting new standards of professionalism and success.</p>
          <button className='Msg-Btn'>Message Us Now</button>
        </div>
      </div>
      <Services />
      <About />
      <Portfolio />
      <div className='Home-h1box'>
        <h1 className='Home-h1'>Feel Free To Contact Us By Submitting
          Form Or Contact Live Support</h1>
      </div>

      <div className='contact-box'>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.1364055684885!2d74.28523257486992!3d31.515908647363794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903a24f371795%3A0x74beee8aa43e49d5!2sPNY%20Trainings%20-%20Iqbal%20Town%20Branch!5e1!3m2!1sen!2s!4v1765712447175!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className='Home-flx2'>
            <div className='Home-flx3'>
              <FaPhoneSquareAlt className='Contact-icon-color' />
              <div>
                <p>+447424997026</p>
                <p>+447900190002</p>
              </div>
            </div>
            <div className='Home-flx3'>
              <MdEmail className='Contact-icon-color' />
              <span>info@thedigitalimpacts.com</span>
            </div>
          </div>
        </div>

        <form action="" className='contact-Form'>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='your Name' required/>
          <label htmlFor="">Surname</label>
          <input type="text" placeholder='your surname' required/>
          <label htmlFor="">Email</label>
          <input type="email" placeholder='your email address' required/>
          <label htmlFor="">Contact Number</label>
          <input type="tel" placeholder='123-45-678' required/>
          <label htmlFor="">Country</label>
          <select name="" id="" className='select-field' required>
            <option value="" disabled selected>Select a Country</option>
            {
              countries.map((country)=>(
                <option>{country}</option>
              ))
            }
          </select>
          <button className='submit-btn'>
            Submit
          </button>
        </form>

      </div>

    </>
  )
}

export default Home