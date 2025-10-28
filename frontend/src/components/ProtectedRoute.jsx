import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log('/>.......' , token)
  // if no token, redirect to login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // else, allow access
  return children;
};

export default ProtectedRoute;
