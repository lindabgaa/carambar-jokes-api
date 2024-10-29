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
      const color = status === "Online" ? "#97c40e" : "#cc573f";

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
