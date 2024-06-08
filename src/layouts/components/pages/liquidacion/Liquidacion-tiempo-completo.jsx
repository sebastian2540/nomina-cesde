import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./liquidacion.css";
import { TfiSave } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";

import { collection, onSnapshot } from "firebase/firestore";
import { initFirestore } from "../../../../database/firebaseConfig";

const FullTimeLiquidationForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const [showLiquidacion, setShowLiquidacion] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);

  const handleLiquidacionClick = () => {
    setShowLiquidacion(true);
    setSelectedEmployee();
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(initFirestore, "tbl_empleados"),
      (snapshot) => {
        const employeesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEmployees(employeesData);
      }
    );

    return () => unsubscribe();
  }, []); // Solo se suscribe una vez al cargar el componente

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hourly-form">
      <div>
        <label htmlFor="empleado">Empleado:</label>
        <select id="empleado" {...register("empleado", { required: true })}>
          <option value="">Seleccione un empleado</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.nombre} {employee.apellido}
            </option>
          ))}
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
          <button className="button-uno" onClick={handleLiquidacionClick}>
            <TfiSave size={"20px"} /> Liquidacion empleado
          </button>
          <button className="button-dos">
            <MdOutlineCancel size={"20px"} /> Liquidacion empleador
          </button>
        </div>
      </div>
    </form>
  );
};

export default FullTimeLiquidationForm;
