const Pedido = require("./pedido.model");

const crearUnPedido = async (req, res) => {
  try {
    const nuevoPedido = await Pedido(req.body);
    const pedidoGuardado = await nuevoPedido.save();
    res.status(200).json(pedidoGuardado);
  } catch (error) {
    console.error("Error al crear un pedido", error);
    res.status(500).json({ mensaje: "No se pudo crear el pedido" });
  }
};

const getPedidoPorEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const pedidos = await Pedido.find({ email }).sort({ createdAt: -1 });
    if (!pedidos) {
      return res.status(404).json({ mensaje: "No se encontraron pedidos" });
    }
    res.status(200).json(pedidos);
  } catch (error) {
    console.error("Error al obtener un pedido", error);
    res.status(500).json({ mensaje: "No se pudo obtener el pedido" });
  }
};

module.exports = {
  crearUnPedido,
  getPedidoPorEmail,
};
