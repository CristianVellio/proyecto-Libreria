const express = require("express");
const { crearUnPedido } = require("./pedido.controller");

const router = express.Router();

router.post("/", crearUnPedido);

module.exports = router;
