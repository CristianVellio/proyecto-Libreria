const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
require("dotenv").config();

// rutas
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
