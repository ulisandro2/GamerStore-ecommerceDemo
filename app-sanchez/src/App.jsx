import React ,{ useState} from 'react';
import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom';
import './App.css';
import '../src/sass/app.scss'
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
import styled, {ThemeProvider} from 'styled-components'
 import Themes, { GlobalStyles} from './Componets/Theme/Themes'
import { Switch } from './Componets';
import Loading from './Componets/Loading';
import { Spinner } from 'react-bootstrap';

const StyledApp = styled.div`

`;









function App() {

  const [theme , setTheme] = useState('light');

// const themeToggler = () => {
//   theme === "light" ? setTheme('dark') : setTheme('light');
// }

 
  
  return (
    <div >
      <ThemeProvider theme={Themes[theme]}>
      <GlobalStyles/> 
      <CartContextProvider>
     
          <BrowserRouter >
             <NavBar />
             <Spinner color='dark' />
           {/* <StyledApp>xfjsdjofidsjfoisod</StyledApp> */}
           <Switch theme={theme} setTheme={setTheme} ></Switch>
            <Routes>
            <Route path='/' element={<Slider/>}/>
           
            <Route path='productos' element={<ItemListContainer/>}>
             <Route path='category/:id' element={<ItemListContainer/>}  />
             
          </Route>
            
             <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
             <Route path='/cart' element={<Cart/>} />
             <Route path='*' element={<Navigate to='/' />} />
             </Routes>
             
             <Sponsors/>
             
             <Footer/>
          
          </BrowserRouter>
          
        </CartContextProvider>
        </ThemeProvider>

          
    </div>
  );
}

export default App;
