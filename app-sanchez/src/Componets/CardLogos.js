
import { Link } from 'react-router-dom'
import './css/StyleCard.css'


const CardLogos = (props) => {


 
 
 
 
  return (
    <div  className='card text-center '>
        <div className='overflow'>
            <img src={props.imgsrc} alt='image 1' className='card-img-top'/>
        </div>
        <div id='card-bgc' className='card-body text-dark'>
            <h4 id='card-name' className='card-title'> {props.title}</h4>
            <p id='card-descripcion' className='card-text text-secondary'>
                {props.description}
            </p>
        <Link to='/productos' >  <a href='#' className='btn btn-outline-success' >Ver productos</a> </Link>
        </div>
    </div>
  )
}

export default CardLogos
