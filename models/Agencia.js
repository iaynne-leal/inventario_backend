const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Agencia = sequelize.define("agencia",
  {
    id_agencia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    nombre_agencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    especial: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "agencia",
    timestamps: false,
  }
);
module.exports = Agencia;
