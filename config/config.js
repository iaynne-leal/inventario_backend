require('dotenv').config();
const { Sequelize } = require('sequelize');

module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.BD,
    host: process.env.HOST,
    dialect: "mysql"
  },

};

  
