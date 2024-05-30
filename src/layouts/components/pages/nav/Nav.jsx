import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

function Nav() {
  const { user } = useUserContext();
  const role = user
    ? user.cargo_empleado
    : localStorage.getItem("cargo_empleado");

  console.log("***role", role);
  console.log("***user", user);
  return (
    <nav className="menu">
      <Link to={"/home"}>
        <img
          className="usuario"
          src="src/layouts/assets/avatar_boy_man_icon.png"
        />
      </Link>
      <section className="informacion-usuario">
        <label className="label_text">
          <strong>
            {user
              ? `${user.nombre_empleado} ${user.apellido_empleado}`
              : "Usuario"}
          </strong>
        </label>
        <label className="label_text">
          <strong>
            {role === "Administrador" ? user?.cargo_empleado : "Auxiliar"}
          </strong>
        </label>
      </section>

      {role === "Administrador" && (
        <>
          <Link to={"/empleados"}>
            <button>Empleados</button>
          </Link>
          <Link to={"/area"}>
            <button>Área</button>
          </Link>
        </>
      )}
      <Link to={"/liquidacion"}>
        <button>Liquidación</button>
      </Link>
      <Link to={"/"}>
        <button className="button_cerrar_sesion">Cerrar sesión</button>
      </Link>
    </nav>
  );
}

export default Nav;
