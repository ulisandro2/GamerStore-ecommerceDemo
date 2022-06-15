import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getFetchOne } from '../../helpers/getFetch'


const ItemDetailContainer = () => {
    const [detail , setProductos] = useState({})
       useEffect(() =>{
        getFetchOne()
        .then((resp)=>  setProductos(resp))
        .catch(err => console.log(err))
       },[])
    
       const ItemDetail = () =>{
        return(
            <div className='col-md-4 p-1'
                        key={detail.id}
                       >
                           <div className='card w-100 mt-5'>
                               <div className='card-header'>
                                   { `${detail.categoria}`}
                               </div>
                               <div className='card-body'>
                                   {detail.stock}
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
  
    return <ItemDetail/>
    // <div>
    //     <h2>Numero de Producto: {detail.id}</h2>
    //     <h2>Su categoria es : {detail.categoria}</h2>
    // </div>
  
}

export default ItemDetailContainer
