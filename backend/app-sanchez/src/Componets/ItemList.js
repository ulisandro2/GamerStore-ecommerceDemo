import React from "react"
import Item from "./Item"
import styled from "styled-components"


const ItemList = ({product }) => {

 


    return (
        
         
             <Container >
               {product.map((product)=> (
             
                <Item key={product.id} product={product}/> 
              
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