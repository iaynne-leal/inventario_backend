const Hardware = require('../models/Hardware');

// Obtener todos los registros de hardware
const getHardwares = async (req = request, res = response) => {
    try {
      const hardwares = await Hardware.findAll();
      res.json(hardwares);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Ocurrió un error al obtener los datos de hardware.',
        error
      });
    }
  };
  
  module.exports = {
    getHardwares
  };