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


    id_agencia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    id_area: {
        type: DataTypes.INTEGER,
        allowNull: true
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

Puesto.belongsTo(Agencia, { foreignKey: 'id_agencia' });
Puesto.belongsTo(Area, { foreignKey: 'id_area' });
Puesto.belongsTo(Departamento, { foreignKey: 'id_departamento' });

module.exports = Puesto;
