import { useState } from "react";
import "./App.css";
import Product from "./Product";
import Cart from "./Cart";
function App() {
    const [product, setProduct] = useState([
        { id: 1, name: "Product-1", price: 100, qty: 0 },

        { id: 2, name: "Product-2", price: 200, qty: 0 },

        { id: 3, name: "Product-3", price: 300, qty: 0 },
    ]);
    const [total, setTotal] = useState(0);
    const increaseQty = (id) => {
        setProduct(
            product.map((elem) => {
                if (elem.id == id) {
                    elem.qty += 1;
                }
                return elem;
            })
        );
        setTotal(
            product.reduce((acc, val) => {
                return acc + val.qty * val.price;
            }, 0)
        );
    };
    const decreaseQty = (id) => {
        setProduct(
            product.map((elem) => {
                if (elem.id == id) {
                    elem.qty -= 1;
                }
                return elem;
            })
        );
        setTotal(
            product.reduce((acc, val) => {
                return acc + val.qty * val.price;
            }, 0)
        );
    };
    const tatalval = (val) => {
        setTotal(val);
    };
    return (
        <div className="App">
            <div className="container">
                <div className="left">
                    <div className="prod-list">
                        <h1>Products</h1>
                        {product.map((val) => {
                            return (
                                <Product
                                    id={val.id}
                                    name={val.name}
                                    price={val.price}
                                    qty={val.qty}
                                    increaseProductQty={increaseQty}
                                    decreaseProductQty={decreaseQty}
                                    handleTotal={tatalval}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h1>Cart</h1>
                        {product.map((val) => {
                            return (
                                <Cart
                                    id={val.id}
                                    name={val.name}
                                    price={val.price}
                                    qty={val.qty}
                                    total={total}
                                />
                            );
                        })}
                    </div>
                    <div>
                        <h2> Total :- {total} </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
