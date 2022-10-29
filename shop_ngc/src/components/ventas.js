import React from "react";
import venta from "../archivoJson/jsonVentas.json";

const ventas = () => {
  let total = 0;

  return (
    <div className="container mt-5" align="center">
      <h4>Lista de Ventas</h4>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead className="theadcampos">
              <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Id/venta</th>
                <th scope="col">Cantidad/libras</th>
                <th scope="col">Concepto</th>
                <th scope="col">Precio Unitario</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody className="lisventas">
              {venta.map((item, index) => {
                total += item.precio * item.cantidad;

                return (
                  <tr key={index}>
                    <td>{item.fecha}</td>
                    <td>{item.id}</td>
                    <td>{item.cantidad}</td>
                    <td>{item.descripcion}</td>
                    <td>$&nbsp;{item.precio}</td>
                    <td>$&nbsp;{item.total}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>

                <td colSpan="5">Precio total</td>
                <td>&nbsp;&nbsp;$&nbsp;{total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ventas;
