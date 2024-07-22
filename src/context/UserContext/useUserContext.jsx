import { useContext } from "react";
import UserContext from "./UserContext";

export default function useUserContext() {
  return useContext(UserContext);
}
