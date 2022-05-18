import { useState, createContext, useEffect } from "react";
import firebase from "../Services/firebaseConnection";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  function LoadStorage() {
    useEffect(() => {
      const userStorage = localStorage.getItem("userSystem");

      if (userStorage) {
        setUser(JSON.parse(userStorage));
        setLoading(false);
      }

      setLoading(false);
    }, []);
  }

  LoadStorage();

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
