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

// Function to add a joke
const addJoke = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (question === undefined || answer === undefined) {
      return handleError(
        res,
        400,
        "The request body must contain 'question' and 'answer'."
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
        "The question and answer must be non-empty strings."
      );
    }

    const newJoke = await Joke.create({ question, answer });
    res
      .status(201)
      .json({ message: "Joke successfully added.", joke: newJoke });
  } catch (error) {
    handleError(
      res,
      "An error occurred while adding the joke. Please try again.",
      error
    );
  }
};

// Function to retrieve all available jokes
const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();

    if (jokes.length === 0) {
      return handleError(res, 404, "No jokes available.", null);
    }

    res.status(200).json(jokes);
  } catch (error) {
    handleError(
      res,
      "An error occurred while retrieving jokes. Please try again.",
      error
    );
  }
};

// Function to retrieve a random joke
const getRandomJoke = async (req, res) => {
  try {
    const joke = await Joke.findOne({ order: sequelize.random() });

    if (!joke) {
      return handleError(res, 404, "No jokes available.", null);
    }

    return res.status(200).json(joke);
  } catch (error) {
    handleError(
      res,
      "An error occurred while retrieving a random joke. Please try again.",
      error
    );
  }
};

// Function to retrieve a joke by its ID
const getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);

    if (!joke) {
      return handleError(
        res,
        404,
        "Joke not found. The provided ID does not match any existing joke. Please check the ID and try again."
      );
    }

    res.status(200).json(joke);
  } catch (error) {
    handleError(
      res,
      "An error occurred while retrieving the joke with ID {id}. Please try again.",
      error
    );
  }
};

module.exports = { addJoke, getAllJokes, getRandomJoke, getJokeById };
