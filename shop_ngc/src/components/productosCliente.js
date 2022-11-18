import data from "./jsonProductos.json";
import "../styles/styleProductosList.css";
import { useState } from "react";
import carrito from "./jsonCarrito.json"

const ListaCliente = () => {
  let [cantidadArr, setCantidadArr] = useState(() =>
    new Array(data.length).fill(0)
  );
  return (
    <div className="ContenedorProductos">
      {data.map((produc, index) => {
        return (
          <div key={index} className="Producto">
            <img className="img" src={produc.imagen} alt={produc.descripcion} />
            <p className="product_nombre">{produc.nombre}</p>
            <p className="product_valor">${produc.valor}</p>
            <p className="prodct_stock">Stock: {produc.stock}</p>
            <div className="btns">
              <button
                className="btnAgregarProducto"
                onClick={() => {
                  if (cantidadArr[index] > 0 && 0 <= produc.stock) {
                    setCantidadArr(
                      cantidadArr.map((cant, j) =>
                        index === j ? cant - 1 : cant
                      )
                    );
                    produc.stock++;
                  }
                }}
              >
                -
              </button>
              <p>{cantidadArr[index]}</p>
              <button
                className="btnAgregarProducto"
                onClick={() => {
                  if (cantidadArr[index] >= 0 && 0 < produc.stock) {
                    setCantidadArr(
                      cantidadArr.map((cant, j) =>
                        index === j ? cant + 1 : cant
                      )
                    );
                    produc.stock--;
                  }
                }}
              >
                +
              </button>
            </div>
            <button className="btnAddCarrito" onClick={()=>{
                setCantidadArr(
                    cantidadArr.map((cant, j) =>{
                        if (index===j) {
                            agregarAlCarrito(produc.nombre, produc.imagen, produc.cantidad, cant)
                            return 0
                        }
                    }
                    )
                  );
                  
            }}>Agregar al carrito</button>
          </div>
        );
      })}
    </div>
  );
};
const agregarAlCarrito = (nombre, imagen, cantidad, valor)=>{
    let elCArrito = JSON.parse(carrito)
    if (elCArrito.length===0) {
        elCArrito =[{nombre: nombre, imagen:imagen, cantidad:cantidad, valor:valor}]
    }else{
        const yaEnCarrito = elCArrito.filter((item)=>{
            return item.nombre === nombre
        }).length>0

        if (yaEnCarrito) {
            elCArrito.forEach((item, i) => {
                if (item.nombre === nombre) {
                    const cant = elCArrito[i].cantidad;
                    elCArrito[i] = {
                        nombre: nombre,
                        imagen: imagen,
                        valor: valor,
                        cantidad: cant + cantidad
                    }
                }
            });
        }else{
            elCArrito.push(
                {
                    nombre: nombre,
                        imagen: imagen,
                        valor: valor,
                        cantidad: cantidad
                }
            )
        }
    }
    //guardar informacion en database
}
export default ListaCliente;
