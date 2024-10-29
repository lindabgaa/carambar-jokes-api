require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swagger = require("./config/swagger");
const jokeRoutes = require("./routes/jokeRoutes.js");
const sequelize = require("./config/db.js");

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.CORS_ORIGINS.split(","),
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/v1", jokeRoutes);
swagger(app);

// ---- Database connection and server start
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log("Environment:", process.env.NODE_ENV);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  });

// ---- Welcome route
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Carambar Jokes API! Visit /api/v1/docs to view the full documentation."
  );
});
