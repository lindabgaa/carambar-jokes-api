const express = require("express");
const router = express.Router();

const {
  addJoke,
  getAllJokes,
  getJokeById,
  getRandomJoke,
} = require("../controllers/jokeControllers");

/**
 * @swagger
 * /jokes:
 *   post:
 *     summary: Add a new joke
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 example: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?"
 *               answer:
 *                 type: string
 *                 example: "Parce que sinon ils tombent dans le bateau."
 *     responses:
 *       '201':
 *         description: Joke successfully added.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Joke successfully added."
 *                 joke:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: L'identifiant de la blague.
 *                       example: 1
 *                     question:
 *                       type: string
 *                       example: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?"
 *                     answer:
 *                       type: string
 *                       example: "Parce que sinon ils tombent dans le bateau."
 *       '400':
 *         description: Input validation error (invalid question or answer).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "The question and answer must be non-empty strings."
 *       '500':
 *         description: Error adding the joke.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while adding the joke. Please try again."
 */
router.post("/jokes", addJoke);

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Retrieve all jokes
 *     responses:
 *       200:
 *         description: Liste des blagues disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   question:
 *                     type: string
 *                     example: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?"
 *                   answer:
 *                     type: string
 *                     example: "Parce que sinon ils tombent dans le bateau."
 *       404:
 *         description: No jokes found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No jokes available."
 *       500:
 *         description: Error retrieving jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while retrieving jokes. Please try again."
 */
router.get("/jokes", getAllJokes);

/**
 * @swagger
 * /jokes/random:
 *   get:
 *     summary: Retrieve a random joke
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 7
 *                   description: L'identifiant de la blague.
 *                 question:
 *                   type: string
 *                   example: "Deux laitues discutent dans un champ. Que se racontent-elles ?"
 *                 answer:
 *                   type: string
 *                   example: "Des salades."
 *       404:
 *         description: No jokes found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No jokes available."
 *       500:
 *         description: Error retrieving a random joke
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while retrieving a random joke. Please try again."
 */
router.get("/jokes/random", getRandomJoke);

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Retrieve a joke by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID de la blague
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: {id}
 *                 question:
 *                   type: string
 *                   example: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?"
 *                 answer:
 *                   type: string
 *                   example: "Parce que sinon ils tombent dans le bateau."
 *       404:
 *         description: Joke not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Joke not found. The provided ID does not match any existing joke. Please check the ID and try again."
 *       500:
 *         description: Error retrieving the joke
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while retrieving the joke with ID {id}. Please try again."
 */
router.get("/jokes/:id", getJokeById);

module.exports = router;
