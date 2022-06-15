let detail = {id:'1' , categoria: 'perifericos' , stock: '20'}

export const getFetchOne = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(detail)
        }, 3000);
    })
}