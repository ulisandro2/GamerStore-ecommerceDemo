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
          height:53px;
          border-radius:30px;
          /* background-color:${({theme})=> theme.toogle} ; */
          transition:0.4s all ease-in;
          
`;

export const ButtonSwitch = styled.button`
         
          cursor:pointer;
          /* left:${({position})=> (position ? '50px' : '5px')}; */
          /* background-color:${({theme})=> theme.toogle} ; */
          border:none;
          border-radius:50%;
          background: none;
          position:absolute;
          display: flex;
          font-size: 1.4rem;
          border-radius:30px;
          outline: none;
          transition: 0.4s all ease-in;
          bottom: 70px;
          left: 40px;

`;

