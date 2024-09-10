const Agencia = require("../models/Agencia");

const agenciaGet = async (req, res) => {
    try {
        const agencias = await Agencia.findAll();
        if (agencias.length === 0) {
            return res.status(404).json({
                msg: 'No se encontraron agencias'
            });
        }
        res.json({
            msg: 'Agencias encontradas',
            agencias
        });
    } catch (error) {
        console.error('Error al obtener agencias:', error);
        res.status(500).json({
            msg: 'Error al obtener datos',
            error: error.message,
            stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack
        });
    }
};

const agenciaPost = async (req, res) => {
    const { nombre_agencia, especial } = req.body;

    if (!nombre_agencia) {
        return res.status(400).json({ msg: 'El nombre de la agencia es requerido' });
    }

    try {
        const newAgency = await Agencia.create({
            nombre_agencia,
            especial
        });

        res.status(201).json({ msg: 'Agencia creada', newAgency });
    } catch (error) {
        console.error('Error al crear agencia:', error);
        res.status(500).json({
            msg: 'Error al crear agencia',
            error: error.message,
            stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack
        });
    }
};

module.exports = {
    agenciaGet,
    agenciaPost
};
