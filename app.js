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

// ---- API status route (Uptime Robot)
app.get("/api/v1/status", async (req, res) => {
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
      const color = status === "Online" ? "#66bb6a" : "#d32f2f";

      return res.status(200).json({
        schemaVersion: 1,
        label: "API Status",
        message: status,
        color: color,
      });
    }

    return res.status(response.status).json({
      error: "Failed to retrieve monitor status",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error fetching data",
    });
  }
});
