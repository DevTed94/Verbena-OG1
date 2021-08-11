import React, {useState} from 'react'
import  {Sidebar}  from '../components/sidebar'
import {Navbar} from '../components/NavBar'
import { Orange } from '../components/Orange'
import { AboutSection } from '../components/AboutSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/AboutSection/data'
import { Services } from '../components/Services'
import Footer from '../components/Footer'

export const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }


    return (
       <>
       <Sidebar isOpen ={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle}/>
       <Orange />
       <AboutSection {...homeObjOne}/>
       <AboutSection {...homeObjTwo}/>
       <Services/>
       <AboutSection {...homeObjThree}/>
       <Footer/>
       </>
    );
};
export default Home;