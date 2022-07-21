import React from 'react'
import { Link } from 'react-router-dom';
import './css/StyleNavbar.css'
import 'boxicons';
import {  UseCartContext } from './CartContext';

const NavBar = () => {
   const {cartList,IconCart} = UseCartContext()
   
  


  return (
    <div>

 <nav id='navBar' className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">GamerStore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
    <Link style={{textDecoration:'none',}} to='/'> <a className="nav-link active " aria-current="page" href="#">Inicio</a>  </Link>
        </li>
        <li className="nav-item">
        <Link style={{textDecoration:'none',}} to='/productos'>      <a className="nav-link" href="#">Productos</a> </Link>
        </li>
        <li className="nav-item">
        <Link to='category/pc'>  <a className="nav-link disabled">Contacto </a> </Link>
        </li>
      </ul>
      <form className="d-flex">
        
        <Link to='cart' >
        <button className="btn btn-outline-success" type="submit"><box-icon name='cart'></box-icon>
        <span className='item-total'>{cartList.lenght < 1 ? '' : <p>{IconCart()}</p>}</span>
        </button>
        </Link>
      </form>
    </div>
  </div>
</nav>
       
    </div>
  )
}

export default NavBar
