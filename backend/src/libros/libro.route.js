const express = require("express");
const Libro = require("./libro.model");
const {
  publicarLibro,
  obtenerTodosLosLibros,
  obtenerUnLibro,
  editarLibro,
  eliminarLibro,
} = require("./libro..controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

router.post("/crear-libro", verifyAdminToken, publicarLibro);

router.get("/", obtenerTodosLosLibros);

router.get("/:id", obtenerUnLibro);

router.put("/editar/:id", verifyAdminToken, editarLibro);

router.delete("/eliminar/:id", verifyAdminToken, eliminarLibro);

module.exports = router;
