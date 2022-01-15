import React from 'react'
import Footer from '../components/Footer'
import ProductPage from '../components/Product'
import ScrollToTop from '../components/SignIn/ScrollToTop'

export const Product = () => {
    
    return (
       <>
       <ScrollToTop></ScrollToTop>
        <ProductPage></ProductPage>
        <Footer/>
       </>
    )
}

export default Product
