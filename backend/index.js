const express = require('express');
const morgan = require('morgan');
const mercadopago = require('mercadopago');
require('dotenv').config()
const admin = require('firebase-admin')
const PORT = process.env.PORT || 3000
const path = require('path')
const mainRoutes = require('./routes/mainRoutes')

// server.set('view engine', 'ejs') 
const server = express()

server.use(express.json())
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use((_req, res,next)=>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type,Accept,Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST , OPTIONS , HEAD, PUT')
    next()
})


server.use(express.static(path.resolve(__dirname,'./app-sanchez/build')))

server.get("/api" , (req,res)=>{
    res.json({message:'Hola react'})
})

server.get('*',(req,res)=>{
     res.sendFile(path.resolve(__dirname, 'app-sanchez','build',  'index.html'))
   
})

let serviceAccount = require('./gamerstore-ecommerce-firebase-adminsdk-c55a1-eb6035a919.json')

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    dataBaseUrl:'http://gamerstore-ecommerce.firebaseio.com'
})

const db = admin.firestore()

// server.use('/', mainRoutes)



mercadopago.configure({access_token:process.env.MERCADOPAGO_KEY})
server.post('/payment' , async (req,res)=>{
    // const data = db.collection('items').get()
    
    // const listProducts =  data.docs.map(item => ({id:item.id, datos:item.data()}))
    // listProducts = req.body
     
    
    
    // let productCheck = .map((item)=>{
    //     return {
    //         title:item.name,
    //         unit_price:item.precio,
    //         quantity:1
    //     }
    // })

        // let dataKeys = Object.keys(dataBase)
    // console.log(dataBase.docs[0].data())
    
//     let listProducts = dataBase.docs.map(item => {
//         return { 
//        title:item.name,
//        unit_price:item.precio,
//        quantity:1
//         }
//         })
     
//     listProducts = req.body

//    console.log(listProducts)

    const ids = req.body
     const dataBase = await db.collection("items").get()
   const products = dataBase.docs.map(doc =>({
    
    id:doc.id, 
    title:doc.data().name,
    quantity:1,
    unit_price:doc.data().precio,
    currency_id:'ARS',
    

}))
 

  console.log(products)
         

    let preference = {
        
    items: [{
        title:'Donacion',
        unit_price:100,
        quantity:1
    }]
    ,
         back_urls:{
            success:'http://localhost:3000'
         },
         auto_return:'approved',
         binary_mode:true,
    }

  
    
    mercadopago.preferences.create(preference).then((response)=> res.status(200).send({response})).catch((error)=> res.status(400).send({error:error.message}))
    
})

server.listen(PORT,  ()=>{
    console.log('listening', PORT)
    
})