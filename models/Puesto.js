const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Puesto = sequelize.define("puesto",
    {
      id_puesto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre_puesto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'departamento',
          key: 'id_departamento'
        }
      }
    },
    {
      tableName: "puesto",
      timestamps: false,
    }
  );

  Puesto.associate = (models) => {
    Puesto.belongsTo(models.Departamento, {
      foreignKey: 'id_departamento',
      as: 'departamento'
    });
    Puesto.hasOne(models.Equipo, {
      foreignKey: 'id_puesto',
      as: 'equipo'
    });
  };

  return Puesto;
};