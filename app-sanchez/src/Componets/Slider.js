
import portada from './imagenes/iniciologitech.gif'
import './css/StyleSlider.css'
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import Cards from './Cards';








const Slider = () => {      





  const slides = [
           {imagen: 'https://firebasestorage.googleapis.com/v0/b/gamerstore-ecommerce.appspot.com/o/i3.png?alt=media&token=3f0fa42a-c2d8-4da2-a641-59f4f19a3442'  , title:'Procesador Intel Core i3-10105 BX8070110105 de 4 núcleos ', price: 23000},
           {imagen: 'https://firebasestorage.googleapis.com/v0/b/gamerstore-ecommerce.appspot.com/o/ram%2016gb.png?alt=media&token=2caf0036-ebc7-4849-9605-dfe8f5c0fe58'  , title:'Memoria RAM Fury Beast DDR4 gamer 16GB', price: 12000},
           {imagen: 'https://firebasestorage.googleapis.com/v0/b/gamerstore-ecommerce.appspot.com/o/log-gpro_21-501e073f6aca5f549015941547535680-1024-1024.png?alt=media&token=2d3c1496-e0ff-493f-8862-febc455c931f'  , title:'Teclado gamer Logitech Serie Pro G Pro', price: 15000},
           {imagen: 'https://firebasestorage.googleapis.com/v0/b/gamerstore-ecommerce.appspot.com/o/ODDkagq1vJm7Vb0w_setting_xxx_0_90_end_2000.png?alt=media&token=fb43c8a7-0582-4bac-b609-db0af6e54774'  , title:'Nvidia MSI Ventus GeForce RTX 20 Series ', price: 40500},
           {imagen: 'https://firebasestorage.googleapis.com/v0/b/gamerstore-ecommerce.appspot.com/o/ssd%201t.png?alt=media&token=7f12b2aa-39ac-4ab2-ad2d-4b5a35d2154c'  , title:'Disco Solido Ssd Colorful Sl300 128gb Sata 6gb 500mb/s Pc', price: 3400},
           {imagen: 'https://firebasestorage.googleapis.com/v0/b/gamerstore-ecommerce.appspot.com/o/ram%204gb.png?alt=media&token=aec4b879-61b7-4fea-b252-7ba2781f669a'  , title:'Memoria RAM ValueRAM color verde 4GB', price: 3500},
           {imagen: 'https://firebasestorage.googleapis.com/v0/b/gamerstore-ecommerce.appspot.com/o/g203-lilac-gallery-1.png?alt=media&token=5e544da3-2c07-4933-a978-050d0795cdcf'  , title:'Logitech G Series Lightsync G203', price: 4500},
           {imagen: 'https://firebasestorage.googleapis.com/v0/b/gamerstore-ecommerce.appspot.com/o/1645212338_1.png?alt=media&token=9f9a03ac-37c1-48ce-b123-635d7cc6e04c'  , title:'AMD ASRock Phantom Gaming RX 500', price: 43000},
          


  ]

  const slideLeft = () =>{
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  const slideRight = () =>{
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
    
  }

  return (
    <>
     
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <Link to='/productos'>   <img src={portada} className="d-block w-100" alt="..." /></Link>   
          </div>
          <div className="carousel-item">
            <img src={portada} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={portada} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>

        </button>
      </div>
    </div>


                           <h1 className='text-card'> Las mejores marcas</h1>


                            <Cards/>
 



             


                             <h1 id='tituloSlider'>Productos Destacados </h1>
    
                   <div id='main-slider-container'>
                   
                   <BsChevronLeft size={40} className='slider-icon left' onClick={slideRight} />
                   <div id='slider'>
                         {
                         slides.map((slide, index)=>{
                             return(
                              
                                <div className='slider-card' key={index}> 
                               <Link to='/productos'>
                                      <div id='slider-card-image'  style={{backgroundImage:`url(${slide.imagen})`}}></div> </Link> 
                                      <div className='slider-card-title'>{slide.title}</div>
                                      <div className='slider-card-price'>${slide.price}</div>
                                </div>
                                
                             )
                         })
                         }
                    </div>
                    <BsChevronRight size={40} className='slider-icon right' onClick={slideLeft} />
                    
                   </div>



               
    
                   
    </>
    
  )
}

export default Slider
