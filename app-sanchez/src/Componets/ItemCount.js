import React, { useState } from "react";

 const ItemCount = ({stock, initial})=> {
     const [count , setCount ]= useState(1);

 const Agregar = () => {
    if(count<stock)setCount(count + 1);
 }

 const Restar = () => {
   if(count>initial)setCount(count - 1);
}



return(
    <>
       <div>
            <h2>Total productos = {count}</h2>
            <button onClick={Agregar}>+</button>
            <button onClick={Restar}>-</button>
       </div>
    
    
    </>


)

}



export default ItemCount