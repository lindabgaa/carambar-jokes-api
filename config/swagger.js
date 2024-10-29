const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Carambar Jokes API",
      version: "1.0.0",
      description:
        "This API allows you to manage a collection of Carambar jokes. With it, you can add new jokes, retrieve a random joke, list all available jokes, and fetch a specific joke using its ID, bringing a touch of humor to your projects!",
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
