import React from "react";
import Nav from "../nav/Nav";
import "./liquidacion.css";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuUserCheck2 } from "react-icons/lu";
import { TfiSave } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";

const Liquidacion = () => {
  return (
    <>
      <Nav />
      <section>
        <div className="container-buttons">
          <button className="button-liquidacion_tiempo_completo">
            <LuUserCheck2 size={"20px"} /> Liquidación Tiempo Completo
          </button>
          <button className="button-liquidacion_por_horas">
            <LuUserCheck2 size={"20px"} /> Liquidación por Horas
          </button>
        </div>

        <div>
          <div className="principal">
            <strong>Liquidacion</strong>
          </div>

          <div className="button-principal">
            <button className="button-liquidacion_empleado">
              <LuUserCheck2 size={"20px"} /> Liquidacion para Empleado
            </button>

            <button className="button-liquidacion_empleador">
              <LuUserCheck2 size={"20px"} /> Liquidacion para Empleador
            </button>

            <button className="button-uno">
              <TfiSave size={"20px"} /> Guardar
            </button>

            <button className="button-dos">
              <MdOutlineCancel size={"20px"} /> Cancelar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Liquidacion;
