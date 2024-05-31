import React, { useState } from "react";
import Nav from "../nav/Nav";
import { useForm } from "react-hook-form";
import "./empleados.css";
import { MdOutlineCreateNewFolder, MdOutlineCancel } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuUserCheck2 } from "react-icons/lu";
import { TfiSave } from "react-icons/tfi";
import { collection, addDoc } from "firebase/firestore";
import { initFirestore } from "../../../../database/firebaseConfig";

const Empleados = () => {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleCrearClick = () => {
    setShowForm(!showForm);
  };

  const onSubmit = async (data) => {
    const registro = {
      username: data,
    };
    console.log("***Empleado: ", registro);

    try {
      const registroRef = collection(initFirestore, "empleados");
      await addDoc(registroRef, registro);
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    reset();
    setShowForm(false);
  };

  const handleCancel = () => {
    reset();
    setShowForm(false);
  };

  return (
    <>
      <Nav />
      <section>
        <div className="container-buttons">
          <button className="button-crear" onClick={handleCrearClick}>
            <MdOutlineCreateNewFolder size={"20px"} /> Crear
          </button>
          <button className="button-editar">
            <FiEdit size={"20px"} /> Editar
          </button>
          <button className="button-eliminar">
            <RiDeleteBin6Line size={"20px"} /> Eliminar
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
