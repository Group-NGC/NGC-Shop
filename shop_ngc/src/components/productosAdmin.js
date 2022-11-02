import React from 'react';
import data from './jsonProductos.json';
import '../styles/styleProductosList.css';


const ListaAdmin = () => {
    return ( 
        <div className = 'ContenedorProductos'>
            
            {data.map((produc, index)=> {
                return(
                    <div key ={index} className='Producto'>
                         <img className='img' src={produc.imagen} alt={produc.descripcion}  />
                        <p className= 'product_nombre'>{produc.nombre}</p>
                        <p className ='product_valor'>${produc.valor}</p>
                        <p className ='prodct_stock'>Stock: {produc.stock}</p>
                    </div>
                )
            }  
            
            )}      
        </div>

        
     );
}
 
export default ListaAdmin;