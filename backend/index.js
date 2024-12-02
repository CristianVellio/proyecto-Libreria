const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 5000;
require("dotenv").config();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// rutas
const libroRoutes = require("./src/libros/libro.route");
const pedidoRoutes = require("./src/pedidos/pedido.route");
app.use("/api/libros", libroRoutes);
app.use("/api/pedidos", pedidoRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Server Libreria esta andando!");
  });
}

main()
  .then(() => console.log("MongoDB Conectado con Exito"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
