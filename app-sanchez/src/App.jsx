import logo from './logo.svg';
import './App.css';
import NavBar from './Componets/NavBar'
import ItemCount from './Componets/ItemCount'


function App() {
  return (
    <div >
          
          <NavBar menu={"marbasi"}/>
          <ItemCount stock={10} initial={1} />
          
    </div>
  );
}

export default App;
