import React from 'react'
import { BsCartFill } from "react-icons/bs";
import './StyleNavbar.css'

const NavBar = ({menu}) => {
  return (
    <div>
        {/* <h2 className='titulo'>{menu}</h2>  */}
        <main className='menu' >
           <h1 className='titulo'>{menu}</h1>
           <ul className='botones'>
             <li className='item'>Inicio</li>
             <li className='item'>Productos</li>
             <li className='item'>Arma tu pc</li>
           </ul>
        </main>
       
    </div>
  )
}

export default NavBar
