# API Blagues Carambar - Projet Express/Node.js

![Project Status](https://img.shields.io/badge/Project%20Status-Finished-green)
[![CodeFactor](https://www.codefactor.io/repository/github/lindabgaa/api-blagues-carambar/badge)](https://www.codefactor.io/repository/github/lindabgaa/api-blagues-carambar)

L’**API Blagues Carambar** est une application web développée avec **Node.js** et **Express**. Utilisant **Sequelize** pour interagir avec une base de données **SQLite**, cette API offre des endpoints permettant d’ajouter de nouvelles blagues, de consulter toutes les blagues, d’obtenir une blague aléatoire, et d’accéder à une blague en fonction de son ID. Elle est documentée avec **Swagger**, ce qui simplifie son intégration et son utilisation. Le Projet est déployé sur **Render.com**.

[Documentation de l'API](https://blagues-carambar-api.onrender.com/api/v1/docs/)

## Technologies

- **Node.js** : Environnement d’exécution JavaScript côté serveur.
- **Express** : Framework minimaliste pour construire des applications web et APIs.
- **Sequelize** : ORM pour interagir avec la base de données SQLite.
- **SQLite** : Système de gestion de base de données léger.
- **Swagger** : Outil pour documenter et tester des APIs.

## Installation & Configuration

- Clonez le dépôt : `git clone https://github.com/lindabgaa/api-blagues-carambar.git`
- Accédez au dossier du projet : `cd api-blagues-carambar`
- Installez les dépendances : `npm install`
- Créez le fichier de base de données (s'il n'existe pas déjà) : `touch database.sqlite`
- Peuplez la base de données avec une cinquantaine de blagues : `npm run seed`
- Lancez le serveur : `npm run dev`
