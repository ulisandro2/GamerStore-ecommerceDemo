import React from 'react'
import { BsCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './StyleNavbar.css'

const NavBar = ({menu}) => {
  return (
    <div>
        {/* <h2 className='titulo'>{menu}</h2>  */}
        <main className='menu' >
           <h1 className='titulo'>{menu}</h1>
           <ul className='botones'>
           
        <Link to='/'><li className='item'>Inicio</li></Link> 
             <li className='item'>Productos</li>
             <li className='item'>Arma tu pc</li>
             <Link to='category/pc'><li className='item'>pc</li></Link>
             <Link to='category/gamer'><li className='item'>gamer</li></Link>
            <button>
              <Link to='cart'>
              Cart
              </Link>

            </button>

           </ul>
           
        </main>
       
    </div>
  )
}

export default NavBar
