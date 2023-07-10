import portada from './imgPng/banner3.jpg'
import banner from './imgPng/WEBBANNER.png'
import banner2 from './imgPng/BANNERGAMING2.jpg'
import './css/StyleSlider.css'
import { Link } from 'react-router-dom'
import Cards from './Cards';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import {BsMouse3Fill , BsMemory,BsCpuFill,BsGpuCard,BsMotherboard,BsDisplay,BsFillKeyboardFill} from 'react-icons/bs'
import {MdStorage} from 'react-icons/md'
import {BiHeadphone} from 'react-icons/bi'
import {GiConsoleController} from 'react-icons/gi'









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
          <Link to='/products'>   <img src={portada} id='fondo' className="d-block w-100" alt="..." /></Link>   
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


      <h1 className='text-card'> The best brands </h1>
                     

                     <Cards/>
  <br/>
  <br/>
  <br/>

          <section className='categories'>
            <div className='cont'>
              <h2 className='title-categories'>What are you looking for?</h2>
              <div className='cats'>
                <div className='colum'>
                 <Link style={{textDecoration:'none', listStyle:"none"}} to='/products/category/mouses'>
                    <div className='cat'>
                      <div className='svg-icon'>
                          <span> <BsMouse3Fill/></span> 
                      </div>
                      <div className='svg-text'>Mouses</div>
                    </div>
                  </Link>
                  <Link style={{textDecoration:'none', listStyle:"none"}} to='/products/category/processors'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <BsCpuFill/>
                      </div>
                      <div className='svg-text'>Processors</div>
                    </div>
                  </Link>   
               </div>
               <div className='colum'>
                 <Link style={{textDecoration:'none', listStyle:"none"}} to='/products/category/storage'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <MdStorage/>
                      </div>
                      <div className='svg-text'>Storage</div>
                    </div>
                  </Link>
                  <Link style={{textDecoration:'none', listStyle:"none"}} to='/products/category/ram'>
                    <div className='cat'>
                      <div className='svg-icon'>
                      <BsMemory/>
                      </div>
                      <div className='svg-text'>Memory Ram</div>
                    </div>
                  </Link>   
               </div>
               <div className='colum'>
                 <Link style={{textDecoration:'none', listStyle:"none"}} to='/products/video boards'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <BsGpuCard/>
                      </div>
                      <div className='svg-text'>Video Boards</div>
                    </div>
                  </Link>
                  <Link style={{textDecoration:'none', listStyle:"none"}} to='/products/category/console'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <GiConsoleController/>
                      </div>
                      <div className='svg-text'>Consoles</div>
                    </div>
                  </Link>   
               </div>
               <div className='colum'>
                 <Link style={{textDecoration:'none', listStyle:"none"}} to='/products/category/motherboards'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <BsMotherboard/>
                      </div>
                      <div className='svg-text'>Motherboards</div>
                    </div>
                  </Link>
                  <Link style={{textDecoration:'none', listStyle:"none"}} to='/products/category/keyboards'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <BsFillKeyboardFill/>
                      </div>
                      <div className='svg-text'>Keyboards</div>
                    </div>
                  </Link>   
               </div>
               <div className='colum'>
                 <Link style={{textDecoration:'none', listStyle:"none"}} to='/products/category/headphones'>
                    <div className='cat'>
                      <div className='svg-icon'>
                        <BiHeadphone/>
                      </div>
                      <div className='svg-text'>Headphones</div>
                    </div>
                  </Link>
                  <Link style={{textDecoration:'none', listStyle:"none"}} to='/products'>
                    <div className='cat'>
                      <div className='svg-icon'>
                         <BsDisplay/>
                      </div>
                      <div className='svg-text'>Displays</div>
                    </div>
                  </Link>   
               </div>
               
              </div>
            </div>
          </section>

 

          
          <div id='about' className='text-about'>
              <h1 className='titleAbout'>About</h1>
              <p className='text-p'>Our company was founded in 2020 with the goal of offering video game lovers the best products and services in the market. From the beginning, we focused on offering state-of-the-art hardware and high quality peripherals to enhance the gaming experience of our customers.

In 2021 we opened our first store in Argentina and quickly became a reference in the local market thanks to our wide selection of products and our commitment to customer satisfaction. Our customers valued our personalized attention and our ability to offer them the latest news in the gamer world.

Over time, we expanded our presence in other countries in the region and our brand became synonymous with quality and excellence. Our most popular products include processors, keyboards and video cards, which have evolved over time to adapt to the changing needs of our customers.

In 2023, we received the "Best Gamer Products Sales Website" award for our excellence in customer service and our ability to offer innovative and high quality products. This recognition filled us with pride and motivated us to continue working hard to stay at the forefront of the gamer market.

Today, we remain committed to our mission of providing our customers with the best gamer products on the market. We continue to expand and improve every day to provide a unique experience to all those who share our passion for video games.
              </p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h2 className='title2'>Frequent Questions </h2>
              <MDBAccordion borderless  initialActive={1}>
      <MDBAccordionItem  collapseId={1} headerTitle='What happens if I receive a damaged product?'>
      If a product arrived to you damaged or defective, do not worry! All our products are guaranteed for 2 years, in case you have a defective product, simply contact us at the following email 
       simply contact the following email 'GStoreContact@gmail.com' and inform the product and information, and one of our agent will be contacting you to solve your problem.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='What are the payment methods?'>
      From any of our stores we accept cash, market payment, bank transfer, debit and credit and even cryptocurrencies. But if you buy on our website, we accept market payment as debit and credit. 
      If you have any doubt about how to pay do not hesitate to talk to support.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='How do I manage the shipment of my product?'>
      Once you place your order with the selected products, after payment, you will be sent an email with the steps to follow, where you will be asked for your zip code to calculate the shipping cost. We currently ship all over the country through Oca and Andreani. Please note that, to calculate the shipping cost, we take into consideration both the dimensions and weight of the package and the distance from the delivery location.
      </MDBAccordionItem>
    </MDBAccordion>
         </div>

     <h1 className='titleSlider'>Sponsors </h1>
    


               
    
                   
    </>
    
  )
}

export default Slider
