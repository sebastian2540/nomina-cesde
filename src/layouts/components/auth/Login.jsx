import React, { useEffect } from "react";
import "./Login.css";
// import Home from "../pages/home/Home";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initFirestore } from "../../../database/firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";

const Login = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");

  //Conexión a la base de datos desde Firestore
  async function getUsuarios() {
    let collectionUsuarios = collection(initFirestore, "tbl_empleados");
    let datosUsuarios = await getDocs(collectionUsuarios);
    console.log(datosUsuarios);
    setUsuarios(datosUsuarios.docs.map((doc) => ({ ...doc.data() })));
    console.log(datosUsuarios.docs.map((doc) => ({ ...doc.data() })));
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  const buscarUsuario = () => {
    let estado = usuarios.some(
      (usuario) =>
        usuario.usuario === getUsuario && usuario.contrasena === getContrasena
    );
    return estado;
  };

  let redireccion = useNavigate();

  const iniciarSesion = () => {
    if (buscarUsuario()) {
      setTimeout(() => {
        redireccion("/home");
      }, 2000);
    } else {
      console.log("Credenciales incorrectas");
    }
  };

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
        onChange={(e) => {
          setContrasena(e.target.value);
        }}
      />
      <section>
        <input onClick={iniciarSesion} type="button" className="buttons" value="Ingresar" />

        <p>
          <a href="#">¿Olvidastes tu Contraseña?</a>
        </p>
      </section>
    </section>
  );
};

export default Login;
