import React ,{ useState} from 'react';
import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './Componets/NavBar'
import ItemListContainer from './Containers/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import ItemDetailContainer from './Containers/ItemDetailContainers/ItemDetailContainer';
import Cart from './Componets/Cart';
import CartContextProvider from './Componets/CartContext';
import Slider from './Componets/Slider';
import 'boxicons';
import Footer from './Componets/Footer';
import Sponsors from './Componets/Sponsors';
import {ThemeProvider} from 'styled-components'
import Themes, { GlobalStyles} from './Componets/Theme/Themes'
import { Switch } from './Componets';

import LikeContainer from './Componets/LikeContainer';


function App() {

  const [theme , setTheme] = useState('light');
 
  
  return (
    <div>
      <ThemeProvider theme={Themes[theme]}>
      <GlobalStyles/> 
      <CartContextProvider>
     
          <BrowserRouter >
             <NavBar />
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             
           
           {/* <Switch theme={theme} setTheme={setTheme} ></Switch> */}
            <Routes>
              {/* HOME */}
             <Route path='/' element={<Slider/>}/>
             {/* PRODUCTS  */}
             <Route path='productos' element={<ItemListContainer/>}>
             <Route path='category/:id' element={<ItemListContainer/>}  />
             
             </Route>
            {/* DETAIL */}
             <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
             {/* CART */}
             <Route path='/cart' element={<Cart/>} />
             <Route path='/like' element={<LikeContainer/>} />

             <Route path='*' element={<Navigate to='/' />} />
             
             </Routes>
             {/* SPONSORS */}
             <Sponsors/>
             {/* FOOTER */}
             <Footer/>
          
          </BrowserRouter>
          
        </CartContextProvider>
        </ThemeProvider>

          
    </div>
  );
}

export default App;
