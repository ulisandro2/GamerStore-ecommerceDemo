import React, { useContext } from 'react'
import LikeItem from '../Componets/LikeItem'
import { CartContext } from './CartContext'

const LikeContainer = () => {

 const {like} = useContext(CartContext)

  if(like.length > 1){
    return(
        <div>
            <h1>No hay favoritos</h1>
        </div>
    )
  }else{
    return(
        <div>
            <h1>Favoritos</h1>
              {like.map((i)=>{
                <LikeItem key={i.producto.id} producto={i.producto}/>
                
              })}
                
              
                
            
        </div>
    )
  }
}

export default LikeContainer