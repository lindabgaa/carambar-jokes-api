const sequelize = require("../config/db");
const Joke = require("../models/jokeModel");

const handleError = (res, statusCode = 500, message, error = null) => {
  console.error(message, error);

  const response = { message };
  if (error) {
    response.error = error;
  }

  res.status(statusCode).json(response);
};

// Fonction pour ajouter une blague
const addJoke = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (question === undefined || answer === undefined) {
      return handleError(
        res,
        400,
        "Le corps de la requête doit contenir 'question' et 'answer'."
      );
    }

    if (
      typeof question !== "string" ||
      question.trim() === "" ||
      typeof answer !== "string" ||
      answer.trim() === ""
    ) {
      return handleError(
        res,
        400,
        "La question et la réponse doivent être des chaînes de caractères non vides."
      );
    }

    const newJoke = await Joke.create({ question, answer });
    res
      .status(201)
      .json({ message: "Blague ajoutée avec succès.", joke: newJoke });
  } catch (error) {
    handleError(
      res,
      "Une erreur s'est produite lors de l'ajout de la blague. Veuillez réessayer.",
      error
    );
  }
};

// Fonction pour récupérer toutes les blagues disponibles
const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();

    if (jokes.length === 0) {
      return handleError(res, 404, "Aucune blague disponible.", null);
    }

    res.status(200).json(jokes);
  } catch (error) {
    handleError(
      res,
      "Une erreur s'est produite lors de la récupération des blagues. Veuillez réessayer.",
      error
    );
  }
};

// Fonction pour récupérer une blague aléatoire
const getRandomJoke = async (req, res) => {
  try {
    const joke = await Joke.findOne({ order: sequelize.random() });

    if (!joke) {
      return handleError(res, 404, "Aucune blague disponible.", null);
    }

    return res.status(200).json(joke);
  } catch (error) {
    handleError(
      res,
      "Une erreur s'est produite lors de la récupération d'un blague aléatoire. Veuillez réessayer.",
      error
    );
  }
};

// Fonction pour récupérer une blague par son id
const getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);

    if (!joke) {
      return handleError(
        res,
        404,
        "Blague non trouvée. L'ID fourni ne correspond à aucune blague existante. Veuillez vérifier l'ID et réessayer."
      );
    }

    res.status(200).json(joke);
  } catch (error) {
    handleError(
      res,
      "Une erreur s'est produite lors de la récupération de la blague avec l'ID {id}. Veuillez réessayer.",
      error
    );
  }
};

module.exports = { addJoke, getAllJokes, getRandomJoke, getJokeById };
