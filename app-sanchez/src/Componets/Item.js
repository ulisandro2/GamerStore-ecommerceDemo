
import { Link } from "react-router-dom";
import styled from "styled-components";






const Item = ({producto}) =>  {

    



    return(
         <Container>
      {/* <div className="productos">
                <div className='producto'>

                    <div className="producto-imagen">
                        <img alt="producto" src={producto.img}></img>
                    </div>

                    <div className="producto-footer">
                        <h1>{producto.nombre} </h1>
                        <p>{producto.categoria}</p>
                        <p className="price">${producto.precio}</p>
                    </div>
                    <div className="buttom">
                        <Link to={`/detalle/${producto.id}`}>
                            <button className="btn">
                                Detalle
                            </button>
                        </Link>

                    </div>
                </div>
            </div>  */}

            {/* <div className='container-items'>
			
				<div className='item' key={producto.id}>
					<figure>
						<img src={producto.img}  />
					</figure>
					<div className='info-product'>
						<h2>{producto.nombre}</h2>
						<p className='price'>${producto.precio}</p>
						<button>
							Añadir al carrito
						</button>
					</div>
				</div>
		
		</div> */}


        <div className='wrapper'>
          <div className='card'>
            <img src={producto.img} alt="" className='card-img'/>
            <div className='card-body'>
              <h2 className='card-title'>{producto.name}</h2>
              {/* <p className='card-description'>{producto.categoria}</p> */}
              <h3 className='card-price'>{producto.precio}</h3>
              <Link style={{textDecoration:'none', listStyle:"none"}} to={`/detalle/${producto.id}`} >
              <button  className='card-btn'>Detalle</button>
              </Link>
            </div>
          </div>
          </div> 



          
         
          
        
            
                         
        </Container> 
    )

    
}


const Container = styled.div`


   
   @media screen and (max-width:500px) {

    
 

.card{
  box-shadow: 0 0 10px 5px ;
  border-radius: 0.2rem;
  max-width: 280px;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  
}

.card-img{
  width:1.7rem;
  height: 1.7rem;
  object-fit: cover;

}
.card-body{
  margin: 0.4rem;
  flex-grow:1;

}


.card-description{
  line-height: 1.2rem;
  font-size: 1rem;

}

.card-btn{
  /* border: none; */
  border-top: 1px solid black;
  /* background-color: transparent; */
  font-size: 0.7rem;
  font-weight: bold;
  color: black;
  width: 100%;
  padding-top:2rem ;
  margin-top: 1rem;
  cursor: pointer;
  text-decoration: none;
  list-style: none;
}

.card-title{
  line-height: 1rem;
  margin-bottom: 0.5rem;
  font-size: 14px;
}

.card-price{
  font-size: 0.8rem;
  margin-top: 1rem;

 

}

.card-price:before{
  content: '$';
  font-size: 1rem;
  position: relative;
  top: -0.3rem;
  padding-right: 0.1rem;
}


.card-btn:hover{
  color: blue;
 }
 
  
}




 
.card{
  
  border-radius: 0.2rem;
  width: 380px;
  margin-top: 60px;
  margin-left: 20px;
  height: 700px;
  
}
.card:hover{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}


.card-img{ 
    width: 80%;
    height: 300px;
	object-fit: cover;
	border-radius: 10px 10px 0 0;
	transition: all 0.5s;

}

.card-img:hover{
	transform: scale(1.1);
}
.card-body{
  margin: 3rem;
  flex-grow:1;

}

.card-body button{
	border: none;
	background: none;
	background-color: #000;
	color: #fff;
	padding: 15px 10px;
	cursor: pointer;
}


.card-description{
  line-height: 1.2rem;
  font-size: 2rem;

}

.card-btn{
    border: none;
	background-color: #000;
	color: #fff;
	padding: 15px 0;
	display: block;
	width: 100%;
	margin-top: 50px;
	
	font-family: inherit;
	cursor: pointer;
    font-size: 16px;
    transition: all .3s ease;
}

.card-title{
  line-height: 3rem;
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
}

.card-price{
  font-size: 1.6rem;
  margin-top: 1.2rem;

 

}

.card-price:before{
  content: '$';
  font-size: 1rem;
  position: relative;
  top: -0.3rem;
  padding-right: 0.1rem;
  
}


.card-btn:hover{
  color: rgb(86, 86, 90);
 }

 .carr-btn:hover{  
 background-color: #333;
  transform: scale(1.03);
  border-radius: 0;
 }
`

export default Item