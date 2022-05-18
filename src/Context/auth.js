import { useState, createContext, useEffect } from "react";
import firebase from "../Services/firebaseConnection";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function LoadStorage() {
      const userStorage = localStorage.getItem("userSystem");

      if (userStorage) {
        setUser(JSON.parse(userStorage));
        setLoading(false);
      }

      setLoading(false);
    }

    LoadStorage();
  }, []);

  async function signUp(email, password, nome) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set({
            nome: nome,
            avatarURL: null,
          })
          .then(() => {
            let data = {
              uid: uid,
              nome: nome,
              email: value.user.email,
              avatarURL: null,
            };
            setUser(data);
            userStorage(data);
            setLoadingAuth(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
      });
  }

  function userStorage(data) {
    localStorage.setItem("userSystem", JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
