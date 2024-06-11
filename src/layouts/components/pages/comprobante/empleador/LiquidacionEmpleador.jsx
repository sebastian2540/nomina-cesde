import React from "react";
import "./liquidacionEmpleador.css";

const LiquidacionEmpleador = ({ employee, formData, onBack }) => {
  const calculateDaysWorked = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.floor((end - start) / (1000 * 60 * 60 * 24));
  };

  const daysWorked = calculateDaysWorked(
    formData.fechaInicio,
    formData.fechaFinal
  );

  return (
    <div className="liquidacion-empleador">
      <div className="header">
        <div className=""></div>
        <div className="company-info">
          <h3>INFORMACIÓN EMPRESA</h3>
          <p>NIT EMPRESA</p>
        </div>
      </div>
      <h2>LIQUIDACIÓN DEFINITIVA DE PRESTACIONES SOCIALES</h2>
      <div className="datos-liquidacion">
        <h4>DATOS LIQUIDACIÓN</h4>
        <div className="data-row">
          <p>
            <strong>Nombre empleado:</strong> {employee?.nombre_empleado}{" "}
            {employee?.apellido_empleado}
          </p>
        </div>
        <div className="data-row">
          <p>
            <strong>Documento identificación:</strong>{" "}
            {employee?.documento_identificacion}
          </p>
        </div>
        <div className="data-row">
          <p>
            <strong>Fecha ingreso:</strong> {formData.fechaInicio}
          </p>
        </div>
        <div className="data-row">
          <p>
            <strong>Fecha de retiro:</strong> {formData.fechaFinal}
          </p>
        </div>
        <div className="data-row">
          <p>
            <strong>Días trabajados:</strong> {daysWorked}
          </p>
        </div>
        <div className="data-row">
          <p>
            <strong>Salario:</strong> {formData.salario}
          </p>
        </div>
        <div className="data-row">
          <p>
            <strong>Transporte:</strong>{" "}
            {formData.auxilioTransporte === "si" ? "162.000" : "0"}
          </p>
        </div>
      </div>
      <div className="conceptos">
        <table>
          <thead>
            <tr>
              <th>CONCEPTO</th>
              <th>DIAS</th>
              <th>VALOR TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cesantías</td>
              <td>{daysWorked}</td>
              <td>
                {((formData.salario / 30) * daysWorked * 0.0833).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>Intereses sobre cesantías</td>
              <td>{daysWorked}</td>
              <td>
                {((formData.salario / 30) * daysWorked * 0.0833 * 0.12).toFixed(
                  2
                )}
              </td>
            </tr>
            <tr>
              <td>Prima</td>
              <td>{daysWorked}</td>
              <td>
                {((formData.salario / 30) * daysWorked * 0.0833).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>Vacaciones</td>
              <td>{daysWorked}</td>
              <td>
                {((formData.salario / 30) * daysWorked * 0.0417).toFixed(2)}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">TOTAL A PAGAR POR PRESTACIONES SOCIALES</td>
              <td>
                {(
                  (formData.salario / 30) * daysWorked * 0.0833 * 2 +
                  (formData.salario / 30) * daysWorked * 0.0417 +
                  (formData.salario / 30) * daysWorked * 0.0833 * 0.12
                ).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td colSpan="2">DEDUCCIONES</td>
              <td>0</td>
            </tr>
            <tr>
              <td colSpan="2">TOTAL A PAGAR</td>
              <td>
                {(
                  (formData.salario / 30) * daysWorked * 0.0833 * 2 +
                  (formData.salario / 30) * daysWorked * 0.0417 +
                  (formData.salario / 30) * daysWorked * 0.0833 * 0.12
                ).toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="firma">
        <p>
          {(
            (formData.salario / 30) * daysWorked * 0.0833 * 2 +
            (formData.salario / 30) * daysWorked * 0.0417 +
            (formData.salario / 30) * daysWorked * 0.0833 * 0.12
          ).toFixed(2)}{" "}
          pesos
        </p>
        <p>
          Con la anterior liquidación manifiesto que (INFORMACIÓN EMPRESA) queda
          a paz y salvo conmigo por concepto prestaciones sociales
        </p>
        <div className="signatures">
          <div className="signature">
            <p>__________________________</p>
            <p>
              {employee?.nombre_empleado} {employee?.apellido_empleado}
            </p>
            <p>CC: {employee?.documento_identificacion}</p>
          </div>
          <div className="signature">
            <p>__________________________</p>
            <p>Luisa Fernanda Rojas Metaute</p>
            <p>CC: 1035874344</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="cancel" onClick={onBack}>
          Cancelar
        </button>
        <button className="save" onClick={() => alert("Guardado")}>
          Guardar
        </button>
      </div>
    </div>
  );
};
export default LiquidacionEmpleador;
