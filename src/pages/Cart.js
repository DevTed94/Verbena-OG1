import React from 'react'
import Footer from '../components/Footer'
import CartBar from '../components/Cart'
import ScrollToTop from '../components/SignIn/ScrollToTop'

export const Cart = () => {
    
    return (
       <>
       <ScrollToTop></ScrollToTop>
        <CartBar></CartBar>
        <Footer/>
       </>
    )
}

export default Cart
