const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const Area = require('./Area');


const Departamento = sequelize.define("departamento",
  {
    id_departamento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
    },

    nombre_departamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id_area: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "departamento",
    timestamps: false,
  }
);

module.exports = Departamento;
