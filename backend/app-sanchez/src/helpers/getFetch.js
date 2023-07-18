const Listproducto = [
    { 
       id: 1,  
       nombre: 'Teclado', 
       description: 'teclado gamer', 
       stock: 40,
       precio:1500
       
},


{ 
  id: 2,  
  nombre: 'Mouse', 
  description: 'mouse gamer', 
  stock: 30,
  precio:3000
}
]

export const getFetchOne = (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(Listproducto.find((producto)=> +producto.id ===id));
        }, 3000);
    })
}