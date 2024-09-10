const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const Area = require('./Area');
const Agencia = require("./Agencia");


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
    },

    id_agencia: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "departamento",
    timestamps: false,
  }
);
Departamento.belongsTo(Area, { foreignKey: 'id_area' });
Departamento.belongsTo(Agencia, { foreignKey: 'id_agencia' });
module.exports = Departamento;
