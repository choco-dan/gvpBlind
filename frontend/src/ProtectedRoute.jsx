import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";

function ProtectedRoute({ children }) {
  const { usermail } = useContext(UserContext);
  if (!usermail) {
    return <Navigate to="/Login" replace />;
  }
  return children;
}

export default ProtectedRoute;
