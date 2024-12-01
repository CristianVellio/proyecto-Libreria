const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    trending: {
      type: Boolean,
      required: true,
    },
    coverImg: {
      type: String,
      required: true,
    },
    precioViejo: Number,
    precioNuevo: Number,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Libro = mongoose.model("Libro", libroSchema);

module.exports = Libro;
