import React from 'react'
import { Link } from 'react-router-dom';


export const ProductCard = ({id,name,price,productImage}) => {
    return (
        <div className="box">
        <Link className="link" to={`/product/${id}`}>
        <div className="image">
          <img src={productImage} alt="bag" />
        </div>
        <div className="about"><span>{name}</span>
        <span className='price'>${price}</span></div>
        </Link>
       </div>
  )
}
