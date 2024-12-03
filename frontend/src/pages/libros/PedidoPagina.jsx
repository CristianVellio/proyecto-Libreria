import { useAuth } from "../../context/AuthContext";
import { useGetPedidoPorEmailQuery } from "../../redux/features/pedidos/pedidosApi";

const PedidoPagina = () => {
  const { usuarioActual } = useAuth();
  const {
    data: pedidos = [],
    isLoading,
    isError,
  } = useGetPedidoPorEmailQuery(usuarioActual.email);

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Hubo un error al cargar el pedido</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Tus Pedidos</h2>

      {pedidos.length === 0 ? (
        <div>No se hallaron Pedidos</div>
      ) : (
        <div className="space-y-6">
          {pedidos.map((pedido, index) => (
            <div
              key={pedido._id}
              className="bg-white rounded shadow-lg p-4 border border-gray-200"
            >
              <p className="p-1 bg-secondary text-white w-20 rounded mb-1">
                # {index + 1}
              </p>
              <h3 className="font-bold text-lg">ID del Pedido: {pedido._id}</h3>
              <p className="text-gray-600">Nombre: {pedido.nombre}</p>
              <p className="text-gray-600">Email: {pedido.email}</p>
              <p className="text-gray-600">Teléfono: {pedido.telefono}</p>
              <p className="text-gray-600">
                Precio Total: ${pedido.preciototal}
              </p>

              <h4 className="font-semibold mt-2">Dirección:</h4>
              <p>
                {pedido.direccion.ciudad}, {pedido.direccion.provincia},{" "}
                {pedido.direccion.pais}, {pedido.direccion.codigopostal}
              </p>

              <h4 className="font-semibold mt-2">IDs de Productos:</h4>
              <ul className="list-disc list-inside">
                {pedido.idsproductos.map((productoId) => (
                  <li key={productoId}>{productoId}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PedidoPagina;
