const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.BD,
  process.env.USER,
  process.env.PASS,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Inicializa los modelos
db.Agencia = require('./Agencia')(sequelize, DataTypes);
db.Area = require('./Area')(sequelize, DataTypes);
db.Departamento = require('./Departamento')(sequelize, DataTypes);
db.Puesto = require('./Puesto')(sequelize,DataTypes);
db.Hardware = require('./Hardware')(sequelize,DataTypes);
db.Software = require('./Software')(sequelize,DataTypes);
db.Equipo = require('./Equipo')(sequelize,DataTypes);

// Asociaciones
Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

module.exports = db;