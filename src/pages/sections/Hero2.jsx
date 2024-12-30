import React from 'react'
import HeroImage2 from '../../assets/images/heroimg2.png'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="heroSection2">
      <div className="container">
        <div className="row">
          <div className="text">
            <div><span>Meet Courtside</span></div>
            <div><h1 className='serif-font'>Your A-game deserves a bag that can keep up</h1></div>
            <div><p>Inspired by the court, designed for the world. The new, limited-edition Courtside Collection seamlessly blends effortless style and travel-ready function so you make the right call—every time.</p></div>
            <div className="shopLink"><Link className='link'>Shop the collection<FaArrowRight className='icon'/>
            </Link></div>
          </div>
          <div className="image">
            <img src={HeroImage2} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero