import React, { useState } from "react";
import Nav from "../nav/Nav";

import "./liquidacion.css";
import { LuUserCheck2 } from "react-icons/lu";

import HourlyLiquidationForm from "./Liquidacion-dias";
import FullTimeLiquidationForm from "./Liquidacion-tiempo-completo";

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
            <LuUserCheck2 size={"20px"} /> Liquidación por Días
          </button>
        </div>

        <div>
          {formType === "fullTime" && (
            <FullTimeLiquidationForm onSubmit={handleFullTimeSubmit} />
          )}
          {formType === "hourly" && (
            <HourlyLiquidationForm onSubmit={handleHourlySubmit} />
          )}
        </div>
      </section>
    </>
  );
};
export default Liquidacion;
