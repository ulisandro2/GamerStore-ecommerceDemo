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
                    <ItemCount initial={1} stock={20} onAdd={onAdd} />  
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
