import React, { useState } from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import {SwitchContainer,SwitchWrapper,SwitchBGC,ButtonSwitch,} from './Switch.elements'
import styled from 'styled-components';


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


  let icono = props.theme === 'light' ?  <BsFillMoonFill/>:<span className='sun'> <BsFillSunFill/></span>;
  // let leyenda = props.theme === 'light' ? <h1 className='light'>Modo claro</h1> : <h1 className='dark'>Modo oscuro</h1>;
  
  return (
    <>
    <Container>
        <SwitchContainer>
       
            <SwitchWrapper>
            
                <SwitchBGC>
                
             <ButtonSwitch  onClick={() => changesMode()} position={position}>{icono}</ButtonSwitch>
            
            </SwitchBGC>
            {/* {leyenda} */}
            </SwitchWrapper>
        </SwitchContainer>
        </Container>
    </>
  )
}

const Container=styled.div`
.sun{
  color: white;
}

`

export default Switch
