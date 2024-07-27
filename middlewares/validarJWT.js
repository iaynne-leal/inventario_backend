const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("token");
  if (!token) {
    return res.status(500).json({
      msg: "No existe un token en la petición",
    });
  }

  try {
    const { id_usuario } = jwt.verify(token, process.env.JWT_SECRET);
    const usuario = await Usuario.findByPk(id_usuario);
    if (!usuario) {
      return res.status(400).json({
        msg: "El usuario no existe en la base de datos",
      });
    }
    req.usuario = usuario;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        msg: "Token expiró",
      });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        msg: "Token no válido.",
      });
    } else {
      return res.status(500).json({
        msg: "Error interno",
      });
    }
  }
};

module.exports = {
  validarJWT,
};
