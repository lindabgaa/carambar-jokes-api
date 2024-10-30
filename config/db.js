const { Sequelize } = require("sequelize");
const config = require("./config.json");
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env]; // get the database configuration based on the current environment

const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  storage: dbConfig.storage,
});

module.exports = sequelize;
