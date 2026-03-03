import React from 'react'
import './bottom.css'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import USAFlag from "../../assets/USA Flag.jpg"
import UKFlag from "../../assets/UK Flag.jpg"
import CanadaFlag from "../../assets/Canada Flag.jpg"
const Bottom = () => {
    return (
        <>
            <section className='bottombar'>
                <div className='bottom-flx'>
                    <div >
                        <h2>COMPANY</h2>
                        <ul className='bottom-flxli'>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Why Choose Us</a></li>
                            <li><a href="">Team</a></li>
                            <li><a href="">Pricing & Plans</a></li>
                            <li><a href="">Contacts</a></li>
                            <li><a href="">Investors</a></li>
                        </ul>
                    </div>
                    <div >
                        <h2>SERVICES</h2>
                        <ul className='bottom-flxli'>
                            <li><a href="#">Web Design & Development</a></li>
                            <li><a href="#">Why Choose Us</a></li>
                            <li><a href="#">Specialized SEO Services</a></li>
                            <li><a href="#">Specialized Social Services</a></li>
                            <li><a href="#">Specialized Graphics Services</a></li>
                            <li><a href="#">Investors</a></li>
                        </ul>
                    </div>
                    <div >
                        <h2>RESOURCES</h2>
                        <ul className='bottom-flxli'>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Terms of Services</a></li>
                            <li><a href="#">Help & FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Site map</a></li>
                        </ul>
                        <a href="#" className='follow-btn'>Follow Us</a><br /><br /><br />
                        <a href="#" className='bottom-icons'><RiFacebookCircleLine /></a>
                        <a href="#" className='bottom-icons'><FiInstagram /></a>
                        <a href="#" className='bottom-icons'><FaLinkedinIn /></a>
                        <a href="#" className='bottom-icons'><FiTwitter /></a>
                    </div>
                </div>
                <div className='bottom-flx'>
                    <div className='flag-boxes'>
                        <img src={USAFlag} alt="" className='flag-imgs' />
                        <h3>USA :</h3>
                        <p>1st Avenue, SW, Hickory,NC, USA

                            Email: info@thedigitalimpacts.com</p>
                    </div>
                    <div className='flag-boxes'>
                        <img src={UKFlag} alt="" className='flag-imgs' />
                        <h3>UK :</h3>
                        <p>Oldham Greater Manchester, United Kingdom

                            Email: info@thedigitalimpacts.com</p>
                    </div>
                    <div className='flag-boxes'>
                        <img src={CanadaFlag} alt="" className='flag-imgs' />
                        <h3>CANADA :</h3>
                        <p>92 Avenue, Surrey, BC, Canada

                            Email: info@thedigitalimpacts.com</p>
                    </div>
                </div>
                <div className='bottombar-line'></div>
                <p className='copyright-txt'>Copyright © 2022 The Digital Impacts. All rights reserved</p>
            </section>

        </>
    )
}
export default Bottom