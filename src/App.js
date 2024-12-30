import React from 'react'
import Header from './components/Header'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/Login'
import Sign from './pages/Sign';
import ChangePassword from './pages/ChangePassword';
import ResetPassword from './pages/ResetPassword';
import Account from './pages/Account';
import Product from './pages/Product'
import Cart from './pages/Cart'
import ShopAll from './pages/ShopAll'
import OTP from './pages/OTP';

import { CartProvider  } from './utils/CartContext'
import { AuthContext } from './utils/AuthContext'

const App = () => {
  return (
    <CartProvider>
      <AuthContext>
    <>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/account' element={<Account/>}></Route>
      <Route path='/ResetPassword' element={<ResetPassword/>}></Route>
      <Route path='/ChangePassword' element={<ChangePassword/>}></Route>
      <Route path='/OTP' element={<OTP/>}></Route>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/shopall" element={<ShopAll/>}/>
      </Routes>
    <Footer/>
    </>
      </AuthContext>
    </CartProvider>
  )
}

export default App