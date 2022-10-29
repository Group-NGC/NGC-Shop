import React from 'react';
import carro from './jsonCarrito.json'
 const Carrito = () => {

    let total=0;
    return ( 
        <div>
            
            <h2>Carrito de compras</h2>
            
            <table className='tablaCarrito'>
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
            <footer className='totalCarrito'>
                <div>
                <p>Total a Pagar: ${total}</p>

                <button className='botonCarrito'>Finalizar compra</button>
                <button className='botonCarrito'>Cancelar</button>
                </div>
            </footer>
        </div>
     );
 }
  
 export default Carrito;