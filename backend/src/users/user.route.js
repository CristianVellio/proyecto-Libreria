const express = require("express");
const User = require("./user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      return res.status(404).send("Admin no encontrado");
    }
    if (admin.password !== password) {
      return res.status(401).send("Contraseña incorrecta");
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({
      message: "Autenticacion exitosa",
      token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("No se ha podido loguear el usuario como admin", error);
    res.status(401).send("Error al intentar loguear el usuario como admin");
  }
});

module.exports = router;
