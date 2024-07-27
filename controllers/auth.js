const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const { Usuario } = require('../models');
const {json} = require('sequelize');
const { generateJWT } = require('../helpers/generateJWT');


const login = async(req, res = response) => {
    //const body = req.body;
    const {usuario, contrasenia} = req.body;

    try {
        //verificar si el usuario existe
        const user = await Usuario.findOne({
            where:{usuario}
        });
        if(!user){
            return res.status(400).json({
                msg:'El usuario que ingreso no se encuentra registrado',
            });
        }

        //verificar contraseña
        const validarContra = bcryptjs.compareSync(contrasenia,user.contrasenia);
        if(!validarContra){
            res.status(400).json({
                msg:'La contraseña es incorrecta',
            });
        }

        const token = await generateJWT(user.id_usuario,user.usuario);
        

        res.json({
            msg: 'Inicio de sesión exitoso',
            token,
           

        });

    } catch (error) {
        res.status(500).json({
            msg: 'algo salió mal',
            error
        })
    }
    
}

module.exports={
    login
}
