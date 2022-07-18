import React, { useContext } from 'react'
import portada from './imagenes/iniciologitech.gif'
import './css/StyleSlider.css'
import teclado from './imagenes/teclado.png'
import mouse from './imagenes/mouse.png'

import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { LoadBundleTask } from 'firebase/firestore';
import CartContextProvider from './CartContext'





const Slider = () => {      



  const slides = [
           {imagen: 'https://axa.com.ar/webaxa/7329-medium_default/kit-gamer-teclado-gamer-mouse-gamer-noga-nkb-300.jpg'  , title:'Teclado gamer', price: 3000},
           {imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/log-gpro_11-ca1b69ecb7c2d3e9ab15941547535331-1024-1024.png'  , title:'Teclado gamer', price: 3000},
           {imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/log-gpro_11-ca1b69ecb7c2d3e9ab15941547535331-1024-1024.png'  , title:'Teclado gamer', price: 3000},
           {imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/log-gpro_11-ca1b69ecb7c2d3e9ab15941547535331-1024-1024.png'  , title:'Teclado gamer', price: 3000},
           {imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/log-gpro_11-ca1b69ecb7c2d3e9ab15941547535331-1024-1024.png'  , title:'Teclado gamer', price: 3000},
           {imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/log-gpro_11-ca1b69ecb7c2d3e9ab15941547535331-1024-1024.png'  , title:'Teclado gamer', price: 3000},
           {imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/log-gpro_11-ca1b69ecb7c2d3e9ab15941547535331-1024-1024.png'  , title:'Teclado gamer', price: 3000},
           {imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/log-gpro_11-ca1b69ecb7c2d3e9ab15941547535331-1024-1024.png'  , title:'Teclado gamer', price: 3000},
          


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
            <img src={portada} className="d-block w-100" alt="..." />
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
                                     <h1>Productos Destacados </h1>
    
                   <div id='main-slider-container'>
                   
                   <BsChevronLeft size={40} className='slider-icon left' onClick={slideLeft} />
                   <div id='slider'>
                         {slides.map((slide, index)=>{
                             return(
                                <div className='slider-card' key={index}> 
                                      <div className='slider-card-image'style={{backgroundImage:`url(${slide.imagen})`}} ></div> 
                                      <div className='slider-card-title'>{slide.title}</div>
                                      <div className='slider-card-price'>{slide.price}</div>
                                </div>
                             )
                         })
                         }
                    </div>
                    <BsChevronRight size={40} className='slider-icon right' onClick={slideRight} />
                    
                   </div>
    
    
    </>
    
  )
}

export default Slider
