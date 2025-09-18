import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin");

  if (!isAdmin) {
    return <Navigate to="/" replace />; // redirect non-admin users
  }

  return children;
};

export default ProtectedRoute;
