import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { getImgUrl } from "../../utils/getImgUrl";
import {
  limpiarCarrito,
  quitarDelCarrito,
} from "../../redux/features/cart/cartSlice";

const CarritoPagina = () => {
  const dispatch = useDispatch();
  const productosCarrito = useSelector(
    (state) => state.carrito.productosCarrito
  );
  const precioTotal = productosCarrito
    .reduce((acc, item) => acc + item.precioNuevo, 0)
    .toFixed(2);
  const handleQuitarDelCarrito = (producto) => {
    dispatch(quitarDelCarrito(producto));
  };
  const handleLimpiarCarrito = () => {
    dispatch(limpiarCarrito());
  };
  return (
    <>
      <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="text-lg font-medium text-gray-900">
              Carrito de Compras
            </div>
            <div className="ml-3 flex h-7 items-center ">
              <button
                type="button"
                onClick={handleLimpiarCarrito}
                className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200  "
              >
                <span className="">Limpiar Carrito</span>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              {productosCarrito.length > 0 ? (
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {productosCarrito.map((producto) => (
                    <li key={producto?._id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt="portada"
                          src={`${getImgUrl(producto?.coverImg)}`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link to="/">{producto?.titulo}</Link>
                            </h3>
                            <p className="sm:ml-4">${producto?.precioNuevo}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 capitalize">
                            <strong>Categoria: </strong> {producto?.categoria}
                          </p>
                        </div>
                        <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                          <p className="text-gray-500">
                            <strong>Cant:</strong> 1
                          </p>

                          <div className="flex">
                            <button
                              onClick={() => handleQuitarDelCarrito(producto)}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Quitar
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No se encontro productos</p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${precioTotal ? precioTotal : 0}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Envio e impuestos calculados al concluir la operacion.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Pagar
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Link to="/">
              o
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Continuar Comprando
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarritoPagina;
