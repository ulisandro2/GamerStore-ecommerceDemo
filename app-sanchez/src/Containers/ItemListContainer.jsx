import React, { useEffect, useState , useContext} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../Componets/ItemList'
import { CartContext } from '../Componets/CartContext'


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
         categoria:'pc',
         stock: 40,
         foto:'./imagenes/auriculares.png'
},

{ 
    id: '2',  
    nombre: 'Mouse', 
    description: 'mouse gamer', 
    categoria:'gamer',
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
    const [producto, setProductos] = useState([]);
    const [loading , setLoading] = useState(true);
    
   const {id} = useParams();


    useEffect(() => {
        getFetch()
        .then((resp) =>{
            setProductos(
          id ? resp.filter((producto) => producto.categoria == id) : resp );
            
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[id])
      return(
        <div>
            { loading ? <h1>Cargando</h1>: <ItemList producto={producto}/> }

       </div>
       )
    }




export default ItemListContainer