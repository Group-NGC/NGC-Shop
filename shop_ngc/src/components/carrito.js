import React, { useState } from 'react';
import carro from './jsonCarrito.json'
 const Carrito = () => {
    //variables
    let total = 0

    //useState
    let [tabla,setTabla]=useState(
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
            </footer>
        </div>
     );
 }
  
 export default Carrito;