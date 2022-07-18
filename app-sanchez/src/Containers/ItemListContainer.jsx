import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Componets/ItemList";
import { collection, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'


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
     
    <h1>jdasjdkasdj</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium molestias aspernatur qui fuga quia culpa impedit. Unde, quidem deleniti necessitatibus ullam accusamus dicta ut praesentium voluptatibus illo soluta. Ducimus, libero.</p>


     <ItemList producto={producto} />
     
     </>}
     
     </div>
  );
};

export default ItemListContainer;