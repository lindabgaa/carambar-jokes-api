const express = require("express");
const cors = require("cors");
const swagger = require("./config/swagger");
const jokeRoutes = require("./routes/jokeRoutes.js");
const sequelize = require("./config/database.js");

const app = express();
const PORT = process.env.PORT || 10000;

// Configuration CORS
const corsOptions = {
  origin: ["https://lindabgaa.github.io", "http://localhost:10000"],
  methods: ["GET", "POST", "OPTIONS"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/v1", jokeRoutes);
swagger(app);

app.get("/", (req, res) => {
  res.send(
    "Bienvenue sur l'API de blagues Carambar ! Consultez /api/v1/docs pour voir la documentation complète."
  );
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion à la base de données réussie !");
    app.listen(PORT, () => {
      console.log(`Le serveur est lancé sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Impossible de se connecter à la base de données :", error);
  });
