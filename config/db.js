const { Sequelize } = require("sequelize");
const config = require("./config.json");
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env]; // Configuration de la base de données en fonction de l'environnement (development, test, production)

const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  storage: dbConfig.storage,
});

module.exports = sequelize;
