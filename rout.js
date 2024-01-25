import React from "react";
import { Route, Routes } from "react-router-dom";
import Home1 from "./Home1";
import Product from "./product";
import House from "./House";
import Cart from "./cart";
import Contact from "./contact";
import AddHouse from "./addHouse";
export default function Rout({product,setProduct,detail,view,close,setClose,cart,setCart,addtocart}){
    return(
            <Routes>
                {/* <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/> */}
                <Route path="/" element={<Home1 detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
            <Route path="/houses" element={<House product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}/>
            <Route path="/addhouse" element={<AddHouse/>}/>
            <Route path="/contact" element={<Contact/>}/>
            </Routes>
    )
}