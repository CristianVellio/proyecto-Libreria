import Loading from "../../../components/Loading";
import {
  useFetchLibroByIdQuery,
  useUpdateLibroMutation,
} from "../../../redux/features/libros/librosApi";
import getBaseURL from "../../../utils/baseURL";
import axios from "axios";
import InputField from "../anadirLibro/InputField";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import SelectField from "../anadirLibro/SelectField";

const ActualizarLibro = () => {
  const { id } = useParams();
  const {
    data: libroData,
    isLoading,
    isError,
    refetch,
  } = useFetchLibroByIdQuery(id);
  console.log(libroData);
  const [updateLibro] = useUpdateLibroMutation();
  const { register, handleSubmit, setValue, reset } = useForm();
  useEffect(() => {
    if (libroData) {
      setValue("titulo", libroData.titulo);
      setValue("descripcion", libroData.descripcion);
      setValue("categoria", libroData?.categoria);
      setValue("trending", libroData.trending);
      setValue("precioViejo", libroData.precioViejo);
      setValue("precioNuevo", libroData.precioNuevo);
      setValue("coverImg", libroData.coverImg);
    }
  }, [libroData, setValue]);

  const onSubmit = async (data) => {
    const updateLibroData = {
      titulo: data.titulo,
      descripcion: data.descripcion,
      categoria: data.categoria,
      trending: data.trending,
      precioViejo: Number(data.precioViejo),
      precioNuevo: Number(data.precioNuevo),
      coverImg: data.coverImg || libroData.coverImg,
    };
    try {
      await axios.put(
        `${getBaseURL()}/api/libros/editar/${id}`,
        updateLibroData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      Swal.fire({
        titulo: "Libro Actualizado",
        text: "Tu libro se ha actualizado con exito!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!",
      });
      await refetch();
    } catch (error) {
      console.log("No se pudo actualizar el libro.");
      alert("No se pudo actualizar el libro.");
    }
  };
  if (isLoading) return <Loading />;
  if (isError) return <div>Error trayendo los datos</div>;
  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Actualizar Libro
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Titulo"
          name="titulo"
          placeholder="Inserte el titulo del libro"
          register={register}
        />

        <InputField
          label="Descripcion"
          name="descripcion"
          placeholder="Ingrese una descripcion"
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

        <InputField
          label="URL Imagen Portada"
          name="coverImg"
          type="text"
          placeholder="URL Imagen Portada"
          register={register}
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md"
        >
          Actualizar Libro
        </button>
      </form>
    </div>
  );
};

export default ActualizarLibro;
