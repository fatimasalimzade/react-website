import { Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { formatImageUrl } from '../utils/utils';
import {useParams} from 'react-router-dom'

import { CartContext  } from '../utils/CartContext';


const Product = () => {
    const [featuredProduct, setFeaturedProduct] = useState(null);
    const { id } = useParams();

    const { addTOCart  } = useContext(CartContext);

    const {product, setProduct} = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SINGLE_PRODUCT}${id}`)
        .then((res) => {
            if(res.data){
                setFeaturedProduct(res.data);
            }
            else {
                setFeaturedProduct(null);
            }
        }).catch((err) => {console.log(err)})
    }, [id])
    if(!featuredProduct){
        return <div>No data</div>
    }
  return (
    <div className="product">
        <div className="container">
            <div className="row">
                <div className="image">
                    <img src={formatImageUrl(featuredProduct?.productImage)} alt="" />
                </div>
                <div className="right">
                    <div className="head">
                        <h1 className='serif-font'>{featuredProduct?.name}</h1>
                        <span className='price'>{featuredProduct?.price}</span>
                    </div>
                    <div className="reviews">
                        <div className="stars"></div>
                        <span>(4.5)</span>
                        <Link className="review">1928 Reviews</Link>
                    </div>
                    <div className="learnMore">
                        <span>4 interest-free payments of $48.75 with <span>Klarna.</span> <Link className='link'>Learn More</Link></span>
                    </div>
                    <p>The Everywhere Bag is our standard-sized version of our best-selling silhouette, with a full wraparound zip opening to give easy access to the spacious main compartment. <Link className='link'>Read more</Link></p>
                    <button className='add'>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product