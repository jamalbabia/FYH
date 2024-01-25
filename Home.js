import React from "react";
import './Home.css'
import {  Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { TbTruckLoading } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { FaHeadphones } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


import HomeProduct from "./homeproduct";


export default function Home({detail,view,close,setClose,addtocart}){
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
                                    <h3>{curElm.Price}</h3>
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div> : null
        }

            <div className="top_banner">
                <div className="container">
                    <div className="detail">
                        <h2>The Best Note Book Collection 2023</h2>
                            <Link to='/product' className="link">Shop Now <FaArrowRight /></Link>
                    </div>
                    <div className="img_box">
                        <img src="images/tt.jpg" alt="sliderimg"/>
                    </div>
                </div>
            </div>
            <div className="product_type">
                <div className="container">
                <div className="box">
                        <div className="img_box">
                            <img src="images/HUA6901443442959.jpg" alt="macbook"/>
                        </div>
                        <div className="detail">
                            <p>23products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="images/tt.jpg" alt="macbook"/>
                        </div>
                        <div className="detail">
                            <p>23products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="images/HUA6901443442959.jpg" alt="macbook"/>
                        </div>
                        <div className="detail">
                            <p>23products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="images/tt.jpg" alt="macbook"/>
                        </div>
                        <div className="detail">
                            <p>23products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="images/HUA6901443442959.jpg" alt="macbook"/>
                        </div>
                        <div className="detail">
                            <p>23products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="images/tt.jpg" alt="macbook"/>
                        </div>
                        <div className="detail">
                            <p>23products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="images/HUA6901443442959.jpg" alt="macbook"/>
                        </div>
                        <div className="detail">
                            <p>23products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="images/tt.jpg" alt="macbook"/>
                        </div>
                        <div className="detail">
                            <p>23products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="box">
                        <div className="icon ">
                        <TbTruckLoading />
                        </div>
                        <div className="detail">
                            <h3>Free Shipping</h3>
                            <p>Oder above $1000</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon ">
                            <BiDollar />
                        </div>
                        <div className="detail">
                            <h3>Return & Refund</h3>
                            <p>Money Back Gaurenty</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon ">
                            <HiOutlineReceiptPercent />
                        </div>
                        <div className="detail">
                            <h3>Member Discount</h3>
                            <p>On every Oder</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon ">
                            <FaHeadphones />
                        </div>
                        <div className="detail">
                            <h3>Customer Support</h3>
                            <p>Every Time Call Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <h2>Top Products</h2>
                <div className="container">
                    {
                        HomeProduct.map((curElm)=>{
                            return(
                                    <div className="box" key={curElm.id}>
                                        <div className="img_box">
                                            <img src='images/tt.jpg' alt={curElm.Title}/>
                                            <div className="icon">
                                                <li onClick={()=>addtocart(curElm)}><IoCartOutline/></li>
                                                <li onClick={()=>view(curElm)}><FaRegEye/></li>
                                                <li><FaRegHeart/></li>
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <p>{curElm.Cat}</p>
                                            <h3>{curElm.Title}</h3>
                                            <h4>{curElm.Price}</h4>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="detail">
                        <h4>LATEST TECHNOLOGY ADDED</h4>
                        <h3>Apple iPad 10.2 9th Gen - 2021</h3>
                        <p> $ 986</p>
                        <Link to='/product' className="link">Shop Now <FaArrowRight/></Link>
                    </div>
                    <div className="img_box">
                        <img src="images/pic.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}