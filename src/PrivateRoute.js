// components/PrivateRoute.js
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, role }) => {
  const user = localStorage.getItem(role); // "admin" ou "medecin"
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
