import React, { useState } from 'react'
import {TbArrowsRight , TbArrowsLeft} from 'react-icons/tb'
import { Link } from 'react-router-dom';
import './css/StyleNavbar.css'
import styled from 'styled-components';
// import {  UseCartContext } from './CartContext';

const NavBar = () => {
  //  const {cartList,IconCart} = UseCartContext()
   
 const [state , setState] = useState(false)
  
 const [bar , setBar] = useState()


  
 


  return (
    <Container bar={bar}>
         <nav className='NavbarItems'>
           <h1 className='logo'>GamerStore</h1>
           <div className='menu-icon' onClick={() => setBar(!bar)}>
          <span className='bars'  onClick={() => setState(!state)}>{state ? <TbArrowsLeft/> : <TbArrowsRight/> }</span>
          </div>
          <ul className='navLinks'  > 
        <Link style={{textDecoration:'none'}} to='/'><li className='link'>Home</li></Link> 
        <Link style={{textDecoration:'none'}} to='/productos'><li className='link'>Products</li></Link>    
        <Link style={{textDecoration:'none'}} to='/'><li className='link'>About</li></Link>    
        <Link style={{textDecoration:'none'}} to='/cart'><li className='link-cart'>Cart</li></Link>
           
           </ul>
         </nav>
  
    </Container>
  )
}


const Container= styled.div`
.NavbarItems{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    padding:0 30px;
    
    background-color: #222;
    box-shadow: 0 5px 15px  rgba(0, 0, 0, 0.25);
    width: 95%;
    height: 80px;
    border-radius: 13px;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
    z-index: 99;
}

.logo{
    color: white;
    justify-self: start;
    cursor: pointer;
}

.navLinks{
    display: grid;
    grid-template-columns: repeat(6,auto);
    grid-gap: 10px;
    list-style: none;
    align-items: center;
    text-align: center;
    justify-content: end;
}
.link{
    text-decoration: none;
    color: white;
    padding: 0.7rem 1rem;
    white-space: nowrap;
}

.link:hover{
    background:rgb(80,80, 238) ;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
}

.bars{
    color: white;
    font-size: 30px;
    transition: transform 0.4s ease-in-out;
}

.menu-icon{
    display: none;
    
}


@media screen and (max-width:850px){
    .NavbarItems{
        z-index: 99;
    }

    .navLinks{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: rgba(255, 255, 255, .25);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, .37);
        backdrop-filter: blur(4px);
        border-radius: 13px;
        width: 100%;
        height: auto;
        position: absolute;
        top:0;
        left: ${props => props.bar ?  0 : '-110%'};
        align-items: stretch;
        padding: 80px 0 30px 0 ;
        margin: 0;
        z-index: -1;
        transition: all 0.3s ease-in-out;
    }

   
    
    .link{
        display: block;
        widows: 100%;
        padding: 2rem 0;
        color: black;
        font-weight: 600;
        

    }

    .link:hover{
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(20px);
    }

  .menu-icon{
    display: block;
    cursor: pointer;
    
  }


}




`

export default NavBar
