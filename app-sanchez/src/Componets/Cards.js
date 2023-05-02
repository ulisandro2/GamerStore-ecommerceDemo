import React, { Component } from 'react'
import CardLogos from './CardLogos'
import Amd from './imagenes/AmdCard.jpg'
import Intel from './imagenes/IntelCard.jpg'

import Razer from './imagenes/RazerCard.jpg'

class Cards extends Component{
    
    render(){
        return(
                 <div className='container-fluid d-flex justify-content-center'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <CardLogos imgsrc={Amd} title='AMD' description='Advanced Micro Devices, Inc. es una compañía estadounidense de semiconductores con sede en Santa Clara, California, que desarrolla procesadores de computación y productos tecnológicos similares de consumo.' />
                        </div>
                        <div className='col-md-4'>
                        <CardLogos  imgsrc={Intel} title='INTEL' description='Intel Corporation es el mayor fabricante de circuitos integrados del mundo según su cifra de negocio anual.​ La compañía estadounidense es la creadora de la serie de procesadores x86, los procesadores más comúnmente encontrados en la mayoría de las computadoras personales. ' />
                        </div>
                        <div className='col-md-4'>
                        <CardLogos  imgsrc={Razer} title='RAZER' description='Razer Inc., es una compañía de fabricación de hardware para videojuegos establecida en 2005 por el empresario de Singapur Min-Liang Tan y Robert Krakoff, después de obtener una gran inversión de Li Ka-shing y de Temasek Holdings de Singapur.​'  />
                        </div>
                        
                    </div>
                 </div>
        );
    }
}
export default Cards