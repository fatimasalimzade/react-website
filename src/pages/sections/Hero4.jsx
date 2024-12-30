import React from 'react'
import HeroImage4 from '../../assets/images/heroimg4.png'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="heroSection4">
      <div className="container">
        <div className="row">
          <div className="text">
            <div><span>You've been accepted to Away University</span></div>
            <div><h1 className='serif-font'>The Collegiate Collection</h1></div>
            <div><p>Our officially licensed college collection has arrived. Rep your team from takeoff to tailgates with our best-selling Bigger Carry-On now sporting your favorite school.</p></div>
            <div className="shopLink"><Link className='link'>Shop Now<FaArrowRight className='icon'/>
            </Link></div>
          </div>
          <div className="image">
            <img src={HeroImage4} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero