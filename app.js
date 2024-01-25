import React from "react";
import Nav from "./nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./rout";
import Footer from "./footer";
import ProductDetail from "./productDetail";
import state from "./homeproduct";
import { useState } from "react";
import Navbar1 from "./nav1";

export default function App(){
    const [cart ,setCart]=useState([])
    const [close ,setClose]=useState(false)
    const [detail,setDetail]=useState([])
    const [product,setProduct]=useState(state.HomeProduct)
    const searchbtn=(product)=>{
        const change = ProductDetail.filter((x)=>{
            return x.Cat === product
        })
        setProduct(change)
    }
    const view =(product)=>{
        setDetail([{...product}])
        setClose(true)
    }

    const addtocart=(product)=>{
        const exsit=cart.find((x)=>{
            return x.id ===product.id})    
        if (exsit){
            alert("This Product is already added to cart")
        }
        else{
            setCart([...cart,{...product,qty:1}])
            alert("Product is add to cart")
        }
    }
    console.log(cart)
    return( 
        <>
        <BrowserRouter>         
        {/* <Nav searchbtn={searchbtn} /> */}
        <Navbar1/>
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
        <Footer/> 
        </BrowserRouter>
        </>
    )
}