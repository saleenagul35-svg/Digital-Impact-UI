import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="about-wrapper">
        <div className="about-hero">
          <h1 className="about-h1">EVERYTHING YOU NEED TO KNOW ABOUT</h1>
        </div>

        <section className="about-section">
          <h2 className="about-blu-txt">THE DIGITAL IMPACTS</h2>
          <p className="about-para">
            The Digital Impacts create a perfect company for its customers. Digital Impacts offers the
            best services to ensure your business thrives online. Because we partner with our clients
            with a team of professionals, we can provide the best on our side. We strive to be leaders
            in digital marketing services worldwide by revolutionizing the industry and setting new
            standards of professionalism and success.
          </p>

          <h2 className="about-blu-txt">OUR VISION</h2>
          <p className="about-para">
            We strive to be leaders in digital marketing services across the world by revolutionizing
            the industry and setting new standards of professionalism and success. Our vision is to
            become a top agency offering online marketing strategies, digital sales solutions, and
            internet brand management in the international business sphere.
          </p>

          <h2 className="about-blu-txt">OUR MISSION</h2>
          <p className="about-para">
            Our mission is to partner with customers for their success as we create a diverse client
            base including companies and individuals functioning in many different fields and economies.
            We will be best in providing consistently successful, unique, and forward-thinking digital
            marketing solutions that take into account the individual requirements and unique demands of
            each client.
          </p>
        </section>

        <div className="about-us-flx">
          <div className="about-stat-box about-us-boxe1">
            <h2>10,000+</h2>
            <p>Domain Names Registered</p>
          </div>
          <div className="about-stat-box about-us-boxe2">
            <h2>90,000+</h2>
            <p>Websites Hosted</p>
          </div>
          <div className="about-stat-box about-us-boxe3">
            <h2>450,000+</h2>
            <p>Customers</p>
          </div>
        </div>
      </div>
  )
}

export default About