
import { useContext } from "react";
import { Link } from "react-router-dom";
import '../Componets/css/StyleItem.css';
import { CartContext } from "./CartContext";








const Item = ({producto}) =>  {
  
  const {AddToCart} = useContext(CartContext)


  const onAdd = () =>{
    
    AddToCart( producto);
 }

  

   
    return(
         <>

                       <div className="productos">
                        <div className='producto'>
                           <a href="#"> 
                            <div className="producto-imagen">
                                <img src={producto.img}></img>
                            </div>
                        </a>
                        <div className="producto-footer">
                            <h1>{producto.nombre} </h1>
                            <p>{producto.categoria}</p>
                            <p className="price">${producto.precio}</p>
                        </div>
                        <div className="buttom">
                            <button  className="btn">
                                
                                Agregar
                                
                            </button>
                           <div>
                             <Link to={`/detalle/${producto.id}`}>
                             <button className="btn">Detalle</button>
                             </Link>
                            </div> 
                        </div>
                        </div>
                       </div>
                        
                        
                       

                       

         </> 
    )

    
}

export default Item