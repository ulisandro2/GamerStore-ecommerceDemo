import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

export const SwitchContainer = styled.div`
          width:100%;
          background-color: ${({theme})=> theme.body};
          transition:0.4s all ease-in;
    

         
`;


export const SwitchWrapper = styled.div`
          width:100%;
          max-width:1300px;
          margin:auto;
          padding:1rem;
          display:flex;
          flex-wrap:wrap;
          flex-direction:row-reverse;
          padding-right:2rem;
`;


export const SwitchBGC = styled.div`
          width:90px;
          position:relative;
          height:40px;
          border-radius:30px;
          background-color:${({theme})=> theme.toogle} ;
          transition:0.4s all ease-in;
          
`;

export const ButtonSwitch = styled.button`
          width:37px;
          cursor:pointer;
          left:${({position})=> (position ? '50px' : '5px')};
          border:none;
          border-radius:50%;
          background-color:#fff;
          position:absolute;
          height:37px;
          border-radius:30px;
          outline: none
          transition: 0.4s all ease-in;

`;

