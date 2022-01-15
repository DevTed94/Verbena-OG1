import React, {useContext, useState} from 'react'
import { shopContext } from '../shopContext'
import {CartContainer, CartH1, Bga, Row, CartWrap, ImgWrap,Img, Col }from './CartElements'
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { IconContext } from 'react-icons';

// import { Icon } from '../SignIn/SigninElements';

export const  CartBar = () => {

    const { checkout1} = useContext(shopContext)
    console.log(checkout1);
    var subTot = checkout1.paymentDueV2;
    // const [sidebar, setSidebar] = useState(false);

    // const showSidebar = () => setSidebar(!sidebar);

    return (
        

        <Bga>
        <CartContainer>
            <CartH1>Produce Bag</CartH1>
                <CartWrap>



                    <div>
                            {checkout1.lineItems && checkout1.lineItems.map(item => (
                                <Row key={item.id}>
                                    
                                    <Col size={1}>
                                        <div>
                                            <ImgWrap>
                                            <Img src={item.variant.image.src}></Img>
                                            </ImgWrap>
                                        </div>
                                    </Col>
                                    <Col size={2}  >
                                        <div>{item.title}{item.vendor}</div>
                                        
                                    </Col>
                                    <Col size={1}  >
                                        
                                        <div>{item.variant.price}</div>
                                        
                                    </Col>
                                    
                                    
                                    
                                </Row>


                            ))}
                    
                        {/* {products.map( name => (
                            <div key={name.id}>
                             <ProductLink to={`/Product/${name.id}`}   >
                               <ProductWrap>
                                 <ProductCard>
                                <ProductIcon src={name.images[0].src}/>
                                <label>{name.title}</label>
                                <label>{name.variants[0].price}</label>
                                </ProductCard>  
                               </ProductWrap>  
                             </ProductLink>
                            </div>
                        ))}
                        */}
                    </div>
                    <div>{"$"+subTot}</div>
                </CartWrap> </CartContainer>
                 </Bga>
    /* 
        </ProductsContainer> 
       


            ÷ */
            /* <CartSideBarWrapper>
                <CartSideBarMenu    >




                </CartSideBarMenu>
                    {checkout.lineItems && checkout.lineItems.map(item => {
                        <row key = {item.id}>
                            {item.name}
                            {/* <Col>
                                            <Div bgImg={item.variant.image.src} bgSize="cover" bgPos="center" h="5rem" w="4rem"/>
                                        </Col>
                                        <Col>
                                            <Text>{item.title}</Text>
                                            <Text>{item.variant.title}</Text>
                                            <Text>{item.quantity}</Text>
                                        </Col>
                                        <Col>
                                            <Text>{item.variant.price}</Text>
        //                                 </Col> 
        

        //                 </row>
        //             })}


        //         </CartSideBarWrapper> 


            </CartSideBarContainer>

        //     <CartSideBtnWrap>
        //         <CartSideBarLink >Checkout</CartSideBarLink>
        //     </CartSideBtnWrap>



        //    <div className = "cart">
        //     <Link to="#" className = 'menu-bars'>
        //         <FaIcons.FaShoppingCart/>
        //         ckgf

        //     </Link>

        //    </div>
        </>*/
    )
}

export default CartBar
