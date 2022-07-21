import React, { useState } from "react";

 const ItemCount = ({stock, initial, onAdd})=> {
     const [count , setCount ]= useState(1);

 const Agregar = () => {
    if(count<stock)setCount(count + 1);
 }

 const Restar = () => {
   if(count>initial)setCount(count - 1);
}

const AgregarProducto = ()=>{
   onAdd(count)
}

return(
    <>
       <div>
         <div className="contador">
            <h2 className="tituloContador">Total productos = {count}</h2>
            <button className="btnCountMas" onClick={Agregar}>+</button>
            <button className="btnCountMenos" onClick={Restar}>-</button>
            <button className="btnCount" onClick={AgregarProducto}>Agregar</button>
            </div>
       </div>
    
    
    </>


)

}



export default ItemCount