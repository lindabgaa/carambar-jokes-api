# Carambar Jokes API - Express/Node.js Project

![Project Status](https://img.shields.io/badge/Project%20Status-Finished-green?style=flat-square)
[![CodeFactor](https://www.codefactor.io/repository/github/lindabgaa/carambar-jokes-api/badge)](https://www.codefactor.io/repository/github/lindabgaa/carambar-jokes-api)

The **Carambar Jokes API** is a web application developed with **Node.js** and **Express**. Using **Sequelize** to interact with a **SQLite** database, this API provides endpoints to add new jokes, view all jokes, retrieve a random joke, and access a specific joke by its ID. It is documented with **Swagger**, making integration and usage straightforward. The project is deployed on **Render.com**.

[API Documentation]()

[![Endpoint Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fblagues-carambar-api.onrender.com%2Fapi%2Fv1%2Fstatut&style=for-the-badge)](https://stats.uptimerobot.com/Upe7finkYZ/797919584)

## Tech Stack

- **Node.js**: A JavaScript runtime environment for server-side execution.
- **Express**: A minimalist framework for building web applications and APIs.
- **Sequelize**: An ORM to interact with the SQLite database.
- **SQLite**: A lightweight database management system.
- **Swagger**: A tool for documenting and testing APIs.

## Installation & Configuration

- Clone the repository: `git clone https://github.com/lindabgaa/carambar-jokes-api.git`
- Navigate to the project folder: `cd carambar-jokes-api`
- Create a .env file: `touch .env`
- Add the necessary environment variables:
  - `NODE_ENV` # Runtime environment (development, test, or production)
  - `PORT` # (e.g., 8080)
  - `CORS_ORIGINS` # Allowed origins for CORS requests
  - `API_URL` # Deployment URL of the API
- Run the setup script: `npm run setup`
- Start the development server: `npm run dev`
- Access the API documentation: `http://localhost:PORT/api/v1/docs`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
