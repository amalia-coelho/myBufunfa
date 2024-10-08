import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "./components/Navbar";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'

// Páginas
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/cadastro",
//     element: <Cadastro />,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Home />
  </StrictMode>,
)
