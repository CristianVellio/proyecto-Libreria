const Libro = require("./libro.model");

const publicarLibro = async (req, res) => {
  try {
    console.log("Solicitud recibida:", req.body);
    const nuevoLibro = await Libro({ ...req.body });
    await nuevoLibro.save();
    console.log("Libro creado con éxito:", nuevoLibro);
    res
      .status(200)
      .send({ message: "Libro creado con exito", book: nuevoLibro });
  } catch (error) {
    console.error("Error creando libro", error);
    res.status(500).send({ message: "Falla al crear libro" });
  }
};

const obtenerTodosLosLibros = async (req, res) => {
  try {
    const libros = await Libro.find().sort({ createdAt: -1 });
    res.status(200).send(libros);
  } catch (error) {
    console.error("Error obteniendo libros", error);
    res.status(500).send({ message: "Falla al obtener libros" });
  }
};

const obtenerUnLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libro = await Libro.findById(id);
    if (!Libro) {
      res.status(404).send({ message: "Libro no encontrado" });
    }
    res.status(200).send(libro);
  } catch (error) {
    console.error("Error obteniendo libro", error);
    res.status(500).send({ message: "Falla al obtener libro" });
  }
};

const editarLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libroActualizado = await Libro.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!libroActualizado) {
      res.status(404).send({ message: "Libro no encontrado" });
    }
    res.status(200).send({
      message: "Libro editado con exito",
      libro: libroActualizado,
    });
  } catch (error) {
    console.error("Error editando libro", error);
    res.status(500).send({ message: "Falla al editar libro" });
  }
};

const eliminarLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libroEliminado = await Libro.findByIdAndDelete(id);
    if (!libroEliminado) {
      res.status(404).send({ message: "Libro no encontrado" });
    }
    res.status(200).send({
      message: "Libro eliminado con exito",
      libro: libroEliminado,
    });
  } catch (error) {
    console.error("Error eliminando libro", error);
    res.status(500).send({ message: "Falla al eliminar libro" });
  }
};

module.exports = {
  publicarLibro,
  obtenerTodosLosLibros,
  obtenerUnLibro,
  editarLibro,
  eliminarLibro,
};
