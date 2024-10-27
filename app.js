require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swagger = require("./config/swagger");
const jokeRoutes = require("./routes/jokeRoutes.js");
const sequelize = require("./config/db.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration CORS
const corsOptions = {
  origin: process.env.CORS_ORIGINS.split(","),
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/v1", jokeRoutes);
swagger(app);

// Connexion à la base de données et lancement du serveur
sequelize
  .authenticate()
  .then(() => {
    console.log("La connexion à la base de donnée a été établie avec succès.");

    app.listen(PORT, () => {
      console.log(`Le serveur est lancé sur le port ${PORT}`);
      console.log("Environnement de travail :", process.env.NODE_ENV);
    });
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base de données :", err);
    process.exit(1);
  });

// Route de bienvenue
app.get("/", (req, res) => {
  res.send(
    "Bienvenue sur l'API de blagues Carambar ! Consultez /api/v1/docs pour voir la documentation complète."
  );
});
