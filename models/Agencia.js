const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
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
  
  Agencia.associate = (models) => {
    Agencia.hasMany(models.Area, {
      foreignKey: 'id_agencia',
      sourceKey: 'id_agencia',
    });
  };

  return Agencia;
};