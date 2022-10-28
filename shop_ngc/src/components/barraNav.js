import React, { useState } from 'react';
import Carrito from './carrito';
import Modificar from './modificar';
import ListaAdmin from './productosAdmin';
import ListaCliente from './productosCliente';
import Ventas from './ventas';


const Barra = (props) => {
    let [mensaje, setMensaje] = useState(<></>)
    let lstAdmin = () => {setMensaje(mensaje = <ListaAdmin/>)}
    let modificar = () => {setMensaje(mensaje = <Modificar/>)}
    let ventas = () => {setMensaje(mensaje = <Ventas/>)}
    let lstClient = () => {setMensaje(mensaje = <ListaCliente/>)}

    let carrito = () => {setMensaje(mensaje = <Carrito/>)}
    

    return ( 
        <>
            <nav className='Menu'>
                <button onClick={lstAdmin}>{props.msjlstadm}</button>
                <button onClick={modificar}>{props.msjmod}</button>
                <button onClick={ventas}>{props.msjventas}</button>
                <button onClick={lstClient}>{props.msjlstcli}</button>
                <button onClick={carrito}>{props.msjcarrito}</button>
               
            </nav>
            <main>
                {mensaje}
            </main>
        </>
     );
}
 
export default Barra;