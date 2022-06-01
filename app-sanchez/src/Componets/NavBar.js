import React from 'react'
import { BsCartFill } from "react-icons/bs";
import './StyleNavbar.css'

const NavBar = ({menu}) => {
  return (
    <div>
      <h2 className='titulo'>{menu}</h2>
     <ul>
         <li>inicio</li>
         <li>servicios</li>
         <li>contacto</li>
     </ul>
      <BsCartFill/>
    </div>
  )
}

export default NavBar
