import { Link, Outlet } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="menu">
      <Link to={"/home"} ><img className="usuario" src="src/layouts/assets/avatar_boy_man_icon.png"></img></Link>
      <section className="informacion-usuario">
        <label type="text" className="label_text"><strong>Juan Camilo Sanchez Perez</strong></label>
        <label type="text" className="label_text"><strong>Administrador</strong></label>
        <label type="text" className="label_text"><strong>Nómina</strong></label>
      </section>
      
     <Link to={"/empleados"}><button>Empleados</button></Link>
     <Link to={"/area"}><button>Área</button></Link> 
     <Link to={"/liquidacion"}><button>Liquidación</button></Link> 
     <Link to={"/"}><button className="button_cerrar_sesion">Cerrar sesión</button></Link>
    </nav>
  );
}

export default Nav;
