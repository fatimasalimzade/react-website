import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Divider = () => {
  return (
    <section className="dividerSection">
        <div className="container">
            <div className="row">
                <div className="left">
                    <h1>Free shipping on all luggage. Designed by travelers, for travelers.</h1>
                </div>
                <div className="right">
                    <p>We want you to love everything about getting Away—which is why we offer free returns and exchanges on unused items for the first 100 days.</p>
                    <div className="shopLink"><Link className='link'>Exclusions apply. Learn more<FaArrowRight className='icon'/>
            </Link></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Divider