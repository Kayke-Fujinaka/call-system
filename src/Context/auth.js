import { useState, useEffect, createContext } from "react";
import firebase from "../Services/firebaseConnection";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

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

  // Login do usuário
  async function signIn(email, password) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        const userProfile = await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .get();

        let data = {
          uid: uid,
          nome: userProfile.data.nome,
          avatarURL: userProfile.data.avatarURL,
          email: value.user.email,
        };
        setUser(data);
        userStorage(data);
        setLoadingAuth(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
      });
  }

  // Cadastrar um novo usuário
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

  // Logout do usuário
  async function signOut() {
    await firebase.auth().signOut();
    localStorage.removeItem("userSystem");
    setUser(null);
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
        loadingAuth,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
