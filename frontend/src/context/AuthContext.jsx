import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const googleProvider = new GoogleAuthProvider();

//Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [usuarioActual, setUsuarioActual] = useState(null);
  const [cargando, setCargando] = useState(true);

  //registrar un usuario
  const registrarUsuario = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // usuario login
  const usuarioLogin = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // registrarse con Google
  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  //cerrar sesion
  const cerrarSesion = async () => {
    return signOut(auth);
  };

  // manejar el estado del usuario
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUsuarioActual(usuario);
      setCargando(false);

      if (usuario) {
        const { email, displayname, photoURL } = usuario;
        const usuarioData = {
          email,
          username: displayname,
          photo: photoURL,
        };
      }
      return () => unsubscribe();
    });
  }, []);

  const value = {
    usuarioActual,
    registrarUsuario,
    usuarioLogin,
    signInWithGoogle,
    cerrarSesion,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
