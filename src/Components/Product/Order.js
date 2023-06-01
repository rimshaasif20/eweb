
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Products from '../../Data';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../Redux/Actions';
function Order() {
    
    const dispatch = useDispatch();
    const { id } = useParams();
  
    const [quantity, setQuantity] = useState(1);
    const cartItems = useSelector(state => state.cart.cartItems);
    const isItemInCart = cartItems.some(item => item.id === parseInt(id));
  
    const product = Products.find((p) => p.id === parseInt(id));
    if (!product) {
      return <div>Product not found</div>;
    }
  
    const handleAddToCart = () => {
      dispatch(addToCart(product, quantity));
    };
  
    const handleRemoveFromCart = () => {
      dispatch(removeFromCart(product.id));
    };
  return (
    <>
    <h2 style={{ textAlign: 'center', margin: '30px', color: 'white' }}>Product Detail:</h2>
    <div className='container'>
      <Card.Img variant="top" src={product.image} style={{ width: '50%', height: '30%', objectFit: 'cover' }} />
      <Card style={{ width: '30rem', margin: '90px' }}>
        <Card.Body style={{ color: 'black' }}>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Card.Text>
            {product.price}
          </Card.Text>
          <Card.Text>
            <div className="form-group">
              <label htmlFor="exampleSelect2" className="form-label mt-4">Quantity</label>
              <input
                type="number"
                className="form-control"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </div>
          </Card.Text>
          {!isItemInCart ? (
            <button type="button" className="btn btn-primary" style={{ width: '30%', marginLeft: '100px' }} onClick={handleAddToCart}>Add To Cart</button>
          ) : (
            <button type="button" className="btn btn-danger" style={{ width: '30%', marginLeft: '100px' }} onClick={handleRemoveFromCart}>Remove From Cart</button>
          )}
        </Card.Body>
      </Card>
    </div>
  </>
  )
}

export default Order