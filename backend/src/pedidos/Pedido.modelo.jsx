import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    direccion: {
      ciudad: { type: String, required: true },
      pais: String,
      provincia: String,
      codigopostal: String,
    },
    telefono: { type: Number, required: true },
    idsproductos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Libro",
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
