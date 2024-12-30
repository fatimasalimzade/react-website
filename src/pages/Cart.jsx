import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatImageUrl } from '../utils/utils';
import axios from 'axios';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { CartContext } from '../utils/CartContext';


const EmptyCart = () => {
    const {cart, totalPrice, addToCart, decrement, increment, removeFromCart} = useContext(CartContext);
    const [featuredProducts, setFeaturedproducts] = useState([]);
    const totalFeaturedProducts = 4;
    const { id } = useParams();

    useEffect(() => {
        axios.get(process.env.REACT_APP_ALL_PRODUCTS)
            .then((res) => {
                const featured = res.data.slice(0, totalFeaturedProducts);
                setFeaturedproducts(featured);
            }).catch((err) => { console.log(err) })
    }, [id])

    return (
        <section className='empty-cart-section cart'>
            {
                cart.length === 0 ? (
                    <div className="row">
                        <div className="cart-content">
                            <h1>Your Cart</h1>
                            <p>...is empty. Let's change that</p>
                            <div className='links'>
                                <button className='btn'><Link to='/shop-suitcases' className='link'>Shop Suitcases</Link></button>
                                <button className='btn'><Link to='/shop-bags' className='link'>Shop Bags</Link></button>
                                <button className='btn'><Link to='/shop-accessories' className='link'>Shop Accessories</Link></button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <section className='full-cart-section'>
                        <div className="container">
                            <div className="row">
                                {cart.map((product) => (
                                    <div key={product.id} className="cart-product">
                                        <div className="img-content">
                                            <img src={formatImageUrl(product.productImage)} alt="cart-img" className='cart-img' />
                                        </div>
                                        <div className="text-content">
                                            <h2>{product.name}</h2>
                                            <p>Color: Navy Blue</p>
                                            <Link to='/personalize'>Personalize It</Link>
                                            <div className='number'>
                                                <button onClick={() => decrement(product)}>-</button>
                                                <span>{product.quantity}</span>
                                                <button onClick={() => increment(product)}>+</button>
                                            </div>
                                            <p>${totalPrice}</p>
                                            <p onClick={() => removeFromCart(product.id)}>x</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="pay">
                                    <div className="price">
                                        <span>Subtotal: </span>
                                        <span>${totalPrice}</span>
                                        <br />
                                        <span>Shipping: </span>
                                        <span>FREE</span>
                                        <br />
                                        <span>Total: </span>
                                        <span>${totalPrice}</span>
                                    </div>
                                    <div className="promo-code">
                                        <span>Promo code</span>
                                        <span className='down-arrow'><IoIosArrowDown /></span>
                                        <span className='up-arrow'><IoIosArrowUp /></span>
                                        <div className="enter-code">
                                            <input type="text" className='promo-code-input' />
                                            <button>APPLY</button>
                                        </div>
                                    </div>
                                    <div className="payment">
                                        <button><FcGoogle />Pay</button>
                                        <button>Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
            <div className="add">
                <div className="add-bags">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="bag-cards">
                            <div className="img-content">
                                <img src={formatImageUrl(product.productImage)} alt="add-bag-img" className='add-bag-img' />
                            </div>
                            <div className="text-content">
                                <h3>{product.name}</h3>
                                <p className='bag-color'>Jet Black</p>
                                <p className='price'>${product.price}</p>
                                <div className="btn">
                                    <button onClick={()=> addToCart(product)}>Add</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
                    }
export default EmptyCart