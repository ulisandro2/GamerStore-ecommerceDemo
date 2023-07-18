import React from 'react'
import '../Componets/css/StyleFooter.css'
import styled from 'styled-components'
import {AiOutlineWhatsApp, AiOutlineInstagram,AiFillFacebook,AiOutlineMail} from 'react-icons/ai'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <ContainerFooter>
         <footer>
          <div className='footer-content'>
            <h1>GamerStore</h1>
            <div className='footer-social-media'>
              <a href='#' className='footer-link' id='whatsapp'>
                <AiOutlineWhatsApp/>
              </a>
              <a href='#' className='footer-link' id='facebook'>
                <AiFillFacebook/>
              </a>
              <a href='#' className='footer-link' id='instagram'>
                <AiOutlineInstagram/>
              </a>
            </div>

            <ul className='footer-list'>
              <li>
                <h3>Blog</h3>
              </li>
              <li>
                <Link style={{textDecoration:'none'}} to='/' className='footer-link'>Home</Link>
              </li>
              <li>
              <Link style={{textDecoration:'none'}} to='/Products' className='footer-link'>Products</Link>
              </li>
              <li>
              <Link style={{textDecoration:'none'}} to='/cart' className='footer-link'>Cart</Link>
              </li>
            </ul>

            <ul className='footer-list'>
              <li>
                <h3>Products</h3>
              </li>
              <li>
              <Link style={{textDecoration:'none'}} to='/Products/category/processors' className='footer-link'>Processors</Link>
              </li>
              <li>
              <Link style={{textDecoration:'none'}} to='/Products/category/headphones' className='footer-link'>Headphones</Link>
              </li>
              <li>
              <Link style={{textDecoration:'none'}} to='/Products/category/video boards' className='footer-link'>Video Boards</Link>
              </li>
              <li>
              <Link style={{textDecoration:'none'}} to='/Products/category/keyboards' className='footer-link'>Keyboars</Link>
              </li>
              <li>
              <Link style={{textDecoration:'none'}} to='/Products/category/mouses' className='footer-link'>Mouses</Link>
              </li>
              <li>
              <Link style={{textDecoration:'none'}} to='/Products/category/motherboards' className='footer-link'>Motherboars</Link>
              </li>
            </ul>

            <div className='footer-susbscribe'>
              <h3>Subscribe</h3>

              <p>Enter your e-mail address to subscribe to the newsletter</p>

               <div id='input-group'>
                <input type='email' id='email'/>
                <button>
                  <AiOutlineMail/>
                </button>
               </div>

            </div>


          </div>

          <div className='footer-copyright'>
            @
            2023 All rights reserver|Uli
          </div>
         </footer>


      
    </ContainerFooter>
  )
}

const ContainerFooter =styled.div`
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 letter-spacing: 1px;

 footer{
  width: 100%;
  color: #f5f5f5;
 }


 .footer-content{
  background-color: #171717;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  padding: 3rem 3.5rem;

 }

 .footer-contacts h1{
  margin-bottom: 0.75rem;

 }

 .footer-social-media{
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
 }

 .footer-social-media .footer-link{
  height: 2.5rem;
  width: 2.5rem;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.4s;
 }

 .footer-social-media .footer-link:hover{
  opacity: 0.8;
 }

 #instagram{
  background: linear-gradient(#7f37c9 , #ff2992 , #ff9807);
 }


 #whatsapp{
  background-color: #25d366;
 }

 #facebook{
  background-color: #4267b3;
 }
 
 .footer-link svg{
  font-size: 1.55rem;
 }


 .footer-list{
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
  text-decoration: none;
 }

 .footer-list .footer-link{
  color:gray;
  text-decoration: none;
  transition: all 0.4s;
 }

 .footer-list .footer-link:hover{
  color: #7f37c9;
 }


 .footer-susbscribe{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
 }

 .footer-susbscribe p{
  color: gray;
 }

 #input-group{
  display: flex;
  align-items: center;
  background-color: #0e0c0c;
  border-radius: 4px;
 }

 #input-group input{
  all: unset;
  padding: 0.75rem;
  width: 100%;
 }

 #input-group button{
  background-color: #7f37c9;
  border: none;
  color: #f5f5f5;
  padding: 0px 1.25rem;
  font-size: 1.125rem;
  height: 100%;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
  transition: all 0.4s;
 }

 #input-group button:hover{
  opacity: 0.8;
 }


 .footer-copyright{
  display: flex;
  justify-content: center;
  background-color: #0e0c0c;
  font-size: 0.9rem;
  padding: 1.5rem;
  font-weight: 100;
 }


 @media screen and (max-width:768px) {
  .footer-content{
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
 }


 @media screen and (max-width:428px) {
  .footer-content{
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
  
 }


`


export default Footer
