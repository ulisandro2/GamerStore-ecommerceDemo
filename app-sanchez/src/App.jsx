import logo from './logo.svg';
import './App.css';
import NavBar from './Componets/NavBar'
import ItemCount from './Componets/ItemCount'
import ItemListContainer from './Containers/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Componets/Item';
import ItemDetailContainer from './Containers/ItemDetailContainers/ItemDetailContainer';


function App() {
  return (
    <div >
          
          <NavBar menu={"GamerStore"}/>
          <ItemCount stock={10} initial={1} />
          <ItemListContainer />
          <ItemDetailContainer/>
        

          
    </div>
  );
}

export default App;
