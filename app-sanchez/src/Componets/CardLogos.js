import React from 'react'
import './css/StyleCard.css'

const CardLogos = (props) => {
  return (
    <div className='card text-center'>
        <div className='overflow'>
            <img src={props.imgsrc} alt='image 1' className='card-img-top'/>
        </div>
        <div className='card-body text-dark'>
            <h4 className='card-title'> {props.title}</h4>
            <p className='card-text text-secondary'>
                {props.description}
            </p>
            <a href='#' className='btn btn-outline-success' >ver productos</a>
        </div>
    </div>
  )
}

export default CardLogos
