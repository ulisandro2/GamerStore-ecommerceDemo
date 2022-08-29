import {useContext} from 'react';
import {CartContext} from './CartContext';
import {Button ,Form} from "react-bootstrap"
import {Link} from "react-router-dom"
import CartItem from './CartItem';
import {addDoc , collection , getFirestore,} from 'firebase/firestore';
import Swal from 'sweetalert2';
import '../Componets/css/StyleCart.css'
import { MDBRow, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit"

import { useState } from 'react';

const Cart = () => {

  const {cartList , EmptyCart, PriceTotal , IconCart} = useContext(CartContext)
  const [dataForm , setDataForm] = useState({
    nombre:"",
    email:"",
    telefono:"",

  })


  async function  createOrder(e)  {

   e.preventDefault()

   let  order ={}

   order.buyer =dataForm
   order.total = PriceTotal()
   order.items = cartList.map((CartItem)=>{
    
       const id = CartItem.producto.id
       const nombre = CartItem.producto.nombre
       const precio = CartItem.producto.precio * CartItem.cantidad
       return {id,nombre,precio}
   })
   
    
    const db = getFirestore()
    const orderCollection = collection(db,'orders')
    addDoc(orderCollection,order)
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

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.nombre]:e.target.value,
    })

  }


  if (cartList.length < 1) {
    return (
      <div>
         <h4 className='tituloCart'>No hay productos en el carrito</h4>

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
        <MDBRow id='item-carrito' className='row-cols-1 row-cols-md-4 g-4'>
        {cartList.map((i) => (
          <CartItem key={i.producto.id} producto={i.producto} cantidad={i.cantidad} />
        ))}
       
        </MDBRow> 

       <div>

          <MDBTable>
      <MDBTableHead>
        <tr id='tabla' className='table-success'>
          <th scope='col'>Total a Pagar </th>
          <th scope='col'>Total Productos</th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr >
          <th className='precio' scope='row'>$ {PriceTotal()} </th>
          <td className='items'>{IconCart()}</td>
          <td><Button variant='outline-danger' size='sm' onClick={EmptyCart}>Borrar Carrito</Button></td>
          
        </tr>
      </MDBTableBody>
    </MDBTable>

          <div className="form">
            <h4>Complete el formulario para confirmar la compra </h4>
            <Form onSubmit={createOrder}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  required={true}
                  id="nombre"
                  name="nombre"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  onChange={handleChange}
                  required={true}
                  id="telefono"
                  name="telefono"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required={true}
                  id="email"
                  name="email"
                />
              </Form.Group>

              <Button variant="success" size='sm' type="submit">
                Confirmar orden
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }

  
}
      
export default Cart
