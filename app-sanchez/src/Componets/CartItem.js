import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext'
import '../Componets/css/StyleCart.css'


const CartItem = ({producto, cantidad}) => {
   
 

  
 
  return (
    <div className='col-md-4 p-1'
                        key={producto.id}
                       >
                           <div className='card w-100 mt-5'>
                               <div id='tituloItem' className='card-header'>
                                   {`${producto.nombre} `}
                               </div>
                               <div className='card-body'>
                               <img src={producto.img} width='200px' height='150px' ></img>
                              
                                   
                               </div>
                               <div className='card-footer'>
                               <p className='precioItem'> Productos seleccionados:  {cantidad} </p>
                               <p className='cantidadItem'>Precio del producto ${producto.precio}</p>
                             
                              
                               </div>
                            </div>
                               
                         </div>
  )
}

export default CartItem
