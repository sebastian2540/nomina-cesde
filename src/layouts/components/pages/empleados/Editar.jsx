import React from "react";
import PropTypes from "prop-types";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const ListaEmpleados = ({ employees, handleEditClick, handleDeleteClick }) => {
  return (
    <div className="employees-container">
      {employees.map((employee) => (
        <div key={employee.id} className="employee-card">
          <div className="employee-lista">
            Identificación: {employee.identificacion}
          </div>
          <div className="employee-lista">Nombre: {employee.nombre}</div>
          <div className="employee-lista">Apellido: {employee.apellido}</div>
          <div className="employee-lista">
            Email: {employee.correo_electronico}
          </div>
          <div className="employee-lista">Ciudad: {employee.ciudad}</div>
          <div className="employee-lista">Rol: {employee.rol}</div>
          <div className="employee-lista">Área: {employee.area}</div>
          <button
            className="employee-boton"
            onClick={() => handleEditClick(employee)}
          >
            <FiEdit size={"20px"} /> Editar
          </button>
          <button
            className="employee-eliminar"
            onClick={() => handleDeleteClick(employee)}
          >
            <FiTrash2 size={"20px"} /> Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

ListaEmpleados.propTypes = {
  employees: PropTypes.array.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default ListaEmpleados;
