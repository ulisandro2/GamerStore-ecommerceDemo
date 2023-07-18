import React, { useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'

const ItemLike = ({onLike,producto}) => {
     
    const [like , setLike] = useState()

    const Agregar = ()=>{
        if(like)setLike({...producto})
    }

    const AgregarItemLike = () =>{
        onLike(like)
    }

  return (
    <div onClick={Agregar}>
        <button className='btnIcon' onClick={AgregarItemLike}>
        <AiFillHeart size={27} color='white' className='icon' />
        </button>
    </div>
  )
}

export default ItemLike