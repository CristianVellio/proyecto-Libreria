const express = require("express");
const { crearUnPedido, getPedidoPorEmail } = require("./pedido.controller");

const router = express.Router();

router.post("/", crearUnPedido);

router.get("/email/:email", getPedidoPorEmail);

module.exports = router;
