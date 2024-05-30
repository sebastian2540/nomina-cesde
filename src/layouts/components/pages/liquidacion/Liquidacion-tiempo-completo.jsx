import React from "react";
import { useForm } from "react-hook-form";
import "./liquidacion.css";
import { TfiSave } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";

const FullTimeLiquidationForm = ({ onSubmit }) => {
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
        <label>Salario:</label>
        <input
          className="salario"
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
        <div className="button-principal">
          <button className="button-uno">
            <TfiSave size={"20px"} /> Guardar
          </button>
          <button className="button-dos">
            <MdOutlineCancel size={"20px"} /> Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FullTimeLiquidationForm;
