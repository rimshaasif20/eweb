

import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../Redux/Actions';

function Order() {
    
    const dispatch = useDispatch();
    const { id } = useParams();
    const cart = useSelector(state => state.cartItems);
    const cartItems=cart.cartItems;
    debugger;
    console.log(cartItems);
    
   
    const isItemInCart = cartItems.some(item => item.id == parseInt(id));
  
    // const handleAddToCart = () => {
    //   dispatch(addToCart(cartItems[0], quantity));
    // };
  
    const handleRemoveFromCart = () => {
      dispatch(removeFromCart(product.id));
    };
  return (
    <>
    <h2 style={{ textAlign: 'center', margin: '30px', color: 'white' }}>Product Detail:</h2>
    <div className='container'>
      <Card style={{ width: '30rem', margin: '90px' }}>
        <Card.Body style={{ color: 'black' }}>
          <Card.Title>{cartItems[0].name}</Card.Title>
          <Card.Text>
            {cartItems[0].description}
          </Card.Text>
          <Card.Text>
            {product.price}
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