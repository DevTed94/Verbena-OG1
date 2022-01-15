import React , {useContext, useState} from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./pages";
import './App.css';
import SigninPage from "./pages/signin";
import ShopProvider, { shopContext } from "./components/shopContext";
import Products from "./pages/Products";
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import { Sidebar } from "./components/sidebar";

import Navbar from "./components/NavBar";
function App() {
  
  const[isOpen, setIsOpen] = useState(false)

  // const {isHome} = useContext(shopContext)
  const toggle = () =>{
      setIsOpen(!isOpen)
  }


  return (
<ShopProvider>
      
      
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      {/* <CartBar /> */}
      <Navbar toggle={toggle}  />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={SigninPage} exact/>
        <Route path="/Products" component={Products} exact></Route>
        <Route path="/Product/:id" component={Product} exact></Route>
        <Route path="/Cart" component={Cart} exact></Route>
        {/* <Route path="/cart" component={CartBar} exact></Route> */}
      </Switch>
      

    </Router>
    </ShopProvider>
  );
}

export default App;
