import React from 'react'
import { BsCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './StyleNavbar.css'

const NavBar = ({menu}) => {
  return (
    <div>
        {/* <h2 className='titulo'>{menu}</h2> 
        <main className='menu' >
           <h1 className='titulo'>{menu}</h1>
           <ul className='botones'>
           
        <Link to='/'><li className='item'>Inicio</li></Link> 
             
             <Link to='category/pc'><li className='item'>pc</li></Link>
             <Link to='category/gamer'><li className='item'>gamer</li></Link>
            <button>
              <Link to='cart'>
              Cart
              </Link>

            </button>

           </ul>
           
        </main> */}

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">GamerStore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
    <Link to='/'> <a className="nav-link active" aria-current="page" href="#">Home</a>  </Link>
        </li>
        <li className="nav-item">
        <Link to='category/pc'>      <a className="nav-link" href="#">pc</a> </Link>
        </li>
        <li className="nav-item">
        <Link to='category/gamer'>  <a className="nav-link disabled">teclado</a> </Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <Link to='cart' >
        <button className="btn btn-outline-success" type="submit">Cart</button>
        </Link>
      </form>
    </div>
  </div>
</nav>
       
    </div>
  )
}

export default NavBar
