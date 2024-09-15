const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");


const Usuario = sequelize.define("usuario",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    contrasenia: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },
  {
    tableName: "usuario",
    timestamps: false,
    
  }
);

module.exports = Usuario;