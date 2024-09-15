const { Agencia, Area } = require("../models");


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
        // Verificar si ya existe una agencia con el mismo nombre
        const existingAgency = await Agencia.findOne({ where: { nombre_agencia } });
        if (existingAgency) {
            return res.status(400).json({ msg: 'Ya existe una agencia con este nombre' });
        }

        const newAgency = await Agencia.create({
            nombre_agencia,
            especial
        });

        if (especial) {
            // Crear áreas automáticamente para agencias especiales
            await Area.bulkCreate([
                { nombre_area: 'Agencia', id_agencia: newAgency.id_agencia },
                { nombre_area: 'Area Administrativa', id_agencia: newAgency.id_agencia }
            ]);
        }

        res.status(201).json({ 
            msg: 'Agencia creada', 
            newAgency,
            areasCreadas: especial ? ['Agencia', 'Area Administrativa'] : []
        });
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
    agenciaPost,
    
};
