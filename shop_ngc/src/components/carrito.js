import React, { useState } from 'react';
import carro from './jsonCarrito.json'
 const Carrito = () => {
    //variables
    let total = 0

<<<<<<< HEAD
    let total=0;
    return ( 
        <div>
            
            <h2>Carrito de compras</h2>
            
            <table className='tablaCarrito'>
=======
    //useState
    let [tabla,setTabla]=useState(
        <table className='tablaCarrito'>
>>>>>>> 10687511e273bf9d8d5d91fa04829854dce6083a
                <tbody>
                    <tr>
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Valor</th>
                        <th>Total</th>
                    </tr>
                    {
                        carro.map((producto, index)=>{
                            total += producto.valor * producto.cantidad
                            return(
                                <tr key={index}>
                                    <td><img src={producto.imagen} alt={producto.descripcion} width={45}/></td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.nombre}</td>
                                    <td>${producto.valor}</td>
                                    <td>${producto.valor * producto.cantidad}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
<<<<<<< HEAD
            <footer className='totalCarrito'>
                <div>
                <p>Total a Pagar: ${total}</p>

                <button className='botonCarrito'>Finalizar compra</button>
                <button className='botonCarrito'>Cancelar</button>
                </div>
=======
    )
    let [msjTotal, setMsjTotal] = useState(<p>Total: ${total}</p>)
    
    //funciones
    let cancelar = () =>{
        total=0
        setMsjTotal(
            msjTotal = <p>Total: ${total}</p>
        )
        setTabla(
            tabla = <table className='tablaCarrito'>
                <tbody>
                    <tr>
                        <th>Carrito Vacío</th>
                    </tr>
                </tbody>
            </table>
        )
    }
    
    return ( 
        <div>
            
            <h2>Carrito de compras</h2>

            {tabla}
            <footer className='totalCarrito'>
                {msjTotal}

                <button className='botonCarrito' >Finalizar compra</button>
                <button className='botonCarrito'onClick={cancelar}>Cancelar</button>
>>>>>>> 10687511e273bf9d8d5d91fa04829854dce6083a
            </footer>
        </div>
     );
 }
  
 export default Carrito;