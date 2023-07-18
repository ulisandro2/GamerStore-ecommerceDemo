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
                            <CardLogos imgsrc={Amd} title='AMD' description='Advanced Micro Devices, Inc. is an American semiconductor company based in Santa Clara, California, that develops computer processors and similar consumer technology products.' />
                        </div>
                        <div className='col-md-4'>
                        <CardLogos  imgsrc={Intel} title='INTEL' description='Intel Corporation is the worlds largest manufacturer of integrated circuits by annual turnover. The U.S. company is the creator of the x86 series of processors, the processors most commonly found in most personal computers. ' />
                        </div>
                        <div className='col-md-4'>
                        <CardLogos  imgsrc={Razer} title='RAZER' description='Razer Inc. is a video game hardware manufacturing company established in 2005 by Singaporean entrepreneur Min-Liang Tan and Robert Krakoff, after securing a large investment from Li Ka-shing and Temasek Holdings of Singapore.​'  />
                        </div>
                        
                    </div>
                 </div>
        );
    }
}
export default Cards