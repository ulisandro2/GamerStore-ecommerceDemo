import React, { useEffect, useState } from 'react'
import ItemList from '../Componets/ItemList'


// const task = new Promise((resolve,reject) => {
//        let condicion = true
//        if(condicion){
//            resolve('200 ok')
//        }else{
//            reject('404 not found')
//        }
// });



const Listproducto = [
      { 
         id: '1',  
         nombre: 'Teclado', 
         description: 'teclado gamer', 
         stock: 40
},

{ 
    id: '2',  
    nombre: 'Mouse', 
    description: 'mouse gamer', 
    stock: 30
}
]

const getFetch = () =>{
    
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(Listproducto)
        },3000)
        
    })
}

 const ItemListContainer = () => {
    const [producto, setProductos] = useState([])
    const [loading , setLoading] = useState(true)
    
    useEffect(() => {
        getFetch()
        .then((resp) =>{
            setProductos(resp)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[])
      return(
        <div>
            { loading ? <h1>Cargando</h1>: <ItemList producto={producto}/> }

       </div>
       )
    }




export default ItemListContainer