import logo from './logo.svg';
import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './Componets/NavBar'
import ItemCount from './Componets/ItemCount'
import ItemListContainer from './Containers/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Containers/ItemDetailContainers/ItemDetailContainer';
import Cart from './Componets/Cart';
import CartContextProvider from './Componets/CartContext';


function App() {
  return (
    <div >
      <CartContextProvider>
          <BrowserRouter>
             <NavBar menu={"GamerStore"}/>
            <Routes>
             <Route path='/' element={<ItemListContainer />} />
             <Route path='/category/:id' element={<ItemListContainer/>}/>
             <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
             <Route path='/cart' element={<Cart/>} />
               <Route path='*' element={<Navigate to='/' />} />
             </Routes>
             {/* <ItemCount stock={10} initial={1} /> */}
          </BrowserRouter>
        </CartContextProvider>
        

          
    </div>
  );
}

export default App;
