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
app.use(express.json()); // Permet de parser les requêtes en JSON
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

// Route de statut de l'API (Uptime Robot)
app.get("/api/v1/statut", async (req, res) => {
  const API_KEY = process.env.UPTIME_ROBOT_API_KEY;
  const MONITOR_ID = process.env.UPTIME_ROBOT_MONITOR_ID;
  const url = `https://api.uptimerobot.com/v2/getMonitors`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: API_KEY,
        format: "json",
        monitors: MONITOR_ID,
      }),
    });

    if (response.ok) {
      const monitorData = await response.json();

      const status =
        monitorData.monitors[0].status === 2 ? "Online" : "Offline";
      const color = status === "Online" ? "#97c40e" : "#cc573f";

      return res.status(200).json({
        schemaVersion: 1,
        label: "API Status",
        message: status,
        color: color,
      });
    }

    return res.status(response.status).json({
      error: "Échec de la récupération du statut du moniteur",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Erreur lors de la récupération des données",
    });
  }
});
