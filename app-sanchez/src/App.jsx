import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './Componets/NavBar'
import ItemListContainer from './Containers/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Containers/ItemDetailContainers/ItemDetailContainer';
import Cart from './Componets/Cart';
import CartContextProvider from './Componets/CartContext';
import Slider from './Componets/Slider';
import 'boxicons';
import Footer from './Componets/Footer';




function App() {

  
  
  return (
    <div >
      <CartContextProvider>
          <BrowserRouter>
             <NavBar />
             
            <Routes>
            <Route path='/' element={<Slider/>}/>
            <Route path='productos' element={<ItemListContainer/>}>
             <Route path='category/:id' element={<ItemListContainer/>}  />
             </Route>
             {/* <Route path='productos/category/:id' element={<ItemListContainer/>} /> */}
             <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
             <Route path='/cart' element={<Cart/>} />
               <Route path='*' element={<Navigate to='/' />} />
             </Routes>
             <Footer/>
          
          </BrowserRouter>
        </CartContextProvider>
        

          
    </div>
  );
}

export default App;
