import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


const Item = ({producto}) =>  {
   
   const value = useContext(CartContext)
   const addCarrito = value.addCarrito
   
  
    return(
         <>
       

        <div className='col-md-4 p-1'
                        key={producto.id}
                       >
                           <div className='card w-100 mt-5'>
                               <div className='card-header'>
                                   {`${producto.nombre} - ${producto.descripcion}`}
                               </div>
                               <div className='card-body'>
                                   
                                 <img src={producto.img} width="200px" height='150px' ></img>
                                   
                                   
                               </div>
                               <div className='card-footer'>
                                <Link to={`/detalle/${producto.id}`}>
                                   <button className='btn btn-outline-primary btn-block'>
                                       Detalle del producto
                                   </button>
                                   </Link>
                                   {/* <button className='btn btn-outline-primary btn-block' onClick={()=> addCarrito(producto.id)}>
                                       Agregar al carrito
                                   </button> */}
                               </div>
                           </div>
                       </div>

                       </>
    )

    
}

export default Item