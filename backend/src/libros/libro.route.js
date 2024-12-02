const express = require("express");
const Libro = require("./libro.model");
const {
  publicarLibro,
  obtenerTodosLosLibros,
  obtenerUnLibro,
  editarLibro,
  eliminarLibro,
} = require("./libro..controller");
const router = express.Router();

router.post("/crear-libro", publicarLibro);

router.get("/", obtenerTodosLosLibros);

router.get("/:id", obtenerUnLibro);

router.put("/editar/:id", editarLibro);

router.delete("/eliminar/:id", eliminarLibro);

module.exports = router;
