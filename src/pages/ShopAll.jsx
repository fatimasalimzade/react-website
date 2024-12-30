import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link, useParams } from 'react-router-dom'
import Divider from './sections/Divider'
import axios from 'axios';
import { formatImageUrl } from '../utils/utils';

const ShopAll = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_ALL_PRODUCTS)
    .then((res) => {
      setFeaturedProducts(res.data);
        }).catch((err) => {console.log(err)})
  }, )

  return (
    <div className="shopAll">
    <div className="container">
    <h1>SHOP ALL</h1>
    <p>Seamless travel starts here. Explore thoughtfully designed luggage, bags, and accessories for wherever you are (and wherever you’re going).</p>
        <div className="row">
            <div className="head">
                <div className="left">
                <Link className='link'>CATEGORY<IoIosArrowDown /></Link>
                <Link className='link'>COLOR<IoIosArrowDown /></Link>
                <Link className='link'>MATERIAL<IoIosArrowDown /></Link>
                </div>
                <div className="right">
                    <span>68 products</span>
                </div>  
            </div>
            <div className="boxes">
              {featuredProducts.map((product) => (
                <div className="box">
              <Link className="link" to='/product'>
              <div className="image">
                <img src={formatImageUrl(product.productImage)} alt="bag" />
              </div>
              <div className="about"><span>{product.name}</span>
              <span className='price'>${product.price}</span></div>
              </Link>
             </div>
              ))}
            </div>
        </div>
    </div>
    <Divider/>
    </div>
  )
}

export default ShopAll