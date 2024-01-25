import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useAuth0} from "@auth0/auth0-react";
import './house.css'
import { useState } from "react";
import { useEffect } from "react";
import state from "./homeproduct";
import { deleteHouse, decrementerDay, incrementerDay, viderHouse,viewHouse,hideHouse, fetchHouse } from "./reduxHouse/actions";

export default function House({product,setProduct,detail,view,close,setClose,addtocart}){
   
    const {loginWithRedirect,isAuthenticated } = useAuth0();
    const filterproduct=(product)=>{
        const update = state.HomeProduct.filter((x)=>{
            return x.type===product;
        })
        setProduct(update)
    }
    const AllProducts = ()=>{
        setProduct(state.HomeProduct)
    }
     
    const icons=[{img:'icons/Amazing views.jpg',name:'Amazing views'},
    {img:'icons/Arctic.jpg',name:'Arctic'},
    {img:'icons/Creative spaces.jpg',name:'Creative spaces'},
    {img:'icons/Riad.jpg',name:'Riad'},
    {img:'icons/Tropical.jpg',name:'Tropical'},
    {img:'icons/Trending.jpg',name:'Trending'},
    {img:'icons/Farms.jpg',name:'Farms'},
    {img:'icons/national parks.jpg',name:'national parks'},
]


const myHouses = useSelector(state => state.houses);
const dispatch=useDispatch()
useEffect(() => {
    dispatch(fetchHouse());
}, []);




    return (
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
        <div className="products">
          <div className="filter">
            <div className="house_type">
              <div className="container">
                {
                    icons.map((ic,i)=>{
                        return(
                            <div onClick={()=>filterproduct(ic.name)} className="box" key={i}>
                            <div className="img_box">
                              <img src={ic.img} alt="" />
                            </div>
                            <div className="detail">
                              <p>{ic.name}</p>
                            </div>
                          </div>          
                        )
                    })
                }

              </div>
              <div className="searchbar">
                <div className="searchs">
                  <input type="text" placeholder="Search For Your House   " />
                </div>
                <div className="searchs">
                  <input type="date" />
                </div>
                  <button className="btn"> 
                    <FaSearch />
                  </button>
              </div>
            </div>
          </div>

          <div className="houses">
            <div className="container">
              {myHouses.map((house) => {
                return (
                  <div
                    className="box"
                    key={house.id}
                    onClick={() => view(house)}
                  >
                    <div className="img_box">
                      <img src={house.Img[0]} />
                      <div className="icon">
                        <li onClick={() => addtocart(house)}>
                          <FaRegHeart />
                        </li>
                      </div>
                    </div>
                    <div className="detail">
                      <h5 className="card-title">{house.Title}</h5>
                      <p className="card-text">{house.nights}</p>
                      <a href="#" className="card-link ">
                        <span>MAD{house.Price}</span> night
                      </a>
                      {/* <i className={house.icon}>{house.detail}</i> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}