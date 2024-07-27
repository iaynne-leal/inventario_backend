const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

const usuariosGet = async (req, res) => {
  try {
      const usuarios = await Usuario.findAll();
      res.json({
          msg: 'Usuarios encontrados',
          usuarios
      });
  } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({
          msg: 'Error al obtener usuarios',
          error
      });
  }
};

const usuariosPost = async (req, res) => {
  const {
    nombre_usuario,
    usuario,
    contrasenia,
    correo_electronico,
  } = req.body;

  try {
    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(contrasenia, salt);

    // Crear el nuevo usuario
    const newUser = await Usuario.create({
      nombre_usuario,
      usuario,
      contrasenia: hashedPassword,
      correo_electronico,
    });

    res.status(201).json({ msg: 'Usuario creado', newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Algo salió mal', error });
  }
};

const usuariosPut = async (req = request, res = response) => {
  const id = req.params.id;
  const {
    nombre_usuario,
    usuario,
    nueva_contrasenia,
    correo_electronico,
  } = req.body;

  try {
    // Busca el usuario por su id
    const user = await Usuario.findByPk(id);

    if (!user) {
      return res.status(404).json({
        msg: "No se encontró el usuario.",
      });
    }

    // Actualiza la información del usuario con el método update
    const salt = bcrypt.genSaltSync();
    const nuevaContraseniaEncriptada = bcrypt.hashSync(
      nueva_contrasenia,
      salt
    );

    await user.update({
      nombre_usuario,
      usuario,
      contrasenia: nuevaContraseniaEncriptada,
      correo_electronico,
    });

    res.json({
      msg: "Usuario actualizado",
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrió un error al intentar actualizar el usuario.",
      error,
    });
  }
};

const usuariosDelete = async (req, res = response) => {
  const id = req.params.id;
  try {
    const usuario = await Usuario.findByPk(id); // Busca el usuario por su ID utilizando el método findByPk de Sequelize.
    if (usuario) {
      // Si se encontró el usuario, procede a eliminarlo.
      await usuario.destroy(); // Utiliza el método destroy de Sequelize para eliminar el usuario de la base de datos.
      res.json({
        msg: "Usuario eliminado con éxito.", // Si funciona, sale el mensaje
      });
    } else {
      res.status(404).json({
        msg: "No se encontró el usuario.",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrió un error al intentar eliminar el usuario.",
      error,
    });
  }
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete
};
