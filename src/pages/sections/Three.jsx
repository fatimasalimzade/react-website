import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-router-dom'
import timg1 from '../../assets/images/three1.png'
import timg2 from '../../assets/images/three2.png'
import timg3 from '../../assets/images/three3.png'

const three = () => {
  return (
    <section className="three">
      <div className="container">
        <div className="row">
          <div className="boxes">
            <div className="box">
              <div className="image">
                <img src={timg1} alt="" />
              </div>
              <div className="moreLink"><Link className='link'>Shop the collection<FaArrowRight className='icon'/>
            </Link></div>
            <div><p>Take your A-game to new heights with the all new Courtside Tote, featuring a dedicated pocket for your racket.</p></div>
            </div>
            <div className="box">
              <div className="headtxt"><span className='decotxt'>Away goes</span>
              <h1>Courtside</h1></div>
                <div className="image">
                  <img src={timg2} alt="" />
                </div>
                <div className="moreLink"><Link className='link'>Shop the collection<FaArrowRight className='icon'/>
              </Link></div>
              <p>Your game, your gear, your getaway—all effortlessly packed in one stylish bag. Our best-selling silhouette offers a full wraparound zip opening for easy access and a trolley sleeve to secure it to any Away suitcase.</p>
            </div>
            <div className="box">
              <div className="image">
                <img src={timg3} alt="" />
              </div>
              <div className="moreLink"><Link className='link'>Shop the collection<FaArrowRight className='icon'/>
            </Link></div>
            <p>Look fly, from the baseline to the boarding gate with this stylish, versatile backpack, featuring a breathable mesh back panel for extra comfort, a water bottle pocket, and an extended zipper clamshell for easy access to the main compartment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default three