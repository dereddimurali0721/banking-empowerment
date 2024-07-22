import { Navigate } from "react-router-dom";
import useUserContext from "../../context/UserContext/useUserContext";

export default function ProtectedRoute({ children }) {
  const { userData } = useUserContext();
  if (!userData.isLoggedIn) {
    return <Navigate to={"/"} replace />;
  }
  return children;
}
