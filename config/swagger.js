const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de Blagues Carambar",
      version: "1.0.0",
      description:
        "Cette API permet de gérer une collection de blagues Carambar. Avec elle, vous pouvez ajouter de nouvelles blagues, récupérer une blague aléatoire, lister toutes les blagues disponibles, et récupérer une blague précise en utilisant son ID, apportant ainsi une touche d’humour à vos projets !",
    },
    servers: [
      {
        url:
          process.env.API_URL || `http://localhost:${process.env.PORT || 3000}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const swagger = (app) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = swagger;
