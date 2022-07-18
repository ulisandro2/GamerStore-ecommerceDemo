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
               producto.cantidad += cantidad;
               auxCart = [...cartList];
            }else{
               auxCart = [item, ...cartList];
            }

           setCartList(auxCart) 
  };

  // const addCarrito = (id,producto) => {
    
    
  //   const productos = producto 
  
  //   const check = cartList.every(producto =>{
  //     return producto.id !== id
  //   })
  //   if(check){
  //     const data = cartList.filter(producto => {
  //       return producto.id === id
  //     })  
  //      setCartList([...cartList, ...data])
  //   }else{
  //     alert('el producto se ha agragado')
  //   }
  // }

  const DelItem = (id) => {
    const items = cartList.filter((producto)=> producto.item.id !== id)
    return setCartList(items)
  }

  const IconCart = () => {
    return cartList.reduce((acum,i) => acum + i.cantidad ,0)
  }

  const PriceTotal = () => {
    return cartList.reduce((acum,i)=> acum + i.cantidad * i.producto.precio,0)
  }

  const IsInCart = (id) =>{
    return cartList&&cartList.some((i)=> i.producto.id  === id)
  }

  const EmptyCart = () =>{
    setCartList([])
  }

    return(
        <CartContext.Provider value={{AddToCart,cartList,EmptyCart,setCount, PriceTotal,IconCart,DelItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
