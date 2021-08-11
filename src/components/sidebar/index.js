import React from 'react'
import {
     SideBarContainer,
     Icons,
     CloseIcon,
     SideBarWrapper,
     SideBtnWrap,
     SideBarMenu,
     SideBarLink,
     SidebarRoute
} from './sidebarelements'

export const Sidebar= ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icons onClick={toggle}>
                <CloseIcon/>
            </Icons>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to="keepfresh" onClick={toggle}>
                        Keep Fresh
                    </SideBarLink>
                    <SideBarLink to="contact" onClick={toggle}>
                        Contact
                    </SideBarLink>
                    <SideBarLink to="cart" onClick={toggle}>
                        Cart
                    </SideBarLink>
                </SideBarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
            
        </SideBarContainer>
    )
}
