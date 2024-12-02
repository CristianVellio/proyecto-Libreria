import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useState } from "react";
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

  const value = {
    usuarioActual,
    registrarUsuario,
    usuarioLogin,
    signInWithGoogle,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
