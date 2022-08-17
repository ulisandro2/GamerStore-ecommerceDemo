import React from 'react'
import '../Componets/css/StyleFooter.css'
import {   MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBBtn
} from "mdb-react-ui-kit"


const Footer = () => {
  return (
    <div>
    

<MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
          <box-icon type='logo' name='facebook-square'></box-icon>
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
          <box-icon name='instagram' type='logo' ></box-icon>
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
          <box-icon name='google' type='logo' ></box-icon>
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
          <box-icon name='linkedin-square' type='logo' ></box-icon>
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <box-icon name='github' type='logo' ></box-icon>
          </a>

          
        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Subscribite para el  newsletter</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribirse
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            GamerStore es una empresa de venta de articulos sobre el gaming y todo sobre el rubro de computacion , nuestra vision es ser una empresa referente en argentina ofreciendo servicios y productos de la mejor calidad
          </p>
        </section>

       
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' >
          Uli
        </a>
      </div>
    </MDBFooter>
      
    </div>
  )
}

export default Footer