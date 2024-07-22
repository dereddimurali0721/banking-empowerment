import { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "./UserContext";

export default function UserContextProvider({ children }) {
  const initialValue = {
    isLoggedIn: false,
    firstName: "firstName",
    lastName: "lastName",
    authToken: "",
    userElevation: "",
    profileUrl: "",
  };
  const [userData, setUserData] = useState(initialValue);

  const userLogout = () => {
    setUserData(initialValue);
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, userLogout }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.any,
};
