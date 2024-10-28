# API Blagues Carambar - Projet Express/Node.js

![Project Status](https://img.shields.io/badge/Project%20Status-Finished-green)
[![CodeFactor](https://www.codefactor.io/repository/github/lindabgaa/api-blagues-carambar/badge)](https://www.codefactor.io/repository/github/lindabgaa/api-blagues-carambar)

L’**API Blagues Carambar** est une application web développée avec **Node.js** et **Express**. Utilisant **Sequelize** pour interagir avec une base de données **SQLite**, cette API offre des endpoints permettant d’ajouter de nouvelles blagues, de consulter toutes les blagues, d’obtenir une blague aléatoire, et d’accéder à une blague en fonction de son ID. Elle est documentée avec **Swagger**, ce qui simplifie son intégration et son utilisation. Le Projet est déployé sur **Render.com**.

[Documentation de l'API](https://blagues-carambar-api.onrender.com/api/v1/docs/)

![Endpoint Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fblagues-carambar-api.onrender.com%2Fstatut)

## Technologies

- **Node.js** : Environnement d’exécution JavaScript côté serveur.
- **Express** : Framework minimaliste pour construire des applications web et APIs.
- **Sequelize** : ORM pour interagir avec la base de données SQLite.
- **SQLite** : Système de gestion de base de données léger.
- **Swagger** : Outil pour documenter et tester des APIs.

## Installation & Configuration

- Clonez le dépôt : `git clone https://github.com/lindabgaa/api-blagues-carambar.git`
- Accédez au dossier du projet : `cd api-blagues-carambar`
- Créez un fichier .env : `touch .env`
- Ajoutez les variables d’environnement nécessaires :
  - `NODE_ENV` # Environnement d'éxécution (development, test ou production)
  - `PORT` # (ex: 8080)
  - `CORS_ORIGINS` # Origines autorisées pour les requêtes CORS
  - `API_URL` # URL de déploiement de l'API
- Lancez le script de configuration : `npm run setup`
- Lancez le serveur de development : `npm run dev`
- Consultez la documentation de l'API : `http://localhost:PORT/api/v1/docs`
