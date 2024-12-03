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

module.exports = {
  crearUnPedido,
};
