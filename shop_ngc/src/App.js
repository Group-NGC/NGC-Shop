import './styles/App.css';
import React from 'react';
import Barra from './components/barraNav';

function App() {
  
  return (
    <div className="App">
      <Barra 
      msjlstadm="Lista Productos (admin)" 
      msjmod="Modificar Producto" 
      msjventas="Lista Ventas" 
      msjlstcli="Lista Productos (cliente)" 
      msjcarrito="Carrito"
      msjrepdf="pdf"
      ></Barra>
     
    </div>
  );
}

export default App;