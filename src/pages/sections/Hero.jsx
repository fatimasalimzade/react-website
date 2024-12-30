import React from 'react'
import HeroImage from '../../assets/images/heroimg.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className="heroSection">
      <div className="container">
        <div className="row">
          <div className="image">
            <img src={HeroImage} alt="" />
          </div>
          <div className="text">
            <div><h1>Suitcases for every traveler</h1></div>
            <div><p>Classic, Flex, Aluminum, and now Softside—suitcases to fit every travel style</p></div>
            <div className="shopLink"><Link to='/shopall' className='link'>Shop suitcases</Link></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero