import { Component } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
    < NavBar />
    <ItemListContainer greeting={'Bienvenido a tu tienda'}>
      <button> Lacteos</button>
      <button> Carnes</button>
      <button> Panadería</button>
      <button> Chocolates</button>
    </ItemListContainer>
    </>
  );
}

export default App;
