import React, { useEffect, useState } from 'react'

// const task = new Promise((resolve,reject) => {
//        let condicion = true
//        if(condicion){
//            resolve('200 ok')
//        }else{
//            reject('404 not found')
//        }
// });



const producto = [
      { 
         id: '1',  
         nombre: 'Teclado', 
         description: 'teclado gamer', 
         stock: 40
}
]

const getFetch = () =>{
    
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(producto)
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
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])

    

    return(
        <div>
            { 
             loading ? 
                <h1>Cargando</h1>
             :
            producto.map(producto => 
                     
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
                
                ) }


        </div>
    )
}




export default ItemListContainer