import styled from "styled-components"
import { Link } from "react-router-dom"


export const ProductsH1 = styled.h1`
margin-top: 160px;

`
export const Bga = styled.div`

background: #FFC8A2;
`
export const ProductsContainer =styled.div`
    /* margin-top: 80px; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`
export const ProductLink = styled(Link)`

`

export const ProductsWrap = styled.div`
         margin-top: 80px; 
       max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-area: none;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    } 

    /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px; */
`
export const ProductWrap = styled.div`
    padding: 2rem;
`
export const ProductIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    
    
    /* height: 20rem;
    background-size: cover;
    background-position: center center; */
`

export const col = styled.div`
    /* background: red; */
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    padding: .5rem;
`
export const ProductCard = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }`
