const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Departamento = sequelize.define("departamento",
    {
      id_departamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      nombre_departamento: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      id_area: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'tipo_area',
          key: 'id_area'
        }
      },

      id_agencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'agencia',
          key: 'id_agencia'
        }
      }
    },
    {
      tableName: "departamento",
      timestamps: false,
    }
  );

  Departamento.associate = (models) => {
    Departamento.belongsTo(models.Area, {
      foreignKey: 'id_area',
      targetKey: 'id_area',
      as: 'area'
    });
    Departamento.belongsTo(models.Agencia, {
      foreignKey: 'id_agencia',
      targetKey: 'id_agencia',
      as: 'agencia'
    });

    Departamento.hasMany(models.Puesto, {
      foreignKey: 'id_departamento',
      as: 'puestos'
    });
  };

  return Departamento;
};