import React from 'react';
import datos from './productos.json'
 const Carrito = () => {
    let carrito = [];
    
    for(let i=0; i<5;i++){
        carrito.push(datos[i])
    }
    
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
                    <tr>
                        <td><img src='https://cdn-icons-png.flaticon.com/512/1625/1625099.png' alt='Imagen producto' width={45}/></td>
                        <td>2</td>
                        <td>Fruta</td>
                        <td>$50</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td><img src='https://cdn-icons-png.flaticon.com/512/1625/1625099.png' alt='Imagen producto' width={45}/></td>
                        <td>1</td>
                        <td>Vegetal</td>
                        <td>$50</td>
                        <td>$50</td>
                    </tr>
                </tbody>


                {/* <h3>Carrito de compras</h3>
                {carrito.length > 0 ?
            carrito.map((producto, index)=>{
                return(
                    <div className='Producto' key={index}>
                        <p>{producto.name}</p>
                    </div>
                )
            })
            :
            <p>Carrito Vacío</p>    
            } */}
            </table>
            <footer className='totalCarrito'>
                <p>Total: $</p>

                <button className='botonCarrito'>Finalizar compra</button>
                <button className='botonCarrito'>Cancelar</button>
            </footer>
        </div>
     );
 }
  
 export default Carrito;