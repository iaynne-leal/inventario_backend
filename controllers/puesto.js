const { Puesto, Departamento } = require('../models');

// Obtener puestos de un departamento
const getPuestos = async (req, res) => {
  try {
    const { id_departamento } = req.params;

    // Verificar si el departamento existe
    const departamento = await Departamento.findByPk(id_departamento);
    if (!departamento) {
      return res.status(404).json({ msg: 'Departamento no encontrado' });
    }

    
    const puestos = await Puesto.findAll({
      where: { id_departamento },
      attributes: ['id_puesto', 'nombre_puesto']
    });

    res.json(puestos);
  } catch (error) {
    console.error('Error al obtener puestos:', error);
    res.status(500).json({ msg: 'Error al obtener puestos', error: error.message });
  }
};

// Crear un nuevo puesto
const postPuesto = async (req, res) => {
    try {
      const { nombre_puesto, id_departamento } = req.body;
  
      // Verificar si el departamento existe
      const departamento = await Departamento.findByPk(id_departamento);
      if (!departamento) {
        return res.status(404).json({ msg: 'Departamento no encontrado' });
      }
  
      const nuevoPuesto = await Puesto.create({
        nombre_puesto,
        id_departamento
      });
  
      res.status(201).json(nuevoPuesto);
    } catch (error) {
      console.error('Error al crear puesto:', error);
      res.status(500).json({ msg: 'Error al crear puesto', error: error.message });
    }
  };
module.exports = {
  getPuestos,
  postPuesto
};