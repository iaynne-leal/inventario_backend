const {
    Equipo,
    Puesto,
    Hardware,
    Software,
    Departamento,
  } = require("../models");
  const { sequelize } = require("../models");
  
  const getEquipo = async (req, res) => {
    try {
      const { id_puesto } = req.params;
  
      const puesto = await Puesto.findByPk(id_puesto, {
        include: [{ model: Departamento, as: "departamento" }],
      });
  
      if (!puesto) {
        return res.status(404).json({ msg: "Puesto no encontrado" });
      }
  
      const equipo = await Equipo.findOne({
        where: { id_puesto },
        include: [
          { model: Hardware, as: "hardware" },
          { model: Software, as: "software" },
          {
            model: Puesto,
            as: "puesto",
            include: [{ model: Departamento, as: "departamento" }],
          },
        ],
      });
  
      if (!equipo) {
        return res.json({ msg: "No se encontró equipo para este puesto", equipo: null });
      }
  
      res.json(equipo);
    } catch (error) {
      console.error("Error al obtener equipo:", error);
      res
        .status(500)
        .json({ msg: "Error al obtener equipo", error: error.message });
    }
  };
  
  const postEquipo = async (req, res) => {
    const t = await sequelize.transaction();
  
    try {
      const { id_puesto, hardware, software } = req.body;
  
      if (!id_puesto || !hardware || !software) {
        await t.rollback();
        return res.status(400).json({
          msg: "El ID del puesto, datos de hardware y software son requeridos",
        });
      }
  
      const puesto = await Puesto.findByPk(id_puesto, {
        include: [{ model: Departamento, as: "departamento" }],
      });
  
      if (!puesto) {
        await t.rollback();
        return res.status(404).json({ msg: "Puesto no encontrado" });
      }
  
      if (!puesto.departamento) {
        await t.rollback();
        return res
          .status(404)
          .json({ msg: "Departamento no encontrado para este puesto" });
      }
  
      const equipoExistente = await Equipo.findOne({ where: { id_puesto } });
      if (equipoExistente) {
        await t.rollback();
        return res
          .status(400)
          .json({ msg: "Este puesto ya tiene un equipo asignado" });
      }
  
      const nuevoHardware = await Hardware.create(hardware, { transaction: t });
      const nuevoSoftware = await Software.create(software, { transaction: t });
  
      const nuevoEquipo = await Equipo.create(
        {
          id_puesto,
          id_hardware: nuevoHardware.id_hardware,
          id_software: nuevoSoftware.id_software,
        },
        { transaction: t }
      );
  
      await t.commit();
  
      const equipoCreado = await Equipo.findByPk(nuevoEquipo.id_equipo, {
        include: [
          { model: Hardware, as: "hardware" },
          { model: Software, as: "software" },
          { model: Puesto, as: "puesto" },
        ],
      });
  
      if (!equipoCreado) {
        throw new Error("No se pudo recuperar el equipo creado");
      }
  
      res
        .status(201)
        .json({ msg: "Equipo creado con éxito", equipo: equipoCreado });
    } catch (error) {
      await t.rollback();
      console.error("Error al crear equipo:", error);
      res
        .status(500)
        .json({ msg: "Error al crear equipo", error: error.message });
    }
  };
  
  module.exports = {
    getEquipo,
    postEquipo,
  };