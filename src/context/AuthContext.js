import { createContext, useState } from "react";
import { AUTH_STORAGE_KEY } from "../constants";

const AuthContext = createContext({
  authToken: localStorage.getItem(AUTH_STORAGE_KEY) || "",
});

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem(AUTH_STORAGE_KEY)
  );

  function updateAuthToken(token) {
    localStorage.setItem(AUTH_STORAGE_KEY, token);
    setAuthToken(token);
  }

  return (
    <AuthContext.Provider value={{ authToken, updateAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
