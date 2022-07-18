import React from "react"
import Item from "./Item"

const ItemList = ({producto }) => {
    return (
        <div>
            {producto.map((producto)=> (
              <Item producto={producto}/>  
            )
             ,    <h1>dadas</h1>
            )}
        </div>
    )
}

export default ItemList