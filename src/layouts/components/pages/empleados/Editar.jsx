import React from "react";
import PropTypes from "prop-types";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const ListaEmpleados = ({ employees, handleEditClick, handleDeleteClick }) => {
  return (
    <div className="employees-container">
      {employees.map((employee) => (
        <div key={employee.id} className="employee-card">
          <div className="employee-lista">
            Id empleado: {employee.id_empleado}
          </div>
          <div className="employee-lista">Usuario: {employee.usuario}</div>
          <div className="employee-lista">
            Nombre: {employee.nombre_empleado}
          </div>
          <div className="employee-lista">
            Apellido: {employee.apellido_empleado}
          </div>
          <div className="employee-lista">Email: {employee.email_empleado}</div>
          <div className="employee-lista">
            Salario empleado: {employee.salario_empleado}
          </div>
          <div className="employee-lista">
            Tipo de contrato: {employee.tipo_contrato}
          </div>
          <div className="employee-lista">
            Contraseña: {employee.contrasena}
          </div>
          <div className="employee-lista">
            Cargo empleado: {employee.cargo_empleado}
          </div>
          <div className="button-container">
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
