import React from 'react';
import producto from '../database/imports/Frutas_y_verduras.json'

const ListaAdmin = () => {
    return ( 
        <div>
            
            <h1>ListaAdmin producto</h1>

            <table className='tablaProducto'>
                <tbody>
                    <tr>
                        <th>Codigo del Producto</th>
                        <th>Imagen</th>
                        <th>Unidad Medida</th>
                        <th>Producto</th>
                        <th>Valor</th>
                    </tr>
                    {
                        producto.map((producto, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{producto.up}</td>
                                    <td><img src={producto.imagen} alt={producto.name} width={15}/></td>
                                    <td>{producto.c} </td>
                                    <td>{producto.name}</td>
                                    <td>${producto.d}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
     );
 }
  
 export default ListaAdmin;
