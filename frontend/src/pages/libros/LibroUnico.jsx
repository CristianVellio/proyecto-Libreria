import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { useParams } from "react-router";
import { useFetchLibroByIdQuery } from "../../redux/features/libros/librosAPI";
import { useDispatch } from "react-redux";
import { anadirACarrito } from "../../redux/features/cart/cartSlice";

const LibroUnico = () => {
  const { id } = useParams();
  const { data: libro, isLoading, isError } = useFetchLibroByIdQuery(id);

  const dispatch = useDispatch();
  const handleAnadirACarrito = (producto) => {
    dispatch(anadirACarrito(producto));
  };

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Ha ocurrido un error</div>;
  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{libro.titulo}</h1>
      <div className="">
        <div>
          <img
            src={`${getImgUrl(libro.coverImg)}`}
            alt={libro.titulo}
            className="mb-8"
          />
        </div>
        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Autor: </strong> {libro.autor || "Cosme Fulanito"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Publicado: </strong>{" "}
            {new Date(libro?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Categoria: </strong>
            {libro?.categoria}
          </p>
          <p className="text-gray-700">
            <strong>Descripcion: </strong>
            {libro?.descripcion}
          </p>
        </div>
        <button
          onClick={() => handleAnadirACarrito(libro)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1"
        >
          <FiShoppingCart className="" />
          <span>Añadir al carrito</span>
        </button>
      </div>
    </div>
  );
};

export default LibroUnico;
