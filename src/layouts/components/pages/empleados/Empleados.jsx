import React, { useState } from "react";
import Nav from "../nav/Nav";
import { useForm } from "react-hook-form";
import "./empleados.css";
import { MdOutlineCreateNewFolder, MdOutlineCancel } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuUserCheck2 } from "react-icons/lu";
import { TfiSave } from "react-icons/tfi";

const Empleados = () => {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleCrearClick = () => {
    setShowForm(!showForm);
  };

  const onSubmit = (data) => {
    console.log(data);
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
          <div>
            <div className="principal">
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-2">
                        <label htmlFor="identificacion">
                          <i className="description-i"></i>
                          <b> Identificación </b>
                        </label>
                        <input
                          className="campo-empleado-i"
                          type="text"
                          id="identificacion"
                          {...register("identificacion", { required: true })}
                        />
                        <br />
                        <br />

                        <label htmlFor="nombre">
                          <i className="description-n"></i>
                          <b> Nombre </b>
                        </label>
                        <input
                          className="campo-empleado-n"
                          type="text"
                          id="nombre"
                          {...register("nombre", { required: true })}
                        />
                        <br />
                        <br />

                        <label htmlFor="apellido">
                          <i className="description-a"></i>
                          <b> Apellido </b>
                        </label>
                        <input
                          className="campo-empleado-a"
                          type="text"
                          id="apellido"
                          {...register("apellido", { required: true })}
                        />
                        <br />
                        <br />

                        <label htmlFor="correo_electronico">
                          <i className="description-e"></i>
                          <b> Email </b>
                        </label>
                        <input
                          className="campo-empleado-e"
                          type="email"
                          id="correo_electronico"
                          {...register("correo_electronico", {
                            required: true,
                          })}
                        />
                        <br />
                        <br />

                        <label htmlFor="ciudad">
                          <i className="description-c"></i>
                          <b> Ciudad </b>
                        </label>
                        <input
                          className="campo-empleado-c"
                          type="text"
                          id="ciudad"
                          {...register("ciudad", { required: true })}
                        />
                        <br />
                        <br />

                        <label htmlFor="rol">
                          <i className="description-r"></i>
                          <b> Rol </b>
                        </label>
                        <input
                          className="campo-empleado-r"
                          type="text"
                          id="rol"
                          {...register("rol", { required: true })}
                        />
                        <br />
                        <br />

                        <label htmlFor="area">
                          <i className="description-ar"></i>
                          <b> Área </b>
                        </label>
                        <input
                          className="campo-empleado-ar"
                          type="text"
                          id="area"
                          {...register("area", { required: true })}
                        />
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="button-principal">
                    <button className="button-uno" type="submit">
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
          </div>
        )}
      </section>
    </>
  );
};

export default Empleados;
