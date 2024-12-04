import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { Home } from "../pages/home/Home.jsx";
import Login from "../components/Login.jsx";
import Registrarse from "../components/Registrarse.jsx";
import CarritoPagina from "../pages/libros/CarritoPagina.jsx";
import ComprarPagina from "../pages/libros/ComprarPagina.jsx";
import LibroUnico from "../pages/libros/LibroUnico.jsx";
import RutasPrivadas from "./RutasPrivadas.jsx";
import PedidoPagina from "../pages/libros/PedidoPagina.jsx";
import RutaAdmin from "./RutaAdmin.jsx";
import AdminLogin from "../components/AdminLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: (
          <RutasPrivadas>
            <PedidoPagina />
          </RutasPrivadas>
        ),
      },
      {
        path: "/nosotros",
        element: <div>Nosotros</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registrarse",
        element: <Registrarse />,
      },
      {
        path: "/carrito",
        element: <CarritoPagina />,
      },
      {
        path: "/comprar",
        element: (
          <RutasPrivadas>
            <ComprarPagina />
          </RutasPrivadas>
        ),
      },
      {
        path: "/libros/:id",
        element: <LibroUnico />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/tablero",
    element: (
      <RutaAdmin>
        <div>Tablero Admin</div>
      </RutaAdmin>
    ),
    children: [
      {
        path: "",
        element: (
          <RutaAdmin>
            <div>Tablero Inicio</div>
          </RutaAdmin>
        ),
      },
      {
        path: "anadir-nuevo-libro",
        element: (
          <RutaAdmin>
            <div>Añadir nuevo libro</div>
          </RutaAdmin>
        ),
      },
      {
        path: "editar-libro/:id",
        element: (
          <RutaAdmin>
            <div>Editar libro</div>
          </RutaAdmin>
        ),
      },
      {
        path: "manipular-libros",
        element: (
          <RutaAdmin>
            <div>Manipular Libros</div>
          </RutaAdmin>
        ),
      },
    ],
  },
]);

export default router;
