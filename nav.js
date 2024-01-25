import {FaTruckMoving} from 'react-icons/fa'
import { AiOutlineHeart } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CgLogIn ,CgLogOut } from "react-icons/cg";
import { useAuth0} from "@auth0/auth0-react";


import { Link } from 'react-router-dom';

import "./nav.css"
import { useState } from 'react';
export default function Nav({searchbtn}){
    const [search,setSearch]=useState()
    const { loginWithRedirect ,logout,user, isAuthenticated } = useAuth0();
    return(
        <div>
        <div className="free">
            <div className='icon'>
            <FaTruckMoving/>
            </div> 
            <p>FREE Shiping when shopping up to $1000</p>
        </div>
        <div className='main_header'>
            <div className='container'>
                <div className='logo'>
                    <img src="/logo192.png" alt="logo" />
                </div>
                <div className='search_box'>
                    <input type='text' onChange={(ev)=>setSearch(ev.target.value
                        )} value={search} placeholder='Search Your Product Name ' autoComplete=''/>
                    <button onClick={()=>searchbtn(search)}>Search</button>
                </div>
                <div className='icon'>
                    {
                        isAuthenticated &&(
                            <div className='account'>
                            <div className='user_icon'>
    
                                <CiUser />
                            </div>
                            <span>Heloo, {user.name}</span>
                            {/* <img src={user.picture}/> */}
                        </div>    
                        )
                    }
                    <div className='second_icon'>
                        <a href='/' className='link'><AiOutlineHeart/></a>
                        <a href='cart' className='link'><IoBagCheckOutline/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='header'>
            <div className='container'>
                <div className='nav'>
                <ul>
                    <li>
                        <a href='/' className='link'>Home</a>
                    </li>
                    <li>
                        <Link to='product' className='link'>Product</Link>
                    </li>
                    <li>
                        <Link to='/about' className='link'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='link'>Contact</Link>
                    </li>
                </ul>
                </div>
                <div className='auth'>
                    {
                        isAuthenticated?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CgLogOut /></button>                    
                        :
                        <button onClick={() => loginWithRedirect()}><CgLogIn /></button>
                    }
                </div>
            </div>
        </div>
        </div>
    )
}