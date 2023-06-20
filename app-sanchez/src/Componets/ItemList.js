import React from "react"
import Item from "./Item"
import styled from "styled-components"


const ItemList = ({producto }) => {

 


    return (
        
         
             <Container >
               {producto.map((producto)=> (
             
                <Item key={producto.id} producto={producto}/> 
              
              )
            )}
           </Container> 
        
    )
}

const Container=styled.div`

    display: flex;
justify-content: center;
 align-items: center;
 margin-top: 20px;
 text-align:center ;
 flex-wrap: wrap;
`

export default ItemList