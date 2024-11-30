import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";

const CardLibro = ({ libro }) => {
  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/libros/${libro._id}`}>
            <img
              src={`${getImgUrl(libro.coverImg)}`}
              alt=""
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/libros/${libro._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {libro?.titulo}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {libro?.descripcion.length > 8
              ? `${libro?.descripcion.slice(0, 80)}...`
              : libro?.descripcion}
          </p>
          <p className="font-medium mb-5">
            ${libro?.precioNuevo}
            <span className="line-through font-normal ml-2">
              ${libro?.precioViejo}
            </span>
          </p>
          <button className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
            <FiShoppingCart className="" />
            <span>Añadir al Carrito</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLibro;
