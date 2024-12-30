import React from 'react'
import HeroImage3 from '../../assets/images/heroimg3.png'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="heroSection3">
      <div className="container">
        <div className="row">
          <div className="image">
            <img src={HeroImage3} alt="" />
          </div>
          <div className="text">
            <div><span>The weight is over</span></div>
            <div><h1 className='serif-font'>Meet Featherlight</h1></div>
            <div><p>Airy, organized, and exceptionally good looking. A big lift for a light bag.</p></div>
            <div className="shopLink"><Link className='link'>Shop now<FaArrowRight className='icon'/>
            </Link></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero