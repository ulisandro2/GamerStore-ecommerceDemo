import React, { useState } from "react";

import styled from "styled-components";

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
       <Container>
       <h2 className="tituloContador">Total items = {count}</h2>
         <div className="contador">
            
            <button className="btnCountMas" onClick={Agregar}>+</button>
            <button className="btnCountMenos" onClick={Restar}>-</button>
            </div>
            <button className="btnCount" onClick={AgregarProducto}>Add</button>
            
       </Container>
    
    
    </>


)

}


const Container = styled.div`
    
    .tituloContador{
      color: black;
      font-size: 1.5rem;
    }
  
    .contador{
      display: flex;
      
    }
   
    .btnCountMas{
      background-color: black;
      color: white;
      width: 40px;
      border: none;
      margin: 0.7rem;
      height: 35px;
      font-weight: 700;
      border-radius: 7px;

    }

    .btnCountMenos{
      background-color: black;
      color: white;
      width: 40px;
      border: none;
      margin: 0.7rem;
      height: 35px;
      font-weight: 700;
      border-radius: 7px;

    }

    .btnCount{
      background-color: black;
      color: white;
      width: 100px;
      border: none;
      border-radius:5px;
      height: 45px;
      font-weight: 600;
      margin: 0.7rem;

    }



    .btnCountMas:hover{
      background: rgba(0,0,0,0.75);

    }
    .btnCountMenos:hover{
      background: rgba(0,0,0,0.75);

    }
    .btnCount:hover{
      background: rgba(0,0,0,0.75);

    }

    
`



export default ItemCount