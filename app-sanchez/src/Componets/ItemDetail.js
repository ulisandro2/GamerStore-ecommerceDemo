import React from 'react'

const ItemDetail = ({producto}) => {
  return (
     <div className='col-md-4 p-1' key={producto.id}>
        <h2>Detalle del producto</h2>
        <div className='card w-100 mt-5'>
            <div className='card-header'>{`${producto.nombre}`}</div>
            <div className='card-body'>{`${producto.stock}`}</div>
            <div className='card-footer'>

            </div>
        </div>
     </div>
                       
  )
}

export default ItemDetail
