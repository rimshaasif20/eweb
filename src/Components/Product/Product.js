import React from 'react'
import './Product.css'
import Card from 'react-bootstrap/Card';
function Product({Products}) {
   
  return (
    <>
  <div className='container'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{Products.name}</Card.Title>
        <Card.Text>
          {Products.description}
        </Card.Text>
        <Card.Text>
          {Products.price}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Product