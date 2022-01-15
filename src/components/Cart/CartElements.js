import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import {FaBorderNone, FaTimes} from 'react-icons/fa'

 export const CartContainer =styled.div`
    margin-top: 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`
export const AboutContainer = styled.div`
    color: #fff;
    background: ${({lightBg})=> (lightBg ? '#FFC8A2' : '#FFC8A2')};
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`
export const Img = styled.img`
    max-width: 50%;
    margin: 0 0 10px 0;
    padding-right: 0;
    max-height: 50%;
`
export const CartWrap = styled.div`
      margin-top: 80px; 
       max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr ;
    grid-area: none;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    padding-top: 20px;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    } 


`
export const Bga = styled.div`

background: #FFC8A2;
`

export const CartH1 = styled.h1`



`
export const Row = styled.div`
display: flex;


`
export const Col = styled.div`
flex: ${(props)=> props.size};
${(props)=> props.collapse && media[props.collapse](`
    display: none; 

`
    
)};


`;

const media = {
    xs: (styles) => `
    @media only screen and (max-width:480px) {
        ${styles}
    }
    
    `
}


export const ItemWrap = styled.div`



`

export const CloseIcon = styled(FaTimes) `

    color: #fff;

`

export const Icons = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

 
`

export const CartSideBarWrapper = styled.div `
    color: #fff;

`
export const CartSideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;

    }

`

export const CartSideBtnWrap = styled.div `
    display: flex;
    justify-content: center;
`

export const CartSidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const CartSideBarMenu = styled.ul `
    display: grid;
    grid-template-columns : 1fr;
    grid-template-rows:  repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){

        grid-template-rows: repeat(6 , 60px);
    }

`