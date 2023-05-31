import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'
import '../App.css'

function Navigate() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" to="/">BestBuy</a>   
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
          <NavLink className="nav-link" to="/list">ProductDetails</NavLink>
          </Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link>
          <NavLink class="nav-link" to="/services">Services</NavLink>
       </Nav.Link>
        </li>
      </ul>
  </div>
</nav>
      </>
  )
}

export default Navigate