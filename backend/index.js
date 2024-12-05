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
    origin: ["http://localhost:5173", "https://proyecto-libreria.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// rutas
const libroRoutes = require("./src/libros/libro.route");
const pedidoRoutes = require("./src/pedidos/pedido.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/libros", libroRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Server Libreria esta andando!");
  });
}

main()
  .then(() => console.log("MongoDB Conectado con Exito"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Bienvenido a la API de Librería");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
