const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const Puesto = require("./Puesto");

module.exports = (sequelize, DataTypes) => {
  const Equipo = sequelize.define(
    "equipo",
    {
      id_equipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_puesto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, // Asegura que cada puesto tenga solo un equipo
      },
      id_hardware: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, // Asegura que cada hardware esté asociado a un solo equipo
      },
      id_software: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, 
      },
    },
    {
      tableName: "equipo",
      timestamps: false,
    }
  );
  Equipo.associate = (models) => {
    Equipo.belongsTo(models.Puesto, {
      foreignKey: 'id_puesto',
      as: 'puesto',
    });
    Equipo.belongsTo(models.Hardware, {
      foreignKey: 'id_hardware',
      as: 'hardware',
    });
    Equipo.belongsTo(models.Software, {
      foreignKey: 'id_software',
      as: 'software',
    });
  };
  
  return Equipo;
};
