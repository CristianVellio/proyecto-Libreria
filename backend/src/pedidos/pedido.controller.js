const crearUnPedido = async () => {
  try {
    const nuevoPedido = await Pedido(req.body);
    const guardarPedido = await nuevoPedido.save();
    res.status(201).json(guardarPedido);
  } catch (error) {
    console.error("Error al crear un pedido", error);
    res.status(500).json({ mensaje: "No se pudo crear el pedido" });
  }
};

module.exports = {
  crearUnPedido,
};
