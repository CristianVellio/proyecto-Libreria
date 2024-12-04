import { Navigate, Outlet } from "react-router";

import PropTypes from "prop-types";

const RutaAdmin = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/admin/" />;
  }
  return children ? children : <Outlet />;
};

RutaAdmin.propTypes = {
  children: PropTypes.node,
};

export default RutaAdmin;
