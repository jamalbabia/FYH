import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import './cart.css'
export default function Cart({cart,setCart}){

    const incqty=(product)=>{
        const exsit = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>{
            return curElm.id ===product.id ?{...exsit,qty:exsit.qty+1}:curElm
        }))
    }

    const decqty=(product)=>{
        const exsit = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>{
            return curElm.id ===product.id ?{...exsit,qty:exsit.qty-1}:curElm
        }))
    }

    const removeproduct=(product)=>{
        const exsit=cart.find((x)=>{
            return x.id===product.id
        })
        if(exsit.qty > 0){
            setCart(cart.filter((x)=>{
                return x.id !==product.id
            }))
        }
    }

    const Totalprice = cart.reduce((price,item)=> price+item.qty*item.Price,0)
    return(
        <div>
            <div className="cartcontainer">
                {cart.length === 0 &&
                <div className="emptycart">
                    <h2 className="empty">Favorit List is Empty</h2>
                    <Link to='/houses' className="emptycartbtn">Book Now</Link>
                </div> 
                }
                <div className="contant">
                    
                    {
                        cart.map((curElm, index) => {
                            return (
                              <div className="cart_item" key={index}>
                                <div className="close">
                                  <button onClick={() => removeproduct(curElm)}>
                                    <IoClose />
                                  </button>
                                </div>

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
                                    <div className="qty">
                                      <button
                                        className="incqty"
                                        onClick={() => incqty(curElm)}
                                      >
                                        +
                                      </button>
                                      <input type="text" value={curElm.qty} />
                                      <button
                                        className="decqty"
                                        onClick={() => decqty(curElm)}
                                      >
                                        -
                                      </button>
                                    </div>
                                    <h4 className="subtotal">
                                      sub total : ${curElm.Price * curElm.qty}{" "}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            );
                        })
                    }
                </div>
                {
                    cart.length > 0 && 
                    <div className="total">
                        <h2 className="totalprice">Total ${Totalprice}</h2>
                        <button className="checkout">Checkout</button>
                    </div>
                }
            </div>
        </div>
    )
}