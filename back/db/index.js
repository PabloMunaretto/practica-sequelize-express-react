const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/integradorbackfront", {
  logging: false, // set to console.log to see the raw SQL queries
});

module.exports = db;
