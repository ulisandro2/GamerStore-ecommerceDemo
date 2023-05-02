import React, { useContext, useState } from 'react'
import { CartContext, UseCartContext } from './CartContext'
import '../Componets/css/StyleCart.css'
import { MDBCardBody,  MDBBtn, } from 'mdb-react-ui-kit'




const CartItem = ({producto, cantidad}) => {
   
  const {DelItem } = UseCartContext()
  const {id} = producto
 

  
 
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
                               {/* <MDBCardBody>
                               <MDBBtn color='outline-danger'
                                   onClick={() => DelItem (id)}>Delete</MDBBtn>
                             </MDBCardBody>  */}
                             
                              
                               </div>
                            </div>
                               
                         </div>
  )
}

export default CartItem
