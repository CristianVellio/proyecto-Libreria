import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const RutasPrivadas = ({ children }) => {
  const { usuarioActual } = useAuth();
  if (usuarioActual) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default RutasPrivadas;
