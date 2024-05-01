import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import "./layouts/components/auth/Login.css";
// import "./layouts/components/home/Home.css";
// import "./layouts/components/employee/Employee.css";
// import "./layouts/components/settlement/Settlement.css";
import Home from "./layouts/components/home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);