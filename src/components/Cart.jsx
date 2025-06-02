import React from 'react';
import CartItem from './CartItem';
const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default Cart;

// This component displays the shopping cart, showing all