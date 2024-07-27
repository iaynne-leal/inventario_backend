const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Hardware = sequelize.define("hardware",
  {
    id_hardware: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
    },

    codigo_contable: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    escritorio_laptop: {
        type: DataTypes.ENUM,
        values: ['escritorio','laptop'],
        allowNull: false,
      },

     almacenamiento: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      motherboard: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      procesador: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      frecuencia: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      nucleos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      hilos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      arquitectura: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      gpu: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      ram: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      ssd: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      ssd2: {
        type: DataTypes.STRING,
        allowNull: false,
      },

  },
  {
    tableName: "hardware",
    timestamps: false,
  }
);
module.exports = Hardware;
