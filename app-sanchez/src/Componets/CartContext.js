import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);
export const UseCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
         
  const [cartList , setCartList] = useState([])
  const [count , setCount] = useState(1)
  const [like , setLike] =useState([])

  
  const AddToCart = (quantity , product) =>{
            
        let item = {product,quantity};
        let auxCart= [];

         
            if(IsInCart(product.id)){
               item = cartList.find(e => e.product.id === product.id);
               product.quantity += quantity;
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
    const items = cartList.filter((product) => product.id == id);
    return setCartList(items);
  }

  const IconCart = () => {
    return cartList.reduce((acum,i) => acum + i.quantity ,0)
  }

  const PriceTotal = () => {
    return cartList.reduce((acum,i)=> acum + i.quantity * i.product.price,0)
  }

 const IsInLike = (id) => {
  return like&&like.some((i)=> i.product.id === id)
 }


  const IsInCart = (id) =>{
    return cartList&&cartList.some((i)=> i.product.id  === id)
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
