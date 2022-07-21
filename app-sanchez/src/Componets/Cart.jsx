import {useContext} from 'react';
import {CartContext} from './CartContext';
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import CartItem from './CartItem';
import {addDoc , collection , getFirestore,serverTimestamp} from 'firebase/firestore';
import Swal from 'sweetalert2';
import '../Componets/css/StyleCart.css'

const Cart = () => {

  const {cartList , EmptyCart, PriceTotal , IconCart} = useContext(CartContext)

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
         {cartList.length < 1 ? (
              <div>
              <h4 className='tituloCart'>No hay productos en el carrito</h4>
    
              <Link to={"/"} >
                <div className='btnCart'>
                <Button  variant='outline-primary' size='lg' > Ir a tienda </Button>
                </div>
              </Link>
            </div>
          )
         
         :
        

         (  
         cartList.map((i) =>
         
         <>
         
         <CartItem key={i.producto.id} producto={i.producto} cantidad={i.cantidad}
         />
         
         
         {/* <p>Total item {IconCart()} </p> */}
         {/* <p>Total amount {PriceTotal()}</p> */}
        

         </>
         )
           
         
         )}
    </div>
    <p className='precioTotal'>Total a pagar {PriceTotal()}</p>
    <button className='btnBorrar' onClick={EmptyCart}>Borrar carrito</button>
         <button className='btnOrden' onClick={createOrder}>Confirmar orden </button>
    
    
    </>
  )
  
}
      
export default Cart
