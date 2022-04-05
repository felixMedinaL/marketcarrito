import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter'
import {useState} from 'react'

const App = () => {
  const [show, setShow] = useState(true)

  const addProduct = (quantity) => {
    console.log(`Se agregó al carrito ${quantity} productos`);
  }

  return (
    <>
    < NavBar />
    <ItemListContainer greeting={'Bienvenido a tu tienda'}>
      <button> Lacteos</button>
      <button> Carnes</button>
      <button> Panadería</button>
      <button> Chocolates</button>
    </ItemListContainer>
    { show ? < Counter initial={0} stock={20} onAdd={addProduct} /> : null }
    </>
  );
}

export default App;
