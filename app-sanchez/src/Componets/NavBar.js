import React from 'react'
import {AiOutlineBars} from 'react-icons/ai'
// import { Link } from 'react-router-dom';
import './css/StyleNavbar.css'
// import {  UseCartContext } from './CartContext';

const NavBar = () => {
  //  const {cartList,IconCart} = UseCartContext()
   
  


  return (
    <>
         <nav className='NavbarItems'>
           <h1 className='logo'>GamerStore</h1>
           <ul className='navLinks'>
            <span className='bars'><AiOutlineBars/></span>
            <li className='link'>Home</li>
            <li className='link'>Products</li>
            <li className='link'>About</li>
            <li>Cart</li>
           </ul>
         </nav>
  
    </>
  )
}

export default NavBar
