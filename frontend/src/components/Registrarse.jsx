import { useState } from "react";
import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Registrarse = () => {
  const [mensaje, setMensaje] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleGoogleLogin = () => {};
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Registrarse</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese su Correo Electronico"
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
              name="contrasena"
              id="password"
              placeholder="Ingrese su Contraseña"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          {mensaje && (
            <p className="text-red-500 text-xs italic mb-3">{mensaje}</p>
          )}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Registrar
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Ingresa aquí
          </Link>
        </p>
        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FaGoogle className="mr-2" />
            Ingresa con Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          &copy;2025 Libreria. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Registrarse;
