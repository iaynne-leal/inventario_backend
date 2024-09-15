const { Agencia, Departamento, Area } = require('../models'); 

const getDepartamentos = async (req, res) => {
  try {
    const { id_agencia } = req.params; // Suponiendo que pasas el ID de la agencia como parámetro en la URL

    // Primero obtenemos la agencia para verificar si es especial
    const agencia = await Agencia.findByPk(id_agencia);
    if (!agencia) {
      return res.status(404).json({ msg: 'Agencia no encontrada' });
    }

    let departamentos;
    if (agencia.especial) {
      // Si la agencia es especial, obtenemos los departamentos agrupados por área
      departamentos = await Departamento.findAll({
        include: [
          {
            model: Area,
            as: 'area',
            attributes: ['id_area', 'nombre_area']
          }
        ],
        where: { id_agencia }
      });
    } else {
      // Si la agencia no es especial, solo obtenemos los departamentos
      departamentos = await Departamento.findAll({
        where: { id_agencia }
      });
    }

    res.json(departamentos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener datos', error: error.message });
  }
};

const getDepartamentosPorArea = async (req, res) => {
    try {
      const { id_agencia, id_area } = req.params;
  
      const departamentos = await Departamento.findAll({
        where: { id_agencia, id_area },
        include: [
          {
            model: Area,
            as: 'area',
            attributes: ['id_area', 'nombre_area']
          }
        ]
      });
  
      // En lugar de enviar un 404, enviamos un array vacío si no hay departamentos
      res.json(departamentos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error al obtener departamentos por área', error: error.message });
    }
};

  const postDepartamento = async (req, res) => {
    try {
      const { id_agencia, id_area, nombre_departamento } = req.body;
  
      // Verificar si la agencia existe
      const agencia = await Agencia.findByPk(id_agencia);
      if (!agencia) {
        return res.status(404).json({ msg: 'Agencia no encontrada' });
      }
  
      // Verificar si la agencia es especial (tiene áreas)
      if (agencia.especial) {
        // Si es especial, verificar si se proporcionó un id_area
        if (!id_area) {
          return res.status(400).json({ msg: 'Se requiere un ID de área para esta agencia' });
        }
  
        // Verificar si el área existe y pertenece a la agencia
        const area = await Area.findOne({ where: { id_area, id_agencia } });
        if (!area) {
          return res.status(404).json({ msg: 'Área no encontrada o no pertenece a esta agencia' });
        }
  
        // Crear el departamento con id_area
        const departamento = await Departamento.create({
          id_agencia,
          id_area,
          nombre_departamento
        });
  
        res.status(201).json({ msg: 'Departamento creado con éxito', departamento });
      } else {
        // Si no es especial, crear el departamento sin id_area
        const departamento = await Departamento.create({
          id_agencia,
          nombre_departamento
        });
  
        res.status(201).json({ msg: 'Departamento creado con éxito', departamento });
      }
    } catch (error) {
      console.error('Error al crear departamento:', error);
      res.status(500).json({ msg: 'Error al crear departamento', error: error.message });
    }
  };

module.exports = { getDepartamentos, getDepartamentosPorArea, postDepartamento };
