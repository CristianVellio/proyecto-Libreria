import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
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
