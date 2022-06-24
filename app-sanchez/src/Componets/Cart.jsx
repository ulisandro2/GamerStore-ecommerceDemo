import {useContext} from 'react'
import {CartContext} from './CartContext'
import CartItem from './CartItem'

const Cart = () => {

  const {cartList} = useContext(CartContext)

  return (
    <div>
         {cartList.length < 1 ? (<p>Carrito vacio</p> )
         
         :(  
         cartList.map((i) =><CartItem key={i.producto.id} producto={i.producto} />)
         
         )}
    </div>
  )
}
      
export default Cart
