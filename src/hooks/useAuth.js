import { useContext } from "react";

import { AuthContext } from "../context/authprovider.jsx";

export const useAuth = () => {
  return useContext(AuthContext);
};
