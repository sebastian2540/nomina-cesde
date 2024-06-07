import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import { useForm } from "react-hook-form";
import "./empleados.css";
import { MdOutlineCreateNewFolder, MdOutlineCancel } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuUserCheck2 } from "react-icons/lu";
import { TfiSave } from "react-icons/tfi";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { initFirestore } from "../../../../database/firebaseConfig";
import ListaEmpleados from "./Editar";

const Empleados = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const { register, handleSubmit, reset, setValue } = useForm();

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesCollection = collection(initFirestore, "empleados");
        const employeesSnapshot = await getDocs(employeesCollection);
        const employeesData = employeesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEmployees(employeesData);
      } catch (error) {
        console.error("Error fetching employees: ", error);
      }
    };

    fetchEmployees();
  }, [showForm, showEditModal]);
  const handleCrearClick = () => {
    setShowForm(!showForm);
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setValue("identificacion", employee.identificacion);
    setValue("nombre", employee.nombre);
    setValue("apellido", employee.apellido);
    setValue("correo_electronico", employee.correo_electronico);
    setValue("ciudad", employee.ciudad);
    setValue("rol", employee.rol);
    setValue("area", employee.area);

    setShowForm(true);
  };

  const handlePrueba = () => {
    setShowEditModal(true);
  };

  const handleDeleteClick = async (employee) => {
    const employeeRef = doc(initFirestore, "empleados", employee.id);
    await deleteDoc(employeeRef);
    setEmployees(employees.filter((emp) => emp.id !== employee.id));
  };

  const onSubmit = async (data) => {
    if (selectedEmployee) {
      // Si hay un empleado seleccionado, actualiza el empleado existente
      const employeeRef = doc(initFirestore, "empleados", selectedEmployee.id);
      await updateDoc(employeeRef, data);
      console.log("Empleado actualizado con éxito");
    } else {
      // Si no hay un empleado seleccionado, crea un nuevo empleado
      const registro = {
        ...data,
      };

      try {
        const registroRef = collection(initFirestore, "empleados");
        await addDoc(registroRef, registro);
        console.log("Documento escrito con éxito");
      } catch (error) {
        console.error("Error al agregar el documento: ", error);
      }
    }

    reset();
    setShowForm(false);
    setShowEditModal(false);
    setSelectedEmployee(null); // Limpia el empleado seleccionado después de enviar el formulario
  };

  const handleCancel = () => {
    reset();
    setShowForm(false);
    setShowEditModal(false);
  };

  return (
    <>
      <Nav />
      <section>
        <div className="container-buttons">
          <button className="button-crear" onClick={handleCrearClick}>
            <MdOutlineCreateNewFolder size={"20px"} /> Crear
          </button>
          <button className="button-editar" onClick={handlePrueba}>
            {showEditModal && (
              <ListaEmpleados
                employees={employees}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            )}
            <FiEdit size={"20px"} /> Editar
          </button>

          <button className="button-activar">
            <LuUserCheck2 size={"20px"} /> Estado
          </button>
        </div>
        {showForm && (
          <div className="principal">
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-2">
                      <label htmlFor="identificacion">Identificación</label>
                      <input
                        type="text"
                        id="identificacion"
                        {...register("identificacion", { required: true })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="nombre">Nombre</label>
                      <input
                        type="text"
                        id="nombre"
                        {...register("nombre", { required: true })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="apellido">Apellido</label>
                      <input
                        type="text"
                        id="apellido"
                        {...register("apellido", { required: true })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="correo_electronico">Email</label>
                      <input
                        type="email"
                        id="correo_electronico"
                        {...register("correo_electronico", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="ciudad">Ciudad</label>
                      <input
                        type="text"
                        id="ciudad"
                        {...register("ciudad", { required: true })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="rol">Rol</label>
                      <input
                        type="text"
                        id="rol"
                        {...register("rol", { required: true })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="area">Área</label>
                      <input
                        type="text"
                        id="area"
                        {...register("area", { required: true })}
                      />
                    </div>
                  </div>
                </div>
                <div className="button-principal">
                  <button type="submit" className="button-uno">
                    <TfiSave size={"20px"} /> Guardar
                  </button>
                  <button
                    className="button-dos"
                    type="button"
                    onClick={handleCancel}
                  >
                    <MdOutlineCancel size={"20px"} /> Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Empleados;
