import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('user'));

  const login = data => {
    setLoggedIn(true);
    setUser(data);

    localStorage.setItem('user', data);
  };

  const logout = async callback => {
    setLoggedIn(false);
    setUser(null);

    localStorage.removeItem('user');

    callback();
  };

  const values = {
    loggedIn,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
