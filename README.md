# Carambar Jokes API - Express/SQLite Project

![Project Status](https://img.shields.io/badge/Project%20Status-Finished-green?style=flat-square)
[![CodeFactor](https://www.codefactor.io/repository/github/lindabgaa/carambar-jokes-api/badge?style=flat-square)](https://www.codefactor.io/repository/github/lindabgaa/carambar-jokes-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

This project is a web application developed with **Express**. Using **Sequelize** ORM to interact with a **SQLite** database, this API provides endpoints to add new jokes, view all jokes, retrieve a random joke, and access a specific joke by its ID. It is documented with **Swagger** and deployed on **Render.com**.

[API Documentation](https://carambar-jokes-api.onrender.com/api/v1/docs)

[![Endpoint Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fcarambar-jokes-api.onrender.com%2Fapi%2Fv1%2Fstatus&style=flat-square)](https://stats.uptimerobot.com/Upe7finkYZ/797919584)

## Tech Stack

- **Node**, **Express**, **SQLite**, **Sequelize**, **Swagger**

## Installation & Configuration

1. **Clone the repository**: `git clone https://github.com/lindabgaa/carambar-jokes-api.git`
2. **Navigate to the project folder**: `cd carambar-jokes-api`
3. **Create a .env file**: `touch .env`
4. **Add the necessary environment variables**:

- `NODE_ENV` # Runtime environment (set to development, test, or production)
- `PORT` # The port on which your API will run locally (e.g., 8080)
- `CORS_ORIGINS` # Allowed origins for CORS requests (e.g., http://localhost:PORT,https://YOUR_DOMAIN.com,)
- `API_URL` # The URL where your API is hosted in production (e.g., https://YOUR_DOMAIN.com/api/v1).

5. **Run the setup script**: `npm run setup`, that will:

- Install required dependencies.
- Run database migrations.
- Seed the database with initial data.

6. **Start the development server**: `npm run dev`
7. **Access the API documentation**: `http://localhost:PORT/api/v1/docs`

## Endpoint /api/v1/status

The `/api/v1/status` endpoint uses [Uptime Robot](https://uptimerobot.com/) to display the API’s current status (online or offline), enabling the status badge in GitHub.

**Note**: If you prefer not to include this endpoint, you can remove it from the `app.js` file.

To set up this endpoint, follow these steps:

1. **Create an account on [Uptime Robot](https://uptimerobot.com/)**.
2. **Create a new monitor**:

- After logging in, click on “New Monitor”.
- Choose “HTTP(s)” as the monitor type.
- Enter the URL of your API.
- Set the monitoring interval (e.g., 5 minutes).
- Click “Create Monitor”.

3. **Retrieve your API key**:

- Select “Integrations & API” to find your API Key.

4. **Obtain your Monitor ID**:

- You can use [Hoppscotch](https://hoppscotch.io/) to make a quick **POST** request to `https://api.uptimerobot.com/v2/getMonitors?api_key=YOUR_KEY` using your API key. The response will contain the ID of your monitor.

5. **Set up environment variables** in your .env file:

- `UPTIME_ROBOT_API_KEY` : Uptime Robot API key for authentication.
- `UPTIME_ROBOT_MONITOR_ID` : ID of the Uptime Robot monitor for the API.

6. **Create a Status page**:

- After logging in, go to the "Status Pages" section on [Uptime Robot](https://uptimerobot.com/).
- Click on "Create Status Page".
- Fill in the required details, such as the name and description of your status page.
- Select the monitors you want to include.
- Click "Create Status Page".

7. **Create a badge** on [Shields.io](https://shields.io/):

- Choose to create an **Endpoint Badge**.
- Specify the URL of your API status endpoint (e.g., https://YOUR_DOMAIN/api/v1/status).
- Use the generated badge URL in your **README** to display the current status of your API.
- Set the link for the badge to your status page, allowing users to click on the badge to view the Uptime Robot status page directly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
