import {useContext} from 'react';
import {CartContext} from './CartContext';
import {Button } from "react-bootstrap"
import {Link} from "react-router-dom"
import CartItem from './CartItem';
import axios from 'axios'
import Swal from 'sweetalert2';
import '../Componets/css/StyleCart.css'




const Cart = ({producto,cantidad}) => {

  const {cartList , PriceTotal,EmptyCart ,IconCart} = useContext(CartContext)
  


 


  if (cartList.length < 1) {
    return (
      <div>
         <h4 className='titleCart'>There are no products in your cart</h4>

        <Link to={"/products"} >
                <div className='btnCart'>
                <Button  variant='outline-primary' size='lg' > Go to store </Button>
                 </div>
       </Link>
      </div>
    )

  } else {
    return (
      <div className='bodyCart'>
        <h1 className='titulo-carrito'>Cart</h1>
        
        {cartList.map((i) => (
          <CartItem key={i.product.id} product={i.product} quantity={i.quantity} />
        ))}

        <div className='check-cart'>

<h3 className='subtotal'>Subtotal: ${PriceTotal()}</h3>
<h3 className='total'>Total Items: {IconCart()}</h3>
<button className='delete' onClick={EmptyCart} >Delete Cart</button>

<Link to='/products'><button className='shopping'>Shop</button></Link> 



<button className='checkout' onClick={()=>{
  
  Swal.fire({
    icon:'warning',
    title:'Remember!!!',
    text:'Remember that this is a generic page, the payment will be 5 dollars and will be taken as a donation, would you like to continue?',
    showDenyButton:true,
    denyButtonText:'No',
    confirmButtonText:'Yes',
    footer:'In case you make a mistake with the payment, send me an email to recover your money sanchezulises952@gmail.com'
  }).then((res)=>{
    if(res.isConfirmed){
      axios.post('http://localhost:3000/payment', producto).then((res)=> window.location.href = res.data.response.body.init_point)
    }else{
      Swal.fire({
        icon:'info',
        title:'cancelled payment',
        text:'Your payment has been cancelled'
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
