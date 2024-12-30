import React from 'react'
import {Link} from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t, i18n} =  useTranslation();

  return (
    <footer className="footer">
        <div className="container">
            <div className="row footer-top">
                <div className="left">
                    <div className="menu">
                        <ul className='list'>
                            <h3>Shop</h3>
                            <li className='listItem'><Link className='menuLink'>Best sellers</Link></li>
                            <li className='listItem'><Link className='menuLink'>Back in stock</Link></li>
                            <li className='listItem'><Link className='menuLink'>Suitcases</Link></li>
                            <li className='listItem'><Link className='menuLink'>Bags</Link></li>
                            <li className='listItem'><Link className='menuLink'>Accessories</Link></li>
                            <li className='listItem'><Link className='menuLink'>Shop all</Link></li>
                            <li className='listItem'><Link className='menuLink'>Corporate gifting</Link></li>
                            <li className='listItem'><Link className='menuLink'>Gift card</Link></li>
                        </ul>
                    </div>
                    <div className="menu">
                        <ul className='list'>
                            <h3>About</h3>
                            <li className='listItem'><Link className='menuLink'>The Away Difference</Link></li>
                            <li className='listItem'><Link className='menuLink'>Our story</Link></li>
                            <li className='listItem'><Link className='menuLink'>Our stores</Link></li>
                            <li className='listItem'><Link className='menuLink'>Careers</Link></li>
                            <li className='listItem'><Link className='menuLink'>Impact</Link></li>
                            <li className='listItem'><Link className='menuLink'>Press</Link></li>
                            <li className='listItem'><Link className='menuLink'>Refer a friend</Link></li>
                            <li className='listItem'><Link className='menuLink'>Sustainability</Link></li>
                        </ul>
                    </div>
                    <div className="menu">
                        <ul className='list'>
                            <h3>Get help</h3>
                            <li className='listItem'><Link className='menuLink'>Order tracking</Link></li>
                            <li className='listItem'><Link className='menuLink'>Make an exchange</Link></li>
                            <li className='listItem'><Link className='menuLink'>Make a return</Link></li>
                            <li className='listItem'><Link className='menuLink'>Set my lock</Link></li>
                            <li className='listItem'><Link className='menuLink'>Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="menu">
                        <ul className='list'>
                            <h3>FAQs</h3>
                            <li className='listItem'><Link className='menuLink'>All FAQs</Link></li>
                            <li className='listItem'><Link className='menuLink'>Warranty & repairs</Link></li>
                            <li className='listItem socialMedia'>
                                <Link className='listSocialMedia'><FaInstagram /></Link>
                                <Link className='listSocialMedia'><IoLogoFacebook /></Link>
                                <Link className='listSocialMedia'><FaXTwitter /></Link>
                                <Link className='listSocialMedia'><FaPinterest /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <h1>Sign up for our emails</h1>
                    <p>We’ll send you updates on our latest launches and more. Need to take off? Unsubscribe at any time</p>
                    <div className="emailInput"><input className="email" type="email" placeholder='Email adress' /><button type='submit'><FaArrowRight className='icon'/></button></div>
                    <p>By clicking submit, you agree to our <Link className='link'>Privacy Policy</Link> and <Link className='link'>Terms</Link>. We’ll send you updates on all things Away. Need to take off? Unsubscribe anytime.</p>
                </div>
            </div>
            <div className="row footer-bottom">
                <select name="stores" id="" className='selections'>
                        <option value="default" className='option'>Language</option>
                        <option value="london" className='option' onClick={() => i18n.changeLanguage("en")}>En</option>
                        <option value="chicago" className='option' onClick={() => i18n.changeLanguage("az")}>Az</option>
                </select>
                <div className="right">
                    <div className="links">
                    <Link className="link">{t("footer.footer_bottom.privacy")}</Link>
                    <Link className="link">{t("footer.footer_bottom.terms")}</Link>
                    <Link className="link">{t("footer.footer_bottom.accessibility")}</Link>
                    </div>
                    <span className='text'>© 2024 JRSK, Inc.</span>
                </div>
            </div>
            

        </div>
    </footer>
)
}

export default Footer