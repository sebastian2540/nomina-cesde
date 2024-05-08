import React from "react";
import Nav from "../nav/Nav";
import "./empleados.css"
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuUserCheck2 } from "react-icons/lu";
import { TfiSave } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";

const Empleados = () => {
  

  return (
    <>
   <Nav/>
   <section>
      <div className="container-buttons">
        <button className="button-crear"><MdOutlineCreateNewFolder  size={"20px"} /> Crear</button>
        <button className="button-editar"><FiEdit size={"15px"}/> Editar</button>
        <button className="button-eliminar"><RiDeleteBin6Line size={"15px"}/> Eliminar</button>
        <button className="button-activar"><LuUserCheck2 size={"20px"}/> Activar</button>
      </div>
      <div>
        <div className="principal">
          
        </div>
        <div className="button-principal">
            <button className="button-uno"><TfiSave size={"15px"}/> Guardar</button>
            <button className="button-dos"><MdOutlineCancel size={"20px"}/> Cancelar</button>
          </div>
      </div>
    </section>
   </>
  );
};

export default Empleados;
