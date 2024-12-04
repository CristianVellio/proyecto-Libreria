const mongoose = require("mongoose");
const express = require("express");
const Pedido = require("../pedidos/pedido.model");
const Libro = require("../libros/libro.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const totalPedidos = await Pedido.countDocuments();
    const totalVentas = await Pedido.aggregate([
      {
        $group: {
          _id: null,
          totalVentas: { $sum: "$preciototal" },
        },
      },
    ]);

    const librosTrendingResult = await Libro.aggregate([
      { $match: { trending: true } },
      { $count: "librosTrendingCount" },
    ]);

    const librosTrending =
      librosTrendingResult.length > 0
        ? librosTrendingResult[0].librosTrendingCount
        : 0;

    const librosTotales = await Libro.countDocuments();

    const ventasMensuales = await Pedido.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
          totalVentas: { $sum: "$preciototal" },
          totalPedidos: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.status(200).json({
      totalPedidos,
      totalVentas: totalVentas[0]?.totalVentas,
      librosTrending,
      librosTotales,
      ventasMensuales,
    });
  } catch (error) {
    console.error("Error al obtener las estadisticas", error);
    res.status(500).send("Error al obtener las estadisticas");
  }
});

module.exports = router;
