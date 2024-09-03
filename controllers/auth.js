const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generateJWT } = require('../helpers/generateJWT');

const login = async (req = request, res = response) => {
    const { usuario, contrasenia } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await Usuario.findOne({ where: { usuario } });
        console.log('Usuario encontrado:', user);


        if (!user) {
            return res.status(400).json({
                msg: 'El usuario que ingresó no se encuentra registrado',
            });
        }

        // Verificar la contraseña
        const validarContra = bcryptjs.compareSync(contrasenia, user.contrasenia);
        console.log('Resultado de la comparación de contraseñas:', validarContra);
        if (!validarContra) {
            return res.status(400).json({
                msg: 'La contraseña es incorrecta',
            });
        }

        // Generar JWT
        const token = await generateJWT(user.id_usuario, user.usuario);

        res.json({
            msg: 'Inicio de sesión exitoso',
            token,
            user: {
                id_usuario: user.id_usuario,
                nombre_usuario: user.nombre_usuario,
                usuario: user.usuario,
                correo_electronico: user.correo_electronico
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Algo salió mal',
            error
        });
    }
}

module.exports = {
    login
}
