import React, { Component } from 'react'
import Client from 'shopify-buy'

const shopContext = React.createContext();
const client = Client.buildClient({
    domain: 'v-ogone.myshopify.com',
    storefrontAccessToken: 'cf446d2472e2c4196fcdfb40d4895972'
  });
class ShopProvider extends Component {

    state={
        products: [],
        product: {},
        collections: {},
        checkout1: {},
        isCartOpen:false,
        test: 'testgkuf',
        isHome: true
    }

    componentDidMount(){
        // this.getAllProducts();
        //this.creatCheckout();
        //check if checkout exist
        if(localStorage.checkout){
            this.fetchCheckOut(localStorage.checkout)
        }else {
            this.creatCheckout()
        }

        //if theres no checkout_id in local storage, create new checkout

        //else fetch checkout from shopify
    }

    creatCheckout = async() => {
        const checkout = await client.checkout.create();
        console.log(checkout);
        
        localStorage.setItem("checkout", checkout.id)
        await  this.setState({checkout1 : checkout})
    }
    getAllProducts = async () => {
         await client.product.fetchAll().then((products2)=>{
        
        this.setState({products:products2});
            console.log(products2);
        
        });
            // Do something with the products
            
          }
          
    fethAllCollections = async() => {
        const collectionsArray = await client.collection.fetchAllWithProducts().then((collections)=>{
            console.log(collections);
            console.log(collections.products);
            this.setState({collections: collectionsArray})
        })
    }
    fetchCheckOut = async (checkoutID)=> {
        client.checkout.fetch(checkoutID).then(checkout => {
            this.setState({checkout1 : checkout})
        }).catch(err => console.log(err))

    }
    addItemToCart = async (variantId, quantity) =>{
         const lineItemsToAdd = {
             variantId,
             quantity : parseInt(quantity, 10)
         }
         const checkout = await client.checkout.addLineItems(this.state.checkout1.id, lineItemsToAdd)
         this.setState({checkout1 : checkout})
         console.log(checkout);
     }
    fetchProductWithID = async (id) => {
        const tempProduct = await client.product.fetch(id).then((tempProduct)=>{
            this.setState({product: tempProduct})
        }
        )
        
        return tempProduct
    }
    closeCart = () => {this.setState({isCartOpen: false})}

    openCart = () => {this.setState({isCartOpen: true})}
    setHome = () => {this.setState({isHome: true})}

    setAway = () => {this.setState({isHome: false})}


    render() {
        
        return (
        <shopContext.Provider 
            value={{...this.state,
            fetchAllProducts :this.getAllProducts,
            fetchProductWithID :this.fetchProductWithID,
            closeCart: this.closeCart,
            openCart: this.openCart,
            addItemToCart:this.addItemToCart,
            setAway:this.setAway,
            setHome: this.setHome
            
        
        }}>
                {this.props.children}
            </shopContext.Provider>
        )
    }
}
const shopConsumer = shopContext.Consumer
export {shopConsumer, shopContext}
export default ShopProvider