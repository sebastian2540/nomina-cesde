import React from "react";
import "./Login.css";
// import Home from "../pages/home/Home";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [getUsuario, setUsuario] = useState("admin");
  const [getContrasena, setContrasena] = useState("");
  let redireccion = useNavigate();

  if (getUsuario === "adminomina") {
    if (getContrasena === "123456"){
      setTimeout(() => {
        redireccion("/home")
      },2000);
    }
  } else {
    console.log("Credenciales incorrectas");
  }

  return (
    <section id="login" className="form-login">
      <img src="src/layouts/assets/logo.png" className="logo" />
      <h5>Inicio de sesión</h5>
      <input
        type="text"
        className="controls"
        placeholder="Usuario"
        onChange={(e) => {
          setUsuario(e.target.value);
        }}
      />
      <input
        type="password"
        className="controls"
        placeholder="Contraseña"
        maxlength="10"
        onChange={(e) => {
          setContrasena(e.target.value);
        }}
      />
      <section>
        <input type="button" className="buttons" value="Ingresar" />

        <p>
          <a href="#">¿Olvidastes tu Contraseña?</a>
        </p>
      </section>
    </section>
  );
};

export default Login;
