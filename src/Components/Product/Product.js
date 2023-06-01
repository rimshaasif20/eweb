import React, {useEffect} from 'react'
import './Product.css'
import Card from 'react-bootstrap/Card';

import {useSelector, useDispatch} from 'react-redux'
import {fetchDummyData } from '../../Redux/Actions';
import {  useNavigate } from 'react-router-dom';
function Product() {
  const navigate= useNavigate();
  const dispatch=useDispatch();
  
  // debugger;
   const ProductItems=useSelector((state)=> state.ProductItems)
  const  Products= ProductItems.Products;

   useEffect(()=>{
dispatch(fetchDummyData())
   },[])

   const handleCardClick = (product) => {
    navigate (`/list/${product.id}`, { product });
  };
  
  return (
    <>
  <div className='container'>
  {Products?.map((data)=>(
    <Card  style={{ width: '18rem' }} key={data.id} onClick={() => handleCardClick(data)}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body style={{color: 'black'}}>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text>
          {data.price}
        </Card.Text>
      </Card.Body>
    </Card>
    ))
  }
 
    </div>
    </>
  )
}

export default Product