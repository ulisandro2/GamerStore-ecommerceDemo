import React from 'react'
import { CartContext, UseCartContext } from './CartContext'
import '../Componets/css/StyleCart.css'
import styled from 'styled-components'
import axios from 'axios'






const CartItem = ({producto, cantidad}) => {
   
  const {DelItem} = UseCartContext(CartContext)
  

 

  
 
  return (
    <Container>
            <div className='cartItem'>
              <img src={producto.img}/>
              <div className='description'>
                   <p className='product-name'>
                    <b>{producto.name}</b>
                   </p>
                   <p className='price'>${producto.precio}</p>
                   <div className='count'>
                    <p className='count-title'>Productos selecionados: {cantidad}</p>
                   </div>
               </div>
            </div>
   
 
 

    </Container>
  )
}

const Container =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


export default CartItem
