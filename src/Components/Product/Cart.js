import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { removeFromCart } from '../../Redux/Actions';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const cart = useSelector((state) => state.cartItems);
    const cartItems= cart.cartItems;
    debugger;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleRemoveFromCart = (itemId) => {
      dispatch(removeFromCart(itemId));
    };
    const handleNavigateToServices = () => {
       navigate('/services');
      };
    
  return (
    <>
      <div className="container">
        {cartItems.map((item) => (
            <div >
  <img className="card-img-top" src={item.image} alt={item.name} />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Price: ${parseInt(item.price.split('$')[1]) * item.quantity}</p>
    <p className="card-text">Quantity: {item.quantity}</p>
    <div>
      <button type="button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
    </div>
  </div>
</div>
        ))}
      </div>
      <div className="navigate-button">
        <button type="button" onClick={handleNavigateToServices} style={{marginLeft: '30px'}}>CheckOut</button>
      </div>
    </>
  );
}

export default Cart;
