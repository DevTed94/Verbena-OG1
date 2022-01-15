import React, {useContext, useEffect} from 'react'
import Footer from '../Footer'
import { shopContext } from '../shopContext'
import { ProductsContainer,
        ProductsH1,
        ProductsWrap,
        ProductLink,            
        ProductWrap,
        ProductIcon,
        ProductCard,
        Bga
} from './ProductsElements' 


const ProductsPage = () => {
    const {fetchAllProducts, products}  = useContext(shopContext)

    // const names = ['yo','ho', 'bo', 'to', 'foo', 'heebies', 'fjydjytd', 'jrdjyrtdykd', 'kytdtkf']

    useEffect(() => {
        fetchAllProducts()
        return () => {
            
        }
    }, [fetchAllProducts])






    if(!products) return <div>...loading</div>
    return (
        <>
        <Bga>
        <ProductsContainer>
            <ProductsH1>We Have Products</ProductsH1>
                <ProductsWrap>
                    
                        {products.map( name => (
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
                    

                </ProductsWrap>

        </ProductsContainer></Bga>
            <Footer/>
        </>
    )
}

export default ProductsPage
