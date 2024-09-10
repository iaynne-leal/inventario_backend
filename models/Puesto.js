const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const Agencia = require('./Agencia');
const Area = require('./Area');
const Departamento = require('./Departamento');


const Puesto = sequelize.define("puesto",
  {
    id_puesto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
    },

    nombre_puesto: {
      type: DataTypes.STRING,
      allowNull: false,
    },


      id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
  },
  {
    tableName: "puesto",
    timestamps: false,
  }
);

Puesto.belongsTo(Departamento, { foreignKey: 'id_departamento' });

module.exports = Puesto;
