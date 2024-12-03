import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCreatePedidoMutation } from "../../redux/features/pedidos/pedidosApi";
import Swal from "sweetalert2";

const ComprarPagina = () => {
  const productosCarrito = useSelector(
    (state) => state.carrito.productosCarrito
  );
  const precioTotal = productosCarrito
    .reduce((acc, item) => acc + item.precioNuevo, 0)
    .toFixed(2);
  const { usuarioActual } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [createPedido, { isLoading }] = useCreatePedidoMutation();
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const onSubmit = async (data) => {
    const nuevoPedido = {
      nombre: data.nombre,
      email: usuarioActual?.email,
      direccion: {
        ciudad: data.ciudad,
        pais: data.pais,
        provincia: data.provincia,
        codigopostal: data.codigopostal,
      },
      telefono: data.telefono,
      idsproductos: productosCarrito.map((item) => item?._id),
      preciototal: precioTotal,
    };
    try {
      await createPedido(nuevoPedido).unwrap();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Su pedido ha sido creado con exito",
        showConfirmButton: true,
        timer: 1500,
      });
      navigate("/pedidos");
    } catch (error) {
      console.error("Algo salio mal al crear el pedido", error);
      alert("Algo salio mal al crear su pedido");
    }
  };
  if (isLoading) return <div>Cargando...</div>;
  return (
    <section>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600 mb-2">
              Efectivo en Entrega
            </h2>
            <p className="text-gray-500 mb-2">Precio Total: ${precioTotal}</p>
            <p className="text-gray-500 mb-6">
              Items:{" "}
              {productosCarrito.length > 0 ? productosCarrito.length : "0"}
            </p>
          </div>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
            >
              <div className="text-gray-600 lg:col-span-1">
                <p className="font-medium text-lg">Información Personal</p>
                <p>Por favor complete todos los campos.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  {/* Campo Nombre */}
                  <div className="md:col-span-5">
                    <label htmlFor="nombre">Nombre Completo</label>
                    <input
                      {...register("nombre", {
                        required: "El nombre es obligatorio",
                      })}
                      type="text"
                      name="nombre"
                      id="nombre"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-xs">
                        {errors.nombre.message}
                      </p>
                    )}
                  </div>

                  {/* Campo Email */}
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

                  {/* Campo Teléfono */}
                  <div className="md:col-span-5">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                      {...register("telefono", {
                        required: "El teléfono es obligatorio",
                      })}
                      type="text"
                      name="telefono"
                      id="telefono"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="+123 456 7890"
                    />
                    {errors.telefono && (
                      <p className="text-red-500 text-xs">
                        {errors.telefono.message}
                      </p>
                    )}
                  </div>

                  {/* Campos Dirección */}
                  <div className="md:col-span-3">
                    <label htmlFor="direccion">Dirección / Envío</label>
                    <input
                      {...register("direccion")}
                      type="text"
                      name="direccion"
                      id="direccion"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Ingrese su dirección"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                      {...register("ciudad", {
                        required: "La ciudad es obligatoria",
                      })}
                      type="text"
                      name="ciudad"
                      id="ciudad"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                    {errors.ciudad && (
                      <p className="text-red-500 text-xs">
                        {errors.ciudad.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="pais">País</label>
                    <input
                      {...register("pais")}
                      type="text"
                      name="pais"
                      id="pais"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Ingrese su país"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="provincia">Provincia / Estado</label>
                    <input
                      {...register("provincia", {
                        required: "La provincia es obligatoria",
                      })}
                      type="text"
                      name="provincia"
                      id="provincia"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                    {errors.provincia && (
                      <p className="text-red-500 text-xs">
                        {errors.provincia.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="codigopostal">Código Postal</label>
                    <input
                      {...register("codigopostal")}
                      type="text"
                      name="codigopostal"
                      id="codigopostal"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="12345"
                    />
                  </div>

                  {/* Aceptar términos */}
                  <div className="md:col-span-5 mt-3">
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="acepta_terminos"
                        id="acepta_terminos"
                        className="form-checkbox"
                        onChange={(e) => setIsChecked(e.target.checked)}
                      />
                      <label htmlFor="acepta_terminos" className="ml-2">
                        Acepto los{" "}
                        <Link className="underline underline-offset-2 text-blue-600">
                          Términos y Condiciones
                        </Link>{" "}
                        y{" "}
                        <Link className="underline underline-offset-2 text-blue-600">
                          Políticas de Compras
                        </Link>
                        .
                      </label>
                    </div>
                  </div>

                  {/* Botón Pedir */}
                  <div className="md:col-span-5 text-right">
                    <button
                      disabled={!isChecked}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Pedir
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprarPagina;
