import { useForm } from "react-hook-form";
import { useAddLibroMutation } from "../../../redux/features/libros/librosAPI";
import { useState } from "react";
import Swal from "sweetalert2";
import InputField from "./InputField";
import SelectField from "./SelectField";

const PublicarLibro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [imageFile, setimageFile] = useState(null);
  const [addLibro, { isLoading, isError }] = useAddLibroMutation();
  const [imageFileName, setimageFileName] = useState("");
  const onSubmit = async (data) => {
    const nuevoLibroData = {
      ...data,
      coverImg: imageFileName,
    };
    try {
      await addLibro(nuevoLibroData).unwrap();
      Swal.fire({
        title: "Libro Añadido",
        text: "Tu libro se ha creado con exito!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy de acuerdo!",
      });
      reset();
      setimageFileName("");
      setimageFile(null);
    } catch (error) {
      console.error(error);
      alert("No se pudo agregar libro. intenta otra vez.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setimageFile(file);
      setimageFileName(file.name);
    }
  };
  return (
    <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Añadir nuevo Libro
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="">
        <InputField
          label="Tirulo"
          name="titulo"
          placeholder="Ingresa el nombre del libro"
          register={register}
        />

        <InputField
          label="Descripcion"
          name="descripcion"
          placeholder="Ingresa la descripcion del libro"
          type="textarea"
          register={register}
        />

        <SelectField
          label="Categoria"
          name="categoria"
          options={[
            { value: "", label: "Elije una categoria" },
            { value: "negocios", label: "Negocios" },
            { value: "marketing", label: "Marketing" },
            { value: "ficcion", label: "Ficcion" },
            { value: "terror", label: "Terror" },
            { value: "aventura", label: "Aventura" },
            // Pueden agregarse mas
          ]}
          register={register}
        />

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("trending")}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">
              Trending
            </span>
          </label>
        </div>

        <InputField
          label="Precio Viejo"
          name="precioViejo"
          type="number"
          placeholder="Precio Viejo"
          register={register}
        />

        <InputField
          label="Precio Nuevo"
          name="precioNuevo"
          type="number"
          placeholder="Precio Nuevo"
          register={register}
        />

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Imagen Portada
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-2 w-full"
          />
          {imageFileName && (
            <p className="text-sm text-gray-500">
              Seleccionada: {imageFileName}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-bold rounded-md"
        >
          {isLoading ? (
            <span className="">Añadiendo.. </span>
          ) : (
            <span>Añadir Libro</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default PublicarLibro;
