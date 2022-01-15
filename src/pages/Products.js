import React , {useState} from 'react'
import ProductsPage from '../components/Products'
import ScrollToTop from '../components/SignIn/ScrollToTop'
import Navbar from '../components/NavBar'
import { Sidebar } from '../components/sidebar'



const Products = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        {/* <Sidebar isOpen ={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/> */}
        <ScrollToTop/>
        <ProductsPage></ProductsPage>
       
        </>
    )
}

export default Products
