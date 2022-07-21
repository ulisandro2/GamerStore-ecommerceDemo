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
        ? query(queryCollection, where("categoria", "==", id)) // ** aquellos que coincidan )
        : queryCollection
    )
      .then((resp) =>
        setProductos(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [id]);
  return (
    <div>
     
         
      {loading ? <h1>Cargando</h1> 
      
      :
    
     <>  
     
    <h1 id="tituloCategorias">Filtrado de categorias</h1>

    <div className="container-productos">
    <ul className="categorias">
    <Link style={{textDecoration:'none',}} to={`category/perifericos`}> <li>Perifericos</li> </Link>
    <Link style={{textDecoration:'none',}} to={`category/procesadores`}>  <li>Procesadores</li> </Link>
    <Link style={{textDecoration:'none',}} to={`category/almacenamiento`}>  <li>Almacenamiento</li> </Link>
    <Link style={{textDecoration:'none',}} to={`category/placas de video`}>  <li>Placas de video</li> </Link>
    <Link style={{textDecoration:'none',}} to={`category/ram`}>  <li>Memorias ram </li> </Link>
    
   
    </ul>
   
    
     
   
     <ItemList producto={producto} />

     </div>
     
     </>}

     
     
     </div>
  );
};

export default ItemListContainer;