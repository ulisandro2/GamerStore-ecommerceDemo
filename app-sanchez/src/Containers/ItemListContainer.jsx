import React, { useEffect, useState } from "react";

import { useParams,Link } from "react-router-dom";
import ItemList from "../Componets/ItemList";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import '../Componets/css/StyleItemListContainer.css'
import {IoIosArrowDown} from 'react-icons/io'




const ItemListContainer = () => {
 
 
 
  const [product, setProducts] = useState([]);
  const { id } = useParams();

  

  useEffect(() => {
    const db = getFirestore(); // ** conectar a la base de datos
    const queryCollection = collection(db, "items"); // ** traer de la coleccion Products

    getDocs(
      id
        ? query(queryCollection, where("category" , "==", id)) // ** aquellos que coincidan )
        : queryCollection
    )
      .then((resp) =>
        setProducts(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally();
  }, [id]);

  const [isActive, setIsActive] = useState(false);
  
  const [selected , setSelected]= useState("")


  const options = [
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`/products`} > <li>All</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/keyboards`} > <li>Keyboards</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/processors`} > <li>Processors</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/video boards`} > <li>Video Boards</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/storage`} > <li>Storage </li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/ram`} > <li>Ram</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/console`} > <li>Consoles</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/motherboards`} > <li>Motherboards</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/mouses`} > <li>Mouses</li></Link>,
    <Link style={{textDecoration:'none', listStyle:"none"}} to={`category/headphones`} > <li>Headphones</li></Link>,
  ]



 
  
  return (
   
   
   
   
   <div className="body">

<div className="Dropdown">
      <div className="dropdown-btn" onClick={(e)=> setIsActive(!isActive)}>
        
      Categories:        
      {selected}
      <IoIosArrowDown/>
      
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


   <ItemList product={product} /> 
   
   </div>
  );
};

export default ItemListContainer;