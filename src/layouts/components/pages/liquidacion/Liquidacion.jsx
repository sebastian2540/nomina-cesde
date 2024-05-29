import React, { useState } from "react";
import Nav from "../nav/Nav";

import "./liquidacion.css";
import { LuUserCheck2 } from "react-icons/lu";
import { TfiSave } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";
import LiquidacionTiempoCompleto from "./Liquidacion-tiempo-completo";
import LiquidacionHoras from "./Liquidacion-horas";

const Liquidacion = () => {
  const [formType, setFormType] = useState(null);

  const handleFullTimeSubmit = (data) => {
    console.log("Full time liquidation data: ", data);
  };

  const handleHourlySubmit = (data) => {
    console.log("Hourly liquidation data: ", data);
  };

  return (
    <>
      <Nav />
      <section>
        <div className="container-buttons">
          <button
            className="button-liquidacion_tiempo_completo"
            onClick={() => setFormType("fullTime")}
          >
            <LuUserCheck2 size={"20px"} /> Liquidación Tiempo Completo
          </button>
          <button
            className="button-liquidacion_por_horas"
            onClick={() => setFormType("hourly")}
          >
            <LuUserCheck2 size={"20px"} /> Liquidación por Horas
          </button>
        </div>

        <div>
          <div className="principal"></div>

          {formType === "fullTime" && (
            <LiquidacionTiempoCompleto onSubmit={handleFullTimeSubmit} />
          )}
          {formType === "hourly" && (
            <LiquidacionHoras onSubmit={handleHourlySubmit} />
          )}

          <div className="button-principal">
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
