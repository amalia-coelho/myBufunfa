import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'

// Páginas
import Home from "./pages/Home";
import Check_email from "./pages/Check_email";

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
    <Check_email />
  </StrictMode>,
)
