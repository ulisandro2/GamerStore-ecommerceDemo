import React from 'react'
import { Spinner } from 'react-bootstrap';
import './css/StyleLoading.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Loading = () => {
  return (
    <div className='divPadre'>
        <div className='divHijo'>
        <Spinner color='primary'></Spinner>
        </div>
    </div>
  )
}

export default Loading
