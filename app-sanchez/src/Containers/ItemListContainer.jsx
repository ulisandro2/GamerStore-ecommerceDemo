import React, { useEffect, useState } from "react";
import {  Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import ItemList from "../Componets/ItemList";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import '../Componets/css/StyleItemListContainer.css'


const ItemListContainer = () => {
  const [producto, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  

  const { id } = useParams();
  

  useEffect(() => {
    const db = getFirestore(); // ** conectar a la base de datos
    const queryCollection = collection(db, "items"); // ** traer de la coleccion Products

    getDocs(
      id
        ? query(queryCollection, where("categoria" , "==", id)) // ** aquellos que coincidan )
        : queryCollection
    )
      .then((resp) =>
        setProductos(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [id]);



  const [isActive, setIsActive] = useState(false);
  
  const [selected , setSelected]= useState("")


  const options = [
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/perifericos`} > <li>Perifericos</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/procesadores`} > <li>Procesadores</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/placas de video`} > <li>Placas de video</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/almacenamiento`} > <li>Almacenamiento </li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/ram`} > <li>Ram</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/consola`} > <li>Consolas</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/placas madre`} > <li>Motherboards</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/perifericos`} > <li>Perifericos</li></Link>,
  ]
  

  
  return (
   
   
   
   
   <div className="body">
     
         
    {loading ? <h1>Cargando</h1>
    
    :
  
      <>  
   
     
   
     
   
    <div className="Dropdown">
      <div className="dropdown-btn" onClick={(e)=> setIsActive(!isActive)}>
        
      Categorias:        
      {selected}
      <box-icon name='caret-down' ></box-icon>
      
      </div>
      {isActive && (    
      <div className="dropdown-content">
        {options.map((option) => (

       <div  className="dropdown-item" onClick={(e) => {
        
        setSelected(option);
        setIsActive(false);
       
       }}>
          {option}
        </div>
       
         ))}
        </div>    
      )}
    </div>
   

   
   
   
   
   <ItemList producto={producto} />

     
     
     </>}

     
     
     </div>
  );
};

export default ItemListContainer;