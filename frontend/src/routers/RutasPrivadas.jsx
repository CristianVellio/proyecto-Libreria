import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../components/Loading";

const RutasPrivadas = ({ children }) => {
  const { usuarioActual, cargando } = useAuth();
  if (cargando) {
    return <Loading />;
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
