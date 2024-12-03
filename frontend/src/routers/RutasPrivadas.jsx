import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const RutasPrivadas = ({ children }) => {
  const { usuarioActual, cargando } = useAuth();
  if (cargando) {
    return <div>Cargando...</div>;
  }
  if (usuarioActual) {
    return children;
  }
  return <Navigate to="/login" replace />;
};
RutasPrivadas.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RutasPrivadas;
