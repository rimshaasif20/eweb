import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Products from '../../Data';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions';
function ShowProduct() {
    // const { product } = props;
    const dispatch=useDispatch();
    const navigate= useNavigate();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    console.log('product id',id);
    const product = Products.filter((p)=>p.id == id)
    console.log('product object =',product[0])

    function addtoCart(){
  
    dispatch(addToCart(product[0]),quantity)
 navigate('/services');
    }
  return (
    <>
    <h2 style={{ alignText: 'center',margin: '30px', color: 'white'}}>Product Detail:</h2>
    <div className='container'>
    <Card.Img variant="top" src={product[0].image} style={{width: '50%', height: '30%', objectFit:'cover' }} />
    <Card  style={{ width: '30rem' , margin: '90px'}}>
      <Card.Body style={{color: 'black'}}>
        <Card.Title>{product[0].name}</Card.Title>
        <Card.Text>
          {product[0].description}
        </Card.Text>
        <Card.Text>
          {product[0].price}
        </Card.Text>
        <Card.Text>
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
    </Card.Text>
        <button type="button" className="btn btn-primary" style={{width: '30%', marginLeft: '100px' }} onClick={() =>{addtoCart()}}>Add To Cart</button>
      </Card.Body>
    </Card>
  </div>
  </>
);
}

export default ShowProduct