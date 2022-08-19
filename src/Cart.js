import { useState } from "react";
import "./cart.css";
const Cart = (props) => {
    return (
        <div className="cart">
            <div className="cart-container">
                <div className="cart-name">
                    <h2>{props.name}</h2>
                </div>
                <div className="cart-price">
                    <h2>
                        {props.price} X{props.qty}
                    </h2>
                </div>
            </div>
            {/* <div>
                <h2> Total - {props.total} </h2>
            </div> */}
        </div>
    );
};
export default Cart;
