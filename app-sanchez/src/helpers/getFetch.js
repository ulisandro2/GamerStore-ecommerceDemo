const Listproducto = [
    { 
       id: '1',  
       nombre: 'Teclado', 
       description: 'teclado gamer', 
       stock: 40,
       
},


{ 
  id: '2',  
  nombre: 'Mouse', 
  description: 'mouse gamer', 
  stock: 30
}
]

export const getFetchOne = (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(Listproducto.find((producto)=> +producto.id ===id));
        }, 3000);
    })
}