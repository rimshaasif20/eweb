import React, { useState } from 'react';
import Cart from './Cart';
import './CardButton.css'
function CartButton() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <button type="button" onClick={toggleCart}>
        Cart 
      </button>
      {showCart && (
        <div className="cart-popup">
          <div className="cart-popup-content">
            <Cart />
            <button type="button" onClick={toggleCart}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartButton;
