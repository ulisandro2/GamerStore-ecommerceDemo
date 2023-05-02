import { Link } from "react-router-dom";
import '../Componets/css/StyleItem.css';










const Item = ({producto}) =>  {


    return(
         <>

                       <div className="productos">
                        <div className='producto'>
                          
                            <div className="producto-imagen">
                                <img alt="producto" src={producto.img}></img>
                            </div>
                        
                        <div className="producto-footer">
                            <h1>{producto.nombre} </h1>
                            <p>{producto.categoria}</p>
                            <p className="price">${producto.precio}</p>
                        </div>
                        <div className="buttom">
                        <Link to={`/detalle/${producto.id}`}>
                            <button   className="btn">
                                Detalle
                                </button>
                                </Link>
                           
                        </div>
                        </div>
                       </div>
                        
                        
                       

                       

         </> 
    )

    
}

export default Item