const Sequelize = require('sequelize');
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
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
