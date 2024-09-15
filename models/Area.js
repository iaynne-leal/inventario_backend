const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const Agencia = require('./Agencia');

module.exports = (sequelize,DataTypes) => {

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
        allowNull: false,
        
      },
    },
    {
      tableName: "tipo_area",
      timestamps: false,
    }
  );
  
  Area.associate = (models) => {
    Area.belongsTo(models.Agencia, 
      { foreignKey: 'id_agencia', 
        targetKey: 'id_agencia',
      });
  };
  return Area;
};

