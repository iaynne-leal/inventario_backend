const { Agencia, Area } = require("../models");

// Controlador para obtener áreas de una agencia específica
const getAreasByAgencia = async (req, res) => {
    try {
      const { id_agencia } = req.params;
  
      // Encuentra la agencia para validar que existe
      const agencia = await Agencia.findByPk(id_agencia);
      if (!agencia) {
        return res.status(404).json({ msg: 'Agencia no encontrada' });
      }
  
      // Encuentra las áreas relacionadas con la agencia
      const areas = await Area.findAll({ where: { id_agencia } });
  
      res.json({ areas });
    } catch (error) {
      console.error('Error al obtener áreas:', error);
      res.status(500).json({ msg: 'Error interno del servidor' });
    }
  };

  module.exports = {
    getAreasByAgencia
  }
