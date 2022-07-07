import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);
export const UseCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
         
  const [cartList , setCartList] = useState([])
  const [count , setCount] = useState(1)

  
  const AddToCart = (cantidad , producto) =>{
            
        let item = {producto,cantidad};
        let auxCart= [];

         
            if(IsInCart(producto.id)){
               item = cartList.find(e => e.producto.id === producto.id);
               auxCart = [...cartList];
            }else{
               auxCart = [item, ...cartList];
            }

           setCartList(auxCart) 
  }

  const IsInCart = (id) =>{
    return cartList&&cartList.some((i)=> i.producto.id === id)
  }

  const EmptyCart = () =>{
    setCartList([])
  }

    return(
        <CartContext.Provider value={{AddToCart ,cartList,EmptyCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
