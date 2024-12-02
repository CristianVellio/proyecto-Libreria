import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PagarPagina = () => {
  const productosCarrito = useSelector(
    (state) => state.carrito.productosCarrito
  );
  const precioTotal = productosCarrito
    .reduce((acc, item) => acc + item.precioNuevo, 0)
    .toFixed(2);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const usuarioActual = true;
  const [isChecked, setIsChecked] = useState(false);
  const onSubmit = (data) => {
    const nuevoPedido = {
      nombre: data.nombre,
      email: usuarioActual?.email,
      direccion: {
        calle: data.calle,
        ciudad: data.ciudad,
        pais: data.pais,
        provincia: data.provincia,
        codigopostal: data.codigopostal,
        preciototal: precioTotal,
      },
      telefono: data.telefono,
      idsproductos: productosCarrito.map((item) => item?._id),
    };
    console.log(nuevoPedido);
  };
  return (
    <section>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div>
              <h2 className="font-semibold text-xl text-gray-600 mb-2">
                Efectivo en Entrega
              </h2>
              <p className="text-gray-500 mb-2">Precio Total: ${precioTotal}</p>
              <p className="text-gray-500 mb-6">
                Items:
                {productosCarrito.length > 0 ? productosCarrito.length : "0"}
              </p>
            </div>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
              >
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Informacion Personal</p>
                  <p>Por favor complete todos los campos.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="nombre">Nombre Completo</label>
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        disabled
                        defaultValue={usuarioActual?.email}
                        placeholder="email@domain.com"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="telefono">Telefono</label>
                      <input
                        type="telefono"
                        name="telefono"
                        id="telefono"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="+123 456 7890"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="direccion">Direccion / Calle</label>
                      <input
                        type="text"
                        name="direccion"
                        id="direccion"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="ciudad">Ciudad</label>
                      <input
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="pais">Pais / Region</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="pais"
                          id="pais"
                          placeholder="Pais"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        />
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="provincia">Provincia / Estado</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="provincia"
                          id="provincia"
                          placeholder="provincia"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        />
                        <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="codigopostal">Codigo Postal</label>
                      <input
                        type="text"
                        name="codigopostal"
                        id="codigopostal"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-5 mt-3">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="nombre_boleta"
                          id="misma_boleta"
                          className="form-checkbox"
                          onChange={(e) => setIsChecked(e.target.checked)}
                        />
                        <label htmlFor="misma_boleta" className="ml-2 ">
                          Acepto los{" "}
                          <Link className="underline underline-offset-2 text-blue-600">
                            Terminos y Condiciones
                          </Link>{" "}
                          y{" "}
                          <Link className="underline underline-offset-2 text-blue-600">
                            Politicas de Compras.
                          </Link>
                        </label>
                      </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          disabled={!isChecked}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Pedir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagarPagina;
