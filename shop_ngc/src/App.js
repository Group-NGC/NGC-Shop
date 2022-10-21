import './App.css';
import React from 'react';
import styled from 'styled-components'
import {NavLink, Routes, Route} from 'react-router-dom'
import Componente1 from './components/componente1';
import Componente2 from './components/componente2';

function App() {
  return (
    <div className="App">
      <Contenedor>
       <Menu>
          <NavLink to="/">Lista productos</NavLink>
          <NavLink to="/carrito" >Carrito</NavLink>
        </Menu>
        <main>
          <Routes>
            <Route path="/" element={<Componente1/>}></Route>
            <Route path="/carrito" element={<Componente2/>}></Route>
            
          </Routes>
        </main>
        <aside>
          <h3>Carrito de compras</h3>
        </aside>
      </Contenedor>
    </div>
  );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
