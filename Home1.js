import React, { useEffect,useState } from "react";  
import './Home1.css'
import { useDispatch, useSelector } from "react-redux";
import {  Link } from "react-router-dom";
import { FaArrowRight ,FaMoneyCheckDollar } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { AiOutlineSafety   } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { deleteHouse, decrementerDay, incrementerDay, viderHouse,viewHouse,hideHouse, fetchHouse } from "./reduxHouse/actions";

import CountUp from 'react-countup';



export default function Home1({detail,view,close,setClose,addtocart}){
    const city=[{img:'city/1.jpg',name:'Casablanca'},
                {img:'city/2.jpg',name:'Rabat'},
                {img:'city/3.jpg',name:'Agadir'},
                {img:'city/4.jpg',name:'Tanger'},
                {img:'city/5.jpg',name:'Marrakech'},
                {img:'city/6.jpg',name:'Dakhla'},
                {img:'city/7.jpg',name:'Laayoune'},
                {img:'city/8.jpg',name:'chefchaouen'},
            ]
            const myHouses = useSelector(state => state.houses);
            const dispatch=useDispatch()
            useEffect(() => {
                dispatch(fetchHouse());
            }, []);
        
    return(
        <div>
        {close ? (
          <div className="product_detail">
            <div className="container">
              <button className="closebtn" onClick={() => setClose(false)}>
                <IoClose />
              </button>
              {detail.map((curElm) => {
                return (
                  <div className="productbox">
                    <div className="img_box">
                      <img src={curElm.Img[0]} alt={curElm.Title} />
                    </div>
                    <div className="detail">
                        <div className="row">
                            <h4>{curElm.nights}</h4>
                            <span>${curElm.Price}</span>
                        </div>
                            <h2>{curElm.Title}</h2>
                        <div className="info">
                            <li>6 guests</li>
                            <li>3 bedrooms</li>
                            <li>5 beds</li>
                            <li>2 baths</li>
                        </div>
                        <div className="thumb">
                            {curElm.Img.map(img=>(
                                <img src={img} alt=""/>
                            ))}
                        </div>
                      <div className="btns">
                        <button onClick={() => addtocart(curElm)}>
                          Add To Favorit
                        </button>
                        <button onClick={() => addtocart(curElm)}>
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

<section className="home">
        <div className="ba">
            <img src="images/bg.png" alt=""/>
        </div>
        <div className="inb">
            <img src="images/home_internet_slider_slide1_overlay.png" alt=""/>
        </div>
        <div className="left">
            <h1>Book <span>your tourist house </span>And you are comfortable</h1>
            <div className="stats">
                    <div className="stat">
                        <span>
                            <CountUp start={88000} end={90000} duration={4}/>
                            <span className="plus">+</span>
                        </span>
                        <span className="tt">Reserved Houses</span>
                    </div>
                    <div className="stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span className="plus">+</span>
                        </span>
                        <span className="tt">Happy Customers</span>
                    </div>
                    <div className="stat">
                        <span>
                            <CountUp start={0}  end={28} duration={8} />
                            <span className="plus">+</span>
                        </span>
                        <span className="tt">Various countries</span>
                    </div>
                 </div>
            <button>Book Now</button>
        </div>
    </section>


    <div className="product_type">
                <div className="container">
                        
                    {
                        city.map((c,i)=>{
                            return(
                        <div className="box">
                            <div className="img_box">
                                <img src={c.img} alt=""/>
                            </div>
                            <div className="detail">
                                <p>{c.name}</p>
                            </div>
                        </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="box">
                        <div className="icon ">
                        <FaMoneyCheckDollar  />
                        </div>
                        <div className="detail">
                            <h3>Ease of Booking and Payment</h3>
                            <p>making planning and reservation convenient and straightforward</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon ">
                            <BiDollar />
                        </div>
                        <div className="detail">
                            <h3>Varied Pricing</h3>
                            <p>economical choices such as shared rooms or small apartments.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon ">
                            <HiOutlineReceiptPercent />
                        </div>
                        <div className="detail">
                            <h3>Unique Experience</h3>
                            <p>opportunity to immerse themselves in the culture of the places they visit and live like locals</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon ">
                            <AiOutlineSafety />
                        </div>
                        <div className="detail">
                            <h3>Safety Assurance</h3>
                            <p>ensuring a secure and reliable experience for users</p>
                        </div>
                    </div>
                    {/* <div className="box">
                        <div className="icon ">
                            <FaHeadphones />
                        </div>
                        <div className="detail">
                            <h3>Diverse Accommodations</h3>
                            <p>Every Time Call Support</p>
                        </div>
                    </div> */}
                    <div className="box">
                        <div className="icon ">
                            < VscFeedback />
                        </div>
                        <div className="detail">
                            <h3>Community Interaction</h3>
                            <p>provide reviews and feedback</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="house">
                <h2>Trending</h2>
                <div className="container">
                {myHouses.map((house) => {
                    return(
                <div className='box'key={house.id} onClick={()=>view(house)}>
                    <div className='img_box'>
                        <img src={house.Img[0]} />
                        <div className="icon">
                            <li onClick={()=>addtocart(house)}><FaRegHeart/></li>
                        </div>
                    </div>
                    <div className="detail">
                        <h5 className="card-title">{house.Title}</h5>
                        <p className="card-text">
                            {house.nights}
                        </p>
                        <a href="#" className="card-link ">
                            <span>MAD{house.Price}</span> night
                        </a>
                        {/* <i className={house.icon}>{house.detail}</i> */}
                    </div>
                </div>
            )})}
                </div>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="img_box">
                        <img src="images/t.jpg"/>
                    </div>
                    <div className="detail">
                        <h3>Do You have questions?</h3>
                        <h4>Get answers from an experienced Superhost near you.</h4>
                        <Link to='/product' className="link">Match with a Superhost <FaArrowRight/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}