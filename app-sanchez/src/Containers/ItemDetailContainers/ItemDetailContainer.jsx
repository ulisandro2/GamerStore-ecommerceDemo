import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Componets/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [product , setProducts] = useState([]);
    
    
     
     const {id} =useParams()

       useEffect(() =>{
        const db = getFirestore()
        const queryItem = doc(db, 'items', id)
        getDoc(queryItem) 
        .then(resp => setProducts({ id: resp.id, ...resp.data()} ))
        .catch(err => console.log(err))
        .finally();
       },[id])



       
       
  
    return (
    <>
     
     
     
     
     
     <ItemDetail product={product} />

    </>
      )
    
  
}

export default ItemDetailContainer
