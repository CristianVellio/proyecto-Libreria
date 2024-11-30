import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { Home } from "../pages/home/Home.jsx";
import Login from "../components/Login.jsx";
import Registrarse from "../components/Registrarse.jsx";

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
        element: <div>Pedidos</div>,
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
    ],
  },
]);

export default router;
