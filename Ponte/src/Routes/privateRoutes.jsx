import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const possuiToken = !!localStorage.getItem("token");

  return possuiToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;