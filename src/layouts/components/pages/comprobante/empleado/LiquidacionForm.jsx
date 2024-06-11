import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../empleado/liquidacionForm.css"; // Asegúrate de importar tu archivo CSS

const LiquidacionForm = ({ employee, formData, onBack }) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (formData) {
      // Establece los valores por defecto usando formData
      setValue("periodoPago", formData.fechaInicio);
      setValue("diasTrabajados", formData.diasLaborados);
      setValue("salario", formData.salario);
      setValue("transporte", formData.auxilioTransporte === "si" ? 1 : 0);
    }
  }, [formData, setValue]);
  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API o guardarlo en un estado
  };

  const watchedFields = watch([
    "salario",
    "transporte",
    "cesantias",
    "interesesCesantias",
    "primaPrimerSemestre",
    "primaSegundoSemestre",
    "vacaciones",
  ]);
  useEffect(() => {
    const fieldsValues = watchedFields.map((value) => parseFloat(value) || 0);
    const newTotal = fieldsValues.reduce((acc, curr) => acc + curr, 0);
    setTotal(newTotal);
  }, [watchedFields]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="liquidacion-form">
      <h2>INFORMACIÓN EMPRESA</h2>
      <div className="empresa-info">
        <label htmlFor="empresa">NIT EMPRESA</label>
        <h2>LIQUIDACIÓN DEFINITIVA DE PRESTACIONES SOCIALES</h2>
      </div>
      <div className="form-section">
        <h3>DATOS LIQUIDACIÓN</h3>
        <div className="grid-container">
          <label htmlFor="periodoPago">Periodo de Pago:</label>
          <input
            type="date"
            id="periodoPago"
            {...register("periodoPago", { required: true })}
          />
          <label htmlFor="diasTrabajados">Días Trabajados:</label>
          <input
            type="number"
            id="diasTrabajados"
            {...register("diasTrabajados", { required: true })}
          />
          <label htmlFor="salario">Salario:</label>
          <input
            type="number"
            id="salario"
            {...register("salario", { required: true })}
          />
          <label htmlFor="transporte">Transporte:</label>
          <input
            type="number"
            id="transporte"
            {...register("transporte", { required: true })}
          />
        </div>
      </div>

      <div className="form-section">
        <h3>PRESTACIONES SOCIALES</h3>
        <div className="grid-container">
          <label htmlFor="cesantias">Cesantías:</label>
          <input
            type="number"
            id="cesantias"
            {...register("cesantias", { required: true })}
          />
          <label htmlFor="interesesCesantias">Intereses sobre cesantías:</label>
          <input
            type="number"
            id="interesesCesantias"
            {...register("interesesCesantias", { required: true })}
          />
          <label htmlFor="primaPrimerSemestre">Prima primer semestre:</label>
          <input
            type="number"
            id="primaPrimerSemestre"
            {...register("primaPrimerSemestre", { required: true })}
          />

          <label htmlFor="primaSegundoSemestre">Prima segundo semestre:</label>
          <input
            type="number"
            id="primaSegundoSemestre"
            {...register("primaSegundoSemestre", { required: true })}
          />
          <label htmlFor="vacaciones">Vacaciones:</label>
          <input
            type="number"
            id="vacaciones"
            {...register("vacaciones", { required: true })}
          />
        </div>
      </div>
      <div className="total-section">
        <label htmlFor="total">TOTAL</label>
        <input type="number" id="total" value={total} readOnly />
      </div>
      <p>
        Recuerde que si ya pagó la prima del semestre anterior debe restarla de
        este resultado
      </p>
      <div className="buttons">
        <button type="button" onClick={onBack}>
          Guardar
        </button>
        <button type="submit">Cancelar</button>
      </div>
    </form>
  );
};
export default LiquidacionForm;
