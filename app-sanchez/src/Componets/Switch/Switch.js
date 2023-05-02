import React, { useState } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs';

import {SwitchContainer,SwitchWrapper,SwitchBGC,ButtonSwitch,} from './Switch.elements'


const Switch = (props) => {
  
  const [position ,setPosition] =useState(false);

  const changesPosition= () =>{
    setPosition(!position)
  }

  const changesMode = () => {
    if(props.theme === 'light') {
      props.setTheme('dark');
      changesPosition();
    }else{
      props.setTheme('light')
      changesPosition();
    }
  }


  let icono = props.theme === 'light' ? <BsSun/> : <BsMoon/>;
  let leyenda = props.theme === 'light' ? <h1 className='light'>Modo claro</h1> : <h1 className='dark'>Modo oscuro</h1>;
  
  return (
    <>
        <SwitchContainer>
       
            <SwitchWrapper>
            
                <SwitchBGC>
                
             <ButtonSwitch  onClick={() => changesMode()} position={position}>{icono}</ButtonSwitch>
            
            </SwitchBGC>
            {leyenda}
            </SwitchWrapper>
        </SwitchContainer>
    </>
  )
}

export default Switch
