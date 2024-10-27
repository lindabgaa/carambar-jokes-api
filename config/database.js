const { Sequelize } = require("sequelize");
const config = require("../config/config.json");
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

console.log("dbConfig", dbConfig);

const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  storage: dbConfig.storage,
});

module.exports = sequelize;
