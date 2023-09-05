import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ element: Element }) => {
  // Check if the user is authenticated (you can use your authentication logic here)
  const isAuthenticated = true;

  return isAuthenticated ? <Element /> : <Navigate to="/" />;
};

export default PrivateRoute;
