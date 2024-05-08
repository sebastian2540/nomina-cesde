import { Link, Outlet } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="menu">
      <img className="usuario" src="src/layouts/assets/avatar_boy_man_icon.png"></img>
      <section className="informacion-usuario">
        <label type="text" className="label_text"><strong>Nombre:</strong> Pepito Perez</label>
        <label type="text" className="label_text"><strong>Cargo:</strong> Administrador de Nómina</label>
        <label type="text" className="label_text"><strong>Area:</strong> Nómina</label>
      </section>
      
     <Link to={"/empleados"}><button>Empleados</button></Link> 
     <Link to={"/liquidacion"}><button>Liquidacion</button></Link> 
      <button className="button_cerrar_sesion">Cerrar sesión</button>
    </nav>
  );
}

export default Nav;
