import portada from './imgPng/banner3.jpg'
import banner from './imgPng/WEBBANNER.png'
import banner2 from './imgPng/BANNERGAMING2.jpg'
import './css/StyleSlider.css'
import { Link } from 'react-router-dom'
import Cards from './Cards';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import {BsMouse3Fill , BsMemory,BsCpuFill,BsGpuCard,BsMotherboard,BsPcDisplayHorizontal} from 'react-icons/bs'
import {CiFloppyDisk} from 'react-icons/ci'
import {GiGameConsole,GiPowerGenerator} from 'react-icons/gi'
import {FiMonitor} from 'react-icons/fi'








const Slider = () => {      




  return (
    <>
     
    <div>
      <div id="carouselExampleIndicators" className="carousel slide fondo"  data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <Link to='/productos'>   <img src={portada} id='fondo' className="d-block w-100" alt="..." /></Link>   
          </div>
          <div className="carousel-item">
            <img src={banner} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>

        </button>
      </div>
    </div>


      <h1 className='text-card'> Las mejores marcas</h1>
                     

                     <Cards/>


          <section className='categories'>
            <div className='cont'>
              <h2>Que estas buscando?</h2>
              <div className='cats'>
                <div className='colum'>
                 <Link style={{textDecoration:'none', listStyle:"none"}} to='/productos'>
                    <div className='cat'>
                      <div className='svg-icon'>
                          <span> <BsMouse3Fill/></span> 
                      </div>
                      <div className='svg-text'>Perifericos</div>
                    </div>
                  </Link>
                  <Link style={{textDecoration:'none', listStyle:"none"}} to='/productos'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <BsCpuFill/>
                      </div>
                      <div className='svg-text'>Procesadores</div>
                    </div>
                  </Link>   
               </div>
               <div className='colum'>
                 <Link style={{textDecoration:'none', listStyle:"none"}} to='/productos'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <CiFloppyDisk/>
                      </div>
                      <div className='svg-text'>Almacenamiento</div>
                    </div>
                  </Link>
                  <Link style={{textDecoration:'none', listStyle:"none"}} to='/productos'>
                    <div className='cat'>
                      <div className='svg-icon'>
                      <BsMemory/>
                      </div>
                      <div className='svg-text'>Memoria Ram</div>
                    </div>
                  </Link>   
               </div>
               <div className='colum'>
                 <Link style={{textDecoration:'none', listStyle:"none"}} to='/productos'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <BsGpuCard/>
                      </div>
                      <div className='svg-text'>Placas De video</div>
                    </div>
                  </Link>
                  <Link style={{textDecoration:'none', listStyle:"none"}} to='/productos'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <GiGameConsole/>
                      </div>
                      <div className='svg-text'>Consolas</div>
                    </div>
                  </Link>   
               </div>
               <div className='colum'>
                 <Link style={{textDecoration:'none', listStyle:"none"}} to='/productos'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <BsMotherboard/>
                      </div>
                      <div className='svg-text'>Motherboards</div>
                    </div>
                  </Link>
                  <Link style={{textDecoration:'none', listStyle:"none"}} to='/productos'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <FiMonitor/>
                      </div>
                      <div className='svg-text'>Monitores</div>
                    </div>
                  </Link>   
               </div>
               <div className='colum'>
                 <Link style={{textDecoration:'none', listStyle:"none"}} to='/productos'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <GiPowerGenerator/>
                      </div>
                      <div className='svg-text'>Fuentes</div>
                    </div>
                  </Link>
                  <Link style={{textDecoration:'none', listStyle:"none"}} to='/productos'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <BsPcDisplayHorizontal/>
                      </div>
                      <div className='svg-text'>Nootebooks</div>
                    </div>
                  </Link>   
               </div>
               
              </div>
            </div>
          </section>



          
          <div className='text-about'>
              <h1 className='titleAbout'>About</h1>
              <p className='text-p'>Nuestra empresa fue fundada en el año 20XX con el objetivo de ofrecer a los amantes de los videojuegos los mejores productos y servicios del mercado. Desde el principio, nos enfocamos en ofrecer hardware de última generación y periféricos de alta calidad para mejorar la experiencia de juego de nuestros clientes.

En el año 20YY abrimos nuestro primer local en Argentina y rápidamente nos convertimos en un referente en el mercado local gracias a nuestra amplia selección de productos y nuestro compromiso con la satisfacción del cliente. Nuestros clientes valoraban nuestra atención personalizada y nuestra capacidad para ofrecerles las últimas novedades en el mundo gamer.

Con el tiempo, fuimos expandiendo nuestra presencia en otros países de la región y nuestra marca se convirtió en sinónimo de calidad y excelencia. Nuestros productos más populares incluyen [nombre del producto], [nombre del producto] y [nombre del producto], que han evolucionado a lo largo del tiempo para adaptarse a las necesidades cambiantes de nuestros clientes.

En el año 20ZZ recibimos el premio [nombre del premio] por nuestra excelencia en el servicio al cliente y nuestra capacidad para ofrecer productos innovadores y de alta calidad. Este reconocimiento nos llenó de orgullo y nos motivó a seguir trabajando duro para mantenernos a la vanguardia del mercado gamer.

Hoy en día, seguimos comprometidos con nuestra misión de ofrecer a nuestros clientes los mejores productos gamer del mercado. Seguimos expandiéndonos y mejorando cada día para brindar una experiencia única a todos aquellos que comparten nuestra pasión por los videojuegos.
              </p>
              <h2 className='title2'>Preguntas Frecuentes</h2>
              <MDBAccordion flush initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle='Que pasa si me llega un producto dañado?'>
       Si un producto le llego golpeado, dañado o defectuoso no se preocupe!! Todos nuestros productos tienen garantia de 2 años , en caso de tener un producto defectuoso 
       simplemente contacte con el siguiete mail(GamerStoreContact@gmail.com) e informe el producto y la informacion , y un agente nuestro lo estara contactando con usted para resolver su problema.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </MDBAccordionItem>
    </MDBAccordion>
         </div>

     <h1 className='titleSlider'>Todas las marcas </h1>
    


               
    
                   
    </>
    
  )
}

export default Slider
