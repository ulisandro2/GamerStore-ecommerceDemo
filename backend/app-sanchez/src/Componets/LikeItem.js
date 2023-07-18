import React from 'react'
import { UseCartContext } from './CartContext'


const LikeItem = ({producto}) => {

  
  return (
    <div key={producto.id}>
        <h1>{producto.precio}</h1>
        
    </div>
    
    




  )
}

export default LikeItem