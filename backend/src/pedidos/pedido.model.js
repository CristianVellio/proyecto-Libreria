const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    direccion: {
      ciudad: String,
      pais: String,
      provincia: String,
      codigopostal: String,
    },
    telefono: { type: String, required: true },
    idsproductos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Libro",
        required: true,
      },
    ],
    preciototal: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Pedido = mongoose.model("Pedido", pedidoSchema);

module.exports = Pedido;
