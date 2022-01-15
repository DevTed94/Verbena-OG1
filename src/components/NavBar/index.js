import React, {useState, useEffect} from 'react'
import {IconContext} from 'react-icons/lib'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { Nav,
        NavbarContainer, 
        NavLogo, 
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavLinkR,
        NavBtn,
        NavBtnLink } from './NavBarElements';
import { shopContext } from '../shopContext';

export const Navbar = ({toggle},{home}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const isHome = home;
    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome =() => {
        scroll.scrollToTop();
    }
    return (
       <>
       <IconContext.Provider value={{color: ''}}>
        <Nav scrollNav ={scrollNav}>
           <NavbarContainer>
            <NavLogo to ="/" onClick={toggleHome}>OG</NavLogo>  
            <MobileIcon onClick={toggle}>
                <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='keepfresh'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                            KeepFresh
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                            Contact
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinkR 
                         to='/Cart'
                        //onClick={cartTo} smooth={true} duration={500} spy={true}
                        exact='true'
                        offset={-80}>
                            Cart
                        </NavLinkR>
                    </NavItem>
                    </NavMenu> 
                    <NavBtn>

                        <NavBtnLink to ="/signin">Sign In</NavBtnLink>
                    </NavBtn>
            </NavbarContainer> 
        </Nav>
        </IconContext.Provider>
       </>
       
    )
}

export default Navbar;