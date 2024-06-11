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
        const employeesCollection = collection(initFirestore, "tbl_empleados");
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
    setValue("usuario", employee.usuario);
    setValue("nombre_empleado", employee.nombre_empleado);
    setValue("apellido_empleado", employee.apellido_empleado);
    setValue("email_empleado", employee.email_empleado);
    setValue("salario_empleado", employee.salario_empleado);
    setValue("tipo_contrato", employee.tipo_contrato);
    setValue("contrasena", employee.contrasena);
    setValue("id_empleado", employee.id_empleado);
    setValue("cargo_empleado", employee.cargo_empleado);

    setShowForm(true);
  };
  const handlePrueba = () => {
    setShowEditModal(!showEditModal);
  };
  const handleDeleteClick = async (employee) => {
    const employeeRef = doc(initFirestore, "tbl_empleados", employee.id);
    await deleteDoc(employeeRef);
    setEmployees(employees.filter((emp) => emp.id !== employee.id));
  };
  const onSubmit = async (data) => {
    if (selectedEmployee) {
      // Si hay un empleado seleccionado, actualiza el empleado existente
      const employeeRef = doc(
        initFirestore,
        "tbl_empleados",
        selectedEmployee.id
      );
      await updateDoc(employeeRef, data);
      console.log("Empleado actualizado con éxito");
    } else {
      // Si no hay un empleado seleccionado, crea un nuevo empleado
      const registro = {
        ...data,
      };

      try {
        const registroRef = collection(initFirestore, "tbl_empleados");
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
                      <label htmlFor="id_empleado">Id empleado</label>
                      <input
                        type="text"
                        id="id_empleado"
                        {...register("id_empleado", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="usuario">Usuario</label>
                      <input
                        type="text"
                        id="usuario"
                        {...register("usuario", { required: true })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="nombre_empleado">Nombre</label>
                      <input
                        type="text"
                        id="nombre_empleado"
                        {...register("nombre_empleado", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="apellido_empleado">Apellido</label>
                      <input
                        type="text"
                        id="apellido_empleado"
                        {...register("apellido_empleado", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="email_empleado">Email</label>
                      <input
                        type="email"
                        id="email_empleado"
                        {...register("email_empleado", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="salario_empleado">Salario empleado</label>
                      <input
                        type="text"
                        id="salario_empleado"
                        {...register("salario_empleado", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="tipo_contrato">Tipo de contrato</label>
                      <input
                        type="text"
                        id="tipo_contrato"
                        {...register("tipo_contrato", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="contrasena">Contraseña</label>
                      <input
                        type="text"
                        id="contrasena"
                        {...register("contrasena", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="id_empleado">Id empleado</label>
                      <input
                        type="text"
                        id="id_empleado"
                        {...register("id_empleado", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="cargo_empleado">Cargo empleado</label>
                      <input
                        type="text"
                        id="cargo_empleado"
                        {...register("cargo_empleado", {
                          required: true,
                        })}
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
