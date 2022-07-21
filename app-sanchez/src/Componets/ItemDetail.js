import React, { useState , useContext, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from './CartContext'
import ItemCount from './ItemCount'
import '../Componets/css/StyleItemDetail.css'

const ItemDetail = ({producto}) => {
   
   const[cantidad , setCantidad] = useState();
   const {AddToCart} = useContext(CartContext);
  

  const onAdd = (cantidad) =>{
     setCantidad(cantidad , producto ) ;
     AddToCart(cantidad , producto);
  }

  
  

  return (
 


   //   <div className='col-md-4 p-1' key={producto.id}>
   //      <h2>Detalle del producto</h2>
   //      <div className='card w-100 mt-5'>
   //          <div className='card-header'>{`${producto.nombre}`}</div>
   //          <div className='card-body'>
              
   //             <img src={producto.img} width="200px" height='150px' ></img>
               
   //          </div>
   //          <div className='card-footer'>
   //                  Stock Disponible: {`${producto.stock}`}
                    
   //          </div>
   //          <div className='card-footer'>
   //          Total: {`${producto.precio}`}
   //          </div>
            
   //          <div className='row'>
   //             <div className='col'>
   //                  {
   //                   cantidad ?
   //                   <Link to="/Cart" >
   //                   <button className='btn btn-outline-primary'>Ir al Cart</button>
   //                   </Link>
   //                   :
   //                   <ItemCount initial={1} stock={10} onAdd={onAdd} />  
   //               }                 

   //             </div>
   //             </div>
   //          </div>
        
   //   </div>

   <div className='container' id='detalles'>
      <h2>{producto.nombre}</h2>
      <p className='price'>${producto.precio}</p>
      <div className='grid'>
      
       <div className='col'>
                     {
                      cantidad ?
                      <Link to="/Cart" >
                      <button className='btnCarrito'>Ir al Cart</button>
                     </Link>
                      :
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />  
                }                 

              </div>
       
    
      </div>
      
      <img src={producto.img}  ></img>
      
      <div className='descripcion'>
         <p>{producto.descripcion}
          
         </p>
      </div>
    </div>

                          
  )
}

export default ItemDetail
