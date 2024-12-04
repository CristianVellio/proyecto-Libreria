import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseURL from "../utils/baseURL";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  const [mensaje, setMensaje] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${getBaseURL()}/api/auth/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const auth = response.data;
      console.log(auth);
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Sesion Expirada. por favor vuelva a iniciar sesion");
          navigate("/");
        }, 3600 * 1000);
      }
      alert("Admin logueado correctamente");
      navigate("/tablero");
    } catch (error) {
      setMensaje("Por favor ingrese un usuario y password validos");
      console(error);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">
          Iniciar Sesion Tablero Admin
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Usuario
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              name="username"
              id="username"
              placeholder="Ingrese su Usuario"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Ingrese su Contraseña"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          {mensaje && (
            <p className="text-red-500 text-xs italic mb-3">{mensaje}</p>
          )}
          <div className="w-full">
            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Ingresar
            </button>
          </div>
        </form>
        <p className="mt-5 text-center text-gray-500 text-xs">
          &copy;2025 Libreria. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
