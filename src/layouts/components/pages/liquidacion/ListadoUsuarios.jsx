// import React, { useState, useEffect } from "react";

// import {
//   collection,
//   deleteDoc,
//   doc,
//   getDocs,
//   initFirestore,
// } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// // import "./ListadoUsuarios.css";
// import { initStorage } from "../../../database/firebaseConfig";

// const ListadoUsuarios = () => {
//   const [usuarios, setUsuarios] = useState([]);
//   let redireccion = useNavigate();
//   async function getUsuarios() {
//     let resultado = collection(initStorage, "usuarios");
//     let data = await getDocs(resultado);
//     /* Si es un arreglo, puedo iterarlo con los métodos de JS
//     map */
//     console.log(data.docs);
//     console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     setUsuarios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   }
//   useEffect(() => {
//     getUsuarios();
//   }, []);

//   const eliminarUsuario = async (id) => {
//     console.log("Eliminando el usuario " + id);
//     let deleteUser = doc(initFirestore, "usuarios", id);
//     await deleteDoc(deleteUser);
//     getUsuarios();
//   };

//   const confirmarEliminacion = (id) => {
//     Swal.fire({
//       title: "Está seguro?",
//       text: "No se puede reversar esta acción!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Si, eliminar",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         eliminarUsuario(id);
//         Swal.fire({
//           title: "Eliminado",
//           text: "El usuario fue eliminado.",
//           icon: "success",
//         });
//       }
//     });
//   };

//   return (
//     <section className="panel">
//       <main className="panel-contenido">
//         {usuarios.map((usuario) => (
//           <section key={usuario.id}>
//             <section>
//               <p>Nombre: {usuario.name}</p>
//               <p>Usuario: {usuario.user}</p>
//               <p>Correo: {usuario.email}</p>
//             </section>
//             <div>
//               <button onClick={() => confirmarEliminacion(usuario.id)}>
//                 Eliminar
//               </button>
//               <Link>Editar</Link>
//             </div>
//           </section>
//         ))}
//       </main>
//     </section>
//   );
// };

// export default ListadoUsuarios;
