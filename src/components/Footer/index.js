import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FooterContainer,
        FooterWrap,
        FooterLinkContainer,
        FooterLinkWrap,
        FooterLinkItem,
        FooterLinkTitle,
        FooterLink, SocialIconLink,
        SocialLogo, SocialMedia,
        SocialMediaWrap, WebsiteRights,
        SocialIcons
 } from './FooterElements'
 import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome =() => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrap>
                        <FooterLinkItem>
                            <FooterLinkTitle>About OG</FooterLinkTitle>
                                
                                <FooterLink to="/signin">Link1</FooterLink>
                                <FooterLink to="/signin">Link2</FooterLink>
                                <FooterLink to="/signin">Link4</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>About OG</FooterLinkTitle>
                                
                                <FooterLink to="/signin">Link1</FooterLink>
                                <FooterLink to="/signin">Link2</FooterLink>
                                <FooterLink to="/signin">Link4</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>About OG</FooterLinkTitle>
                                
                                <FooterLink to="/signin">Link1</FooterLink>
                                <FooterLink to="/signin">Link2</FooterLink>
                                <FooterLink to="/signin">Link4</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>About OG</FooterLinkTitle>
                                
                                <FooterLink to="/signin">Link1</FooterLink>
                                <FooterLink to="/signin">Link2</FooterLink>
                                <FooterLink to="/signin">Link4</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            
                        </FooterLinkItem>
                    </FooterLinkWrap>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/"onClick={toggleHome}>
                            
                            OG
                        </SocialLogo>
                        <WebsiteRights>OG © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook"></SocialIconLink>
                                <FaFacebook/>
                            <SocialIconLink href="//www.instagram.com/orangesgloabal" target="_blank"
                            aria-label="Instagram"></SocialIconLink>
                                <FaInstagram/>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter"></SocialIconLink>
                                <FaTwitter/>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
