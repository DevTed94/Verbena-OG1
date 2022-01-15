import React , {useEffect, useContext}from 'react'
import { useParams } from 'react-router-dom'
import {  Column1, Column2, AboutContainer, InfoWrapper, InfoRow, TextWrapper, ImgWrap, Img, Heading, TopLine, Subtitle, BtnWrap } from './ProductElements';
import { shopContext } from '../shopContext';
import { Button2 } from '../ButtonElements';






const ProductPage = () => {
    const {fetchProductWithID, addItemToCart,  product} = useContext(shopContext)
  let {id} = useParams();
   
    // console.log(test)

    useEffect(() => {
        fetchProductWithID(id)
        return () => 
            {
                
            }
    }, [fetchProductWithID, id])


   
  if(!product.title) return <div>...loading</div> 
    return (
        <AboutContainer>
            <InfoWrapper>
                <InfoRow imgStart ={false} >

                   <Column1>
                   <TextWrapper>
                       <TopLine>Wake up and smell the oranges!{product.variants[0].id}</TopLine>
                    <Heading>{product.title}</Heading>
                     {/* <ProductIcon src={product.images[0].src}/>  */}
                      
                    <Subtitle> ${product.variants[0].price} </Subtitle> 
                    <BtnWrap>
                        <Button2
                            onClick = {()=> addItemToCart(product.variants[0].id, 1) }
                        >
                            Add To Cart
                        </Button2>

                    </BtnWrap>
                   </TextWrapper>
                   
                     </Column1>
                     <Column2>
                     <ImgWrap>
                     <Img src={product.images[0].src} alt ={product.title}/>
                     </ImgWrap>
                    {/* <ProductIcon src={product.images[0].src}/> */}
                    </Column2> 
                </InfoRow>
                    
                    
                     
                    
            </InfoWrapper>
          

        </AboutContainer>
        
    )
}

export default ProductPage
