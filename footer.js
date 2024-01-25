import React from "react";
import"./footer.css"
import { FaFacebookF  } from "react-icons/fa";
import { FaInstagram   } from "react-icons/fa";
import { BsTwitterX   } from "react-icons/bs";
import { FaYoutube   } from "react-icons/fa";

export default function Footer(){

    return(
        <div>
            <div className="footer">
                <div className="container">
                    <div className="about">
                        <div className="logo">
                            <img src="images/tt.jpg" alt="logo"/>
                        </div>
                        <div className="detail">
                            <p>We are a team of designers and developers  that create high quality WordPress</p>
                            <div className="icon">
                                <li><FaFacebookF  /></li>
                                <li><FaInstagram   /></li>
                                <li><BsTwitterX   /></li>
                                <li><FaYoutube   /></li>
                            </div>
                        </div>
                    </div>
                    <div className="account">
                        <h3>My Account</h3>
                        <ul>
                            <li>Account</li>
                            <li>Order</li>
                            <li>Cart</li>
                            <li>Shopping</li>
                            <li>Return</li>
                        </ul>
                    </div>
                    <div className="page">
                        <h3>Pages</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Terma & Condition</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}