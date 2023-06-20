import {useContext} from 'react';
import {CartContext} from './CartContext';
import {Button ,Form} from "react-bootstrap"
import {Link} from "react-router-dom"
import CartItem from './CartItem';
import axios from 'axios'
import Swal from 'sweetalert2';
import '../Componets/css/StyleCart.css'




const Cart = ({producto,cantidad}) => {

  const {cartList , PriceTotal,EmptyCart } = useContext(CartContext)
  


 


  if (cartList.length < 1) {
    return (
      <div>
         <h4 className='titleCart'>No hay productos en el carrito</h4>

        <Link to={"/"} >
                <div className='btnCart'>
                <Button  variant='outline-primary' size='lg' > Ir a tienda </Button>
                 </div>
       </Link>
      </div>
    )

  } else {
    return (
      <div className='bodyCart'>
        <h1 className='titulo-carrito'>Carrito</h1>
        
        {cartList.map((i) => (
          <CartItem key={i.producto.id} producto={i.producto} cantidad={i.cantidad} />
        ))}

        <div className='check-cart'>

<h3 className='subtotal'>Subtotal: ${PriceTotal()}</h3>
<button className='delete' onClick={EmptyCart}>Delete Cart</button>
<Link to='/productos'><button className='shopping'>Continue Shopping</button></Link> 



<button className='checkout' onClick={()=>{
  
  Swal.fire({
    icon:'warning',
    title:'Recuerda !!!',
    text:'Este pago sera de 5 dolares y se tomara como donacion , desea continuar ?',
    showDenyButton:true,
    denyButtonText:'No',
    confirmButtonText:'Si'
  }).then((res)=>{
    if(res.isConfirmed){
      axios.post('http://localhost:3001/payment', producto).then((res)=> window.location.href = res.data.response.body.init_point)
    }else{
      Swal.fire({
        icon:'info',
        title:'Pago cancelado',
        text:'Se cancelo su pago'
      })
    }
  })
   }}>Checkout
   </button>
   </div>


        

      
      </div>
    )
  }

  
}
      
export default Cart
