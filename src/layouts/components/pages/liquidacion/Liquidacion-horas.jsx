import React from "react";
import { useForm } from "react-hook-form";
import "./liquidacion.css";
import { TfiSave } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";

const HourlyLiquidationForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hourly-form">
      <div>
        <label htmlFor="empleado">Empleado:</label>
        <select id="empleado" {...register("empleado", { required: true })}>
          <option value="">Seleccione un empleado</option>
          <option value="empleado1">Empleado 1</option>
          <option value="empleado2">Empleado 2</option>
        </select>
      </div>
      <div>
        <label htmlFor="fechaInicio">Fecha de Inicio:</label>
        <input
          type="date"
          id="fechaInicio"
          {...register("fechaInicio", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="fechaFinal">Fecha Final:</label>
        <input
          type="date"
          id="fechaFinal"
          {...register("fechaFinal", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="salario">Salario:</label>
        <input
          type="number"
          id="salario"
          {...register("salario", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="auxilioTransporte">Auxilio de Transporte:</label>
        <select
          id="auxilioTransporte"
          {...register("auxilioTransporte", { required: true })}
        >
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label htmlFor="diasLaborados">Días Laborados en la Semana:</label>
        <input
          type="number"
          id="diasLaborados"
          {...register("diasLaborados", { required: true })}
        />
      </div>
      <div className="button-principal">
        <button className="button-uno">
          <TfiSave size={"20px"} /> Liquidacion por horas
        </button>
        <button className="button-dos">
          <MdOutlineCancel size={"20px"} /> Cancelar
        </button>
      </div>
    </form>
  );
};

export default HourlyLiquidationForm;
