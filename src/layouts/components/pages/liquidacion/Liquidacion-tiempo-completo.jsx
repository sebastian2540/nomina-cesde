import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../liquidacion/liquidacion.css";
import { TfiSave } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";
import { collection, onSnapshot } from "firebase/firestore";
import { initFirestore } from "../../../../database/firebaseConfig";

import LiquidacionForm from "../comprobante/empleado/LiquidacionForm";
import LiquidacionEmpleador from "../comprobante/empleador/LiquidacionEmpleador";

const FullTimeLiquidationForm = ({ onSubmit }) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [showLiquidacion, setShowLiquidacion] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [liquidacionType, setLiquidacionType] = useState("");
  const handleLiquidacionClick = (type) => {
    const employeeId = watch("empleado");
    if (employeeId) {
      const employee = employees.find((emp) => emp.id === employeeId);
      setSelectedEmployee(employee);
      setLiquidacionType(type);
      setShowLiquidacion(true);
    } else {
      alert("Seleccione un empleado");
    }
  };
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(initFirestore, "tbl_empleados"),
      (snapshot) => {
        const employeesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Empleados obtenidos de Firebase:", employeesData);
        setEmployees(employeesData);
      },
      (error) => {
        console.error("Error al obtener los empleados:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleBack = () => {
    setShowLiquidacion(false);
    setSelectedEmployee(null);
  };

  if (showLiquidacion) {
    if (liquidacionType === "empleado") {
      return (
        <LiquidacionForm
          employee={selectedEmployee}
          formData={watch()}
          onBack={handleBack}
        />
      );
    } else if (liquidacionType === "empleador") {
      return (
        <LiquidacionEmpleador
          employee={selectedEmployee}
          formData={watch()}
          onBack={handleBack}
        />
      );
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hourly-form">
      <div>
        <label htmlFor="empleado">Empleado:</label>
        <select id="empleado" {...register("empleado", { required: true })}>
          <option value="">Seleccione un empleado</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.nombre_empleado} {employee.apellido_empleado}
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
      </div>
      <div className="button-principal">
        <button
          type="button"
          className="button-uno"
          onClick={() => handleLiquidacionClick("empleado")}
        >
          <TfiSave size={"20px"} /> Liquidacion empleado
        </button>
        <button
          type="button"
          className="button-dos"
          onClick={() => handleLiquidacionClick("empleador")}
        >
          <TfiSave size={"20px"} /> Liquidación empleador
        </button>
      </div>
    </form>
  );
};

export default FullTimeLiquidationForm;
