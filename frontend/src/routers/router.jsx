import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { Home } from "../pages/home/Home.jsx";

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
    ],
  },
]);

export default router;
