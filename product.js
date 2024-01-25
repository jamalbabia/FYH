import React from "react";
import ProductDetail from "./productDetail";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useAuth0} from "@auth0/auth0-react";
import './product.css'


export default function Product({product,setProduct,detail,view,close,setClose,addtocart}){
   
    const {loginWithRedirect,isAuthenticated } = useAuth0();
    const filterproduct=(product)=>{
        const update = ProductDetail.filter((x)=>{
            return x.Cat===product;
        })
        setProduct(update)
    }
    const AllProducts = ()=>{
        setProduct(ProductDetail)
    }
    return(
    <div>
            {
            close ? 
        <div className="product_detail">
            <div className="container">
                <button className="closebtn" onClick={()=>setClose(false)}><IoClose/></button>
                {
                    detail.map((curElm)=>{
                        return(
                            <div className="productbox">
                                <div className="img_box">
                                    <img src={curElm.Img} alt={curElm.Title}/>
                                </div>
                                <div className="detail">
                                    <h4>{curElm.Cat}</h4>
                                    <h2>{curElm.Title}</h2>
                                    <p>A Screen Everyone Will Love: Whether your family is st</p>
                                    <h3>${curElm.Price}</h3>
                                    <button onClick={()=>addtocart(curElm)}>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div> : null
        }
        <div className="products">
            <p>Home . products</p>
            <h3># Products</h3>
            <div className="container">
                <div className="filter">
                    <div className="categories">
                        <h3>Categories</h3>
                        <ul>
                            <li onClick={()=>AllProducts()}>All Products</li>
                            <li onClick={()=>filterproduct("Tablet")}>Tablet</li>
                            <li onClick={()=>filterproduct("Smart Watch")}>Smart Watch</li>
                            <li onClick={()=>filterproduct("Headphone")}>Headphone</li>
                            <li onClick={()=>filterproduct("Camera")}>Camera</li>
                            <li onClick={()=>filterproduct("Gaming")}>Gaming</li>
                        </ul>
                    </div>
                    </div>

                    <div className="productbox">
                        <div className="contant">
                            {
                                product.map((curElm)=>{
                                    return(
                                        <div className="box" key={curElm.id}>
                                            <div className="img_box">
                                                <img src={curElm.Img} alt={curElm.Title}/>
                                                <div className="icon">
                                                    {
                                                        isAuthenticated ? 
                                                        <li onClick={()=>addtocart(curElm)}><IoCartOutline/></li>
                                                        :
                                                        <li onClick={()=>loginWithRedirect()}><IoCartOutline/></li>
                                                    }
                                                    <li onClick={()=>view(curElm)}><FaRegEye/></li>
                                                    <li><FaRegHeart/></li>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <p>{curElm.Cat}</p>
                                                <h3>{curElm.Title}</h3>
                                                <h4>{curElm.Price}</h4>
                                            </div>
                                        </div>                                    )
                                })
                            }
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}