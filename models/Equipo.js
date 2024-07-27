const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const Puesto = require('./Puesto');


const Equipo = sequelize.define("equipo",
  {
    id_area: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
    },


    id_puesto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    id_hardware: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    id_software: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    tableName: "equipo",
    timestamps: false,
  }
);

Equipo.belongsTo(Puesto, { foreignKey: 'id_puesto' });
module.exports = Equipo;
