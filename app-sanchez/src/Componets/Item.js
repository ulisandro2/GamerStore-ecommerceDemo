import React from "react";

const Item = ({producto}) => {
    return(
        <div className='col-md-4 p-1'
                        key={producto.id}
                       >
                           <div className='card w-100 mt-5'>
                               <div className='card-header'>
                                   {`${producto.nombre} - ${producto.description}`}
                               </div>
                               <div className='card-body'>
                                   {producto.stock}
                               </div>
                               <div className='card-footer'>
                                   <button className='btn btn-outline-primary btn-block'>
                                       Detalle del producto
                                   </button>
                               </div>
                           </div>
                       </div>
    )
}

export default Item