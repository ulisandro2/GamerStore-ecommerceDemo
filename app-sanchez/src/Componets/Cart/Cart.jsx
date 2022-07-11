import {useContext} from 'react';
import {CartContext} from './CartContext';
import CartItem from './CartItem';
import {addDoc , collection , getFirestore,serverTimestamp} from 'firebase/firestore';
import Swal from 'sweetalert2';

const Cart = () => {

  const {cartList , EmptyCart} = useContext(CartContext)

  const createOrder = () => {
    const db = getFirestore()
    const queryCollection = collection(db,'orders')
    // const total = PriceTotal()
    
    const user = {nombre: 'ulises sanchez',email: 'sanchezulises@gmail.com',phone:'1151399129'}
    const order = {user , cartList , created_at:serverTimestamp()}
    const request = addDoc(queryCollection,order)

    request
       .then((resp) => {
        Swal.fire('su compra se completo' , 'numero de orden:' + resp.id, 'completado ')
           })
        .catch((error) => { 
            console.log('ocurrio un error:' + error )
        })
        .finally((resp) => {
          EmptyCart();
        })



  }

  return (
    <>
    <div>
         {cartList.length < 1 ? (<p>Carrito vacio</p> )
         
         :(  
         cartList.map((i) =><CartItem key={i.producto.id} producto={i.producto} />)
         
         )}
    </div>
    <button onClick={EmptyCart}>Borrar carrito</button>
    <button onClick={createOrder}>Confirmar orden </button>
    </>
  )
  
}
      
export default Cart
