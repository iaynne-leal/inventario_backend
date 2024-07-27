const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const Agencia = require('./Agencia');


const Area = sequelize.define("tipo_area",
  {
    id_area: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
    },

    nombre_area: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id_agencia: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "tipo_area",
    timestamps: false,
  }
);

Area.belongsTo(Agencia, { foreignKey: 'id_agencia' });
module.exports = Area;
