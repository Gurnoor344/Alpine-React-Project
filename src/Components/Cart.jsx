import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import "./Cart.css";

const Cart = () => {
    const [cart2, setCart] = useState([]);
    const [checkout, setCheckout] = useState(false);
    const TAX_RATE = 100.00;

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log("Saved Cart :- ", savedCart);

        const logged = localStorage.getItem('logged');
        if (!logged) {
          setCart([]);
          return;
        }
        setCart(savedCart);
    }, []);

    const handleQuantityChange = (e, itemName) => {
        const newQuantity = Number(e.target.value);

        if (newQuantity < 1) {
            alert('Quantity must be at least 1');
            return;
        }

        const updatedCart = cart2.map(item =>
            item.name === itemName ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleDeleteItem = (itemName) => {
        const updatedCart = cart2.filter(item => item.name !== itemName);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateSubtotal = () => {
        return cart2.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal + TAX_RATE;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (cart2.length === 0) {
          alert('Cart is empty');
          return;
      }
      if (checkout) {
          alert('Checkout already done');
          return;
      }
      setCheckout(true);
      localStorage.removeItem('cart');
      setCart([]);
      alert('Checkout successful');
    }

    return (
        <div className="small-container cart-page">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart2.map(item => (
                        <CartItem
                            key={item.name}
                            item={item}
                            onQuantityChange={handleQuantityChange}
                            onDelete={handleDeleteItem}
                        />
                    ))}
                </tbody>
            </table>

            <div className="total-price">
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>Rs {calculateSubtotal().toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>Rs {TAX_RATE.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>Rs {calculateTotal().toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{display: "flex", justifyContent:"center", width: "100%"}}>
                  <button type='submit' className='submitbtn' onClick={(e) => handleSubmit(e)}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
