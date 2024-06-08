import React from "react";
import "./LiquidacionEmpleado.css";

const LiquidacionEmpleado = ({ empleado }) => {
  // Aquí puedes calcular los valores de la liquidación basándote en la información del empleado
  // Por ahora, solo mostraremos los campos de ejemplo
  const liquidacion = {
    periodoPago: "Junio 2024",
    diasTrabajados: 30,
    salario: empleado.salario_empleado,
    transporte: 200000, // Ejemplo

    cesantias: 1500000, // Ejemplo
    interesesCesantias: 50000, // Ejemplo
    primaPrimerSemestre: 300000, // Ejemplo
    primaSegundoSemestre: 0, // Ejemplo
    vacaciones: 200000, // Ejemplo
    total: 2200000, // Ejemplo
  };

  return (
    <div className="liquidacion-container">
      <h2>
        Liquidación de {empleado.nombre} {empleado.apellido}
      </h2>
      <div className="liquidacion-campos">
        <div>
          <strong>Periodo de pago:</strong> {liquidacion.periodoPago}
        </div>
        <div>
          <strong>Días trabajados:</strong> {liquidacion.diasTrabajados}
        </div>
        <div>
          <strong>Salario:</strong> {liquidacion.salario}
        </div>
        <div>
          <strong>Transporte:</strong> {liquidacion.transporte}
        </div>
        <div>
          <strong>Cesantías:</strong> {liquidacion.cesantias}
        </div>
        <div>
          <strong>Intereses a las cesantías:</strong>{" "}
          {liquidacion.interesesCesantias}
        </div>
        <div>
          <strong>Prima primer semestre:</strong>{" "}
          {liquidacion.primaPrimerSemestre}
        </div>
        <div>
          <strong>Prima segundo semestre:</strong>{" "}
          {liquidacion.primaSegundoSemestre}
        </div>
        <div>
          <strong>Vacaciones:</strong> {liquidacion.vacaciones}
        </div>
        <div>
          <strong>TOTAL:</strong> {liquidacion.total}
        </div>
      </div>
    </div>
  );
};

export default LiquidacionEmpleado;
