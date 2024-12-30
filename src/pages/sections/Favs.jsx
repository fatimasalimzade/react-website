import React, { useEffect, useState } from 'react'

import axios from 'axios'
import {useParams} from 'react-router-dom'
import { ProductCard } from '../../components/ProductCard'
import { formatImageUrl } from '../../utils/utils'

const Favs = () => {

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const totalFeaturedProducts = 4;
  const { id } = useParams();

  useEffect(() => {
    axios.get(process.env.REACT_APP_ALL_PRODUCTS)
    .then((res) => {
      const featured = res.data.slice(0, totalFeaturedProducts);
      setFeaturedProducts(featured);
    }).catch((err) => {console.log(err)})
  }, [id])

  return (
    <section className="four">
      <div className="container">
        <div className="row">
          <div className="headtxt"><span className='decotxt'>A few of our</span>
          <h1>Favorites</h1></div>
          <div className="boxes">
              {featuredProducts.map((product) => (
                <ProductCard
                className="product"
                key={product.id}
                id={product.id}
                price={product.price}
                name={product.name}
                productImage={formatImageUrl(product.productImage)}
                />
              ))}            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Favs