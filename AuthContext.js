// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const updateAuthentication = (authenticated) => {
    setUserAuthenticated(authenticated);
  };

  return (
    <AuthContext.Provider value={{ userAuthenticated, updateAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
