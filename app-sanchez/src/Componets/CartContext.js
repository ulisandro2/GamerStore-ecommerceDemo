import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);
export const UseCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
         
  const [cartList , setCartList] = useState([])
  const [count , setCount] = useState(1)
  const [like , setLike] =useState([])

  
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

 
// const AddToLike = (producto) => {
//       if(IsInLike(producto.id)){
//         setLike(like.map(producto=>{
//           return producto.id === producto.id ? {...producto} : producto
//         }))

//       }else{
//         setLike([...like,{...producto}])
//       }
// }

const AddToLike = ( producto) =>{
            
  let item = {producto};
  let auxCart= [];

   
      if(IsInLike(producto.id)){
         item = cartList.find(e => e.producto.id === producto.id);
         
         auxCart = [...cartList];
      }else{
         auxCart = [item, ...cartList];
      }

     setLike(auxCart) 
};
  

  const DelItem =(id) => {
    const items = cartList.filter((producto) => producto.id == id);
    return setCartList(items);
  }

  const IconCart = () => {
    return cartList.reduce((acum,i) => acum + i.cantidad ,0)
  }

  const PriceTotal = () => {
    return cartList.reduce((acum,i)=> acum + i.cantidad * i.producto.precio,0)
  }

 const IsInLike = (id) => {
  return like&&like.some((i)=> i.producto.id === id)
 }


  const IsInCart = (id) =>{
    return cartList&&cartList.some((i)=> i.producto.id  === id)
  }

  const EmptyCart = () =>{
    setCartList([])
  }

  
    return(
        <CartContext.Provider value={{AddToCart,cartList,EmptyCart,setCount, PriceTotal,IconCart,DelItem,count,AddToLike,like}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
