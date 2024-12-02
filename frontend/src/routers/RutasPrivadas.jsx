import { useAuth } from "../context/AuthContext";

const RutasPrivadas = ({ children }) => {
  const { usuarioActual } = useAuth();
  if (usuarioActual) {
    return children;
  }
  return <div>RutasPrivadas</div>;
};

export default RutasPrivadas;
