import { useState } from "react";
import "./product.css";
const Product = (props) => {
    const clickminus = () => {
        props.decreaseProductQty(props.id);
    };
    const clickPlus = () => {
        props.increaseProductQty(props.id);
    };
    return (
        <div className="product-container">
            <div className="prod-name">
                <h2>{props.name}</h2>
            </div>
            <div className="prod-price">
                <h2>{props.price}</h2>
            </div>
            <div className="add-product">
                <div className="add-btn">
                    <button onClick={clickminus}>-</button>
                    {props.qty}
                    <button onClick={clickPlus}>+</button>
                </div>
            </div>
        </div>
    );
};
export default Product;
