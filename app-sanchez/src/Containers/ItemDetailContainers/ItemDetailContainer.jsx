import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Componets/ItemDetail'
import { getFetchOne } from '../../helpers/getFetch'


const ItemDetailContainer = () => {
    const [producto , setProductos] = useState({});
    
     
     const {id} =useParams()

       useEffect(() =>{
        getFetchOne(id)
        .then((resp)=>  setProductos(resp))
        .catch(err => console.log(err))
       },[])
       
  
    return <ItemDetail producto={producto} />
    
  
}

export default ItemDetailContainer
