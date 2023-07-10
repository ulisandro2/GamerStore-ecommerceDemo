import React from 'react'
import { CartContext, UseCartContext } from './CartContext'
import '../Componets/css/StyleCart.css'
import styled from 'styled-components'







const CartItem = ({product, quantity}) => {
   
  const {DelItem} = UseCartContext(CartContext)
  

 

  
 
  return (
    <Container>
            <div className='cartItem'>
              <img src={product.img}/>
              <div className='description'>
                   <p className='product-name'>
                    <b>{product.name}</b>
                   </p>
                   <p className='price'>${product.price}</p>
                   <div className='count'>
                    <p className='count-title'>Productos selecionados: {quantity}</p>
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
