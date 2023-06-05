import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'
import '../App.css'
import CartButton from '../Components/Product/CartButton';

function Navigate() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{marginLeft: '3%'}}>
    <a className="navbar-brand" style={{marginLeft: '5px' , padding: '2px', fontSize: '40px', fontWeight: 'Bold'}} to="/">BestBuy</a>   
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <Nav.Link>
          <NavLink className="nav-link active" to="/">Products
            <span className="visually-hidden">(current)</span>
          </NavLink>
          </Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link>
          <NavLink className="nav-link" to="/list"></NavLink>
          </Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link>
          <NavLink className="nav-link" to="/services">Services</NavLink>
       </Nav.Link>
        </li>
        <li className="nav-item">
       <Nav.Link>
        <NavLink className='nav-link' to='/products'>ProductList</NavLink>
       </Nav.Link>
        </li>
      </ul>
      <form className="d-flex"> 
      <CartButton>
     <button type="button" className="btn btn-info"   style={{marginRight: '20px'}}>Cart</button>
     </CartButton>
        <input className="form-control me-sm-2" style={{backgroundColor: 'white'}} type="search" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" style={{marginRight: '13px'}} type="submit">Search</button>
      </form>
  </div>
</nav>
      </>
  )
}

export default Navigate