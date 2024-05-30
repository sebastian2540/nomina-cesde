// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYK_uWC2ENzTpR-87rYWmA2fDJBFtasII",
  authDomain: "nomina-cesde-3ea5a.firebaseapp.com",
  projectId: "nomina-cesde-3ea5a",
  storageBucket: "nomina-cesde-3ea5a.appspot.com",
  messagingSenderId: "558143535516",
  appId: "1:558143535516:web:a523184a75575f111af059",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conexión a la base de datos
export const initFirestore = getFirestore(app);
export const initStorage = getStorage(app);

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // El usuario está autenticado, puedes acceder a sus datos aquí
    console.log("Usuario autenticado:", user);
  } else {
    // No hay usuario autenticado
    console.log("No hay usuario autenticado");
  }
});

export { auth };
