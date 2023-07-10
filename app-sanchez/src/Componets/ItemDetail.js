import React, { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import ItemCount from './ItemCount'
import '../Componets/css/StyleItemDetail.css'


import styled from 'styled-components'
// import ItemLike from './ItemLike'

const ItemDetail = ({product}) => {
   
   const[quantity , setQuantity] = useState();
   // const [goTolike , setGoToLike] = useState();
   const {AddToCart , AddToLike} = useContext(CartContext);
  

  const onAdd = (quantity) =>{
     setQuantity(quantity , product ) ;
     AddToCart(quantity , product);
  }


//   const onLike = ()=>{
//     setGoToLike(producto)
//     AddToLike(producto,goTolike)
//   }
  


  return (
      <Container>
          
             <div className='details'>
             {/* <ItemLike onLike={onLike}>
            </ItemLike> */}
               <div className='big-img'>
                  <img src={product.img}/>
               </div>
               <div className='box'>
                  <div className='row'>
                     <h2>{product.name}</h2>
                     <span>${product.price}</span>
                  </div>
                  <p className='description'>{product.description}</p>
                  
                  <div className='col'>
                      {
                       quantity ?
                       <div>
                       <Link to="/Cart" >
                       <button className='btnCart2'>Go to Cart</button>
                       </Link>
                       <Link to="/products" >
                       <button className='btnCart2'>Go to store</button>
                       </Link>
                       </div>
                       
                       :
                       <ItemCount initial={1} stock={20} onAdd={onAdd} />  
                   }                 

              </div>
                   

               </div>
             </div>
        
         
         
         
         
         
         
         </Container>              
  )
}


const Container=styled.div`
 
.icon{
   cursor: pointer;
}

.btnIcon{
   background-color:black;
   border: none;
   width: 40px;
   height: 40px;
   border-radius:10px ;
}

.btnIcon:hover{
   background-color: rgb(0.40,0,0,0.70);
}




`
export default ItemDetail
