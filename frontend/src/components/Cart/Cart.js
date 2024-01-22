import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../Store/CartContext';
import { CartItem } from './CartItem';
import './Cart.css';


export const Cart = (props) => {
    const CartCtx = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Calculate the total cart price whenever cart items change
        const calculateTotalPrice = () => {
            let totalPrice = 0;
            CartCtx.cartItems.forEach((item) => {
                totalPrice += item.productPrice * item.qty;
            });
            setTotalPrice(totalPrice);
        };

        calculateTotalPrice();
    }, [CartCtx.cartItems]);

    const handleRemove = () => {
        CartCtx.setCartItems([]);
    };
    
   

    return (
        <div className="container">
            <h2>Shopping Cart</h2>
            {CartCtx.cartItems.length ? (
                <div className="cart-box m-4">
                    <div>
                        {CartCtx.cartItems.map((item, index) => (
                            <CartItem
                                productName={item.productName}
                                productPrice={item.productPrice}
                                productImage={item.productImage}
                                qty={item.qty}
                                key={index}
                            />
                        ))}
                    </div>
                    <div>
                        <p className='totalprice'> Total  Price:</p><p className='calculateprice' > Rs.{totalPrice.toFixed(2)}</p>
                        <button className="btn btn-warning" onClick={handleRemove}>
                            Empty the Cart
                        </button>
                    </div>
                    <br />
                    <div>
                        <button className="btn btn-success" >
                            Proceed
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="alert alert-success">
                        Nothing in the cart!..<br />
                    </div>
                    <Link to={'/'}>
                        <button className="btn btn-outline-secondary btn-sm">Add Now</button>
                    </Link>
                </div>
            )}
        </div>
    );
};
