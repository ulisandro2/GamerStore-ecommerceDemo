import React from 'react'
import { BsCartFill } from "react-icons/bs";
import './StyleNavbar.css'

const NavBar = ({menu}) => {
  return (
    <div>
      <h2 className='titulo'>{menu}</h2>
    
      <BsCartFill/>
    </div>
  )
}

export default NavBar
