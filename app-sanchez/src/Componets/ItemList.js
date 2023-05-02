import React from "react"
import Item from "./Item"

const ItemList = ({producto }) => {
    return (
        
         <div className="container">
             <div className="row">
             {producto.map((producto)=> (
                <div className="row-md-6">
                <Item producto={producto}/> 
              </div>
              )
            )}
           </div> 
        </div>
    )
}

export default ItemList