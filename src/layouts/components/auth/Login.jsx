import React, { useEffect } from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initFirestore } from "../../../database/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useUserContext } from "../context/UserContext";
import Swal from "sweetalert2";

const Login = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const { setUser } = useUserContext();

  async function getUsuarios() {
    let collectionUsuarios = collection(initFirestore, "tbl_empleados");
    let datosUsuarios = await getDocs(collectionUsuarios);

    setUsuarios(datosUsuarios.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  const buscarUsuario = () => {
    return usuarios.find(
      (usuario) =>
        usuario.usuario === getUsuario && usuario.contrasena === getContrasena
    );
  };

  let redireccion = useNavigate();

  const iniciarSesion = () => {
    const usuario = buscarUsuario();

    if (usuario) {
      setUser(usuario);
      localStorage.setItem("cargo_empleado", usuario.cargo_empleado);
      setTimeout(() => {
        redireccion("/home");
      }, 2000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        text: "Por favor, verifica tu usuario y contraseña",
      });
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
        <input
          onClick={iniciarSesion}
          type="button"
          className="buttons"
          value="Ingresar"
        />
        <p>
          <a href="#">¿Olvidaste tu Contraseña?</a>
        </p>
      </section>
    </section>
  );
};

export default Login;
