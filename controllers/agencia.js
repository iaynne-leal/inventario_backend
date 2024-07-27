const Agencia = require("../models/Agencia");


const agenciaGet = async (req, res) => {
    try {
        const agencias = await Agencia.findAll();
        res.json({
            msg: 'Agencias encontrados',
            agencias
        });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({
            msg: 'Error al obtener datos',
            error
        });
    }
  };
  
  const agenciaPost = async (req, res) => {
    const {
      nombre_agencia,
      especial 
    } = req.body;
  
    try {
     
      // Crear nueva agencia
      const newAgency = await Agencia.create({
        nombre_agencia,
        especial
      });
  
      res.status(201).json({ msg: 'Agencia creada', newAgency });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Algo salió mal', error });
    }
  };

  module.exports = {
    agenciaGet,
    agenciaPost
  }
  