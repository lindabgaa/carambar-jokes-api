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
 * /blagues:
 *   post:
 *     summary: Ajouter une nouvelle blague
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
 *         description: Blague ajoutée avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Blague ajoutée avec succès."
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
 *         description: Erreur de validation des données d'entrée (question ou réponse invalide).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "La question et la réponse doivent être des chaînes de caractères non vides."
 *       '500':
 *         description: Erreur lors de l'ajout de la blague.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Une erreur s'est produite lors de l'ajout de la blague. Veuillez réessayer."
 */
router.post("/blagues", addJoke);

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupérer toutes les blagues
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
 *         description: Aucune blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Aucune blague disponible."
 *       500:
 *         description: Erreur lors de la récupération des blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Une erreur s'est produite lors de la récupération des blagues. Veuillez réessayer."
 */
router.get("/blagues", getAllJokes);

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupérer une blague aléatoire
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
 *         description: Aucune blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Aucune blague disponible."
 *       500:
 *         description: Erreur lors de la récupération d'une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Une erreur s'est produite lors de la récupération d'une blague aléatoire. Veuillez réessayer."
 */
router.get("/blagues/random", getRandomJoke);

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupérer une blague à partir d'un ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la blague
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
 *         description: Blague non trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Blague non trouvée. L'ID fourni ne correspond à aucune blague existante. Veuillez vérifier l'ID et réessayer."
 *       500:
 *         description: Erreur lors de la récupération de la blague
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Une erreur s'est produite lors de la récupération de la blague avec l'ID {id}. Veuillez réessayer."
 */
router.get("/blagues/:id", getJokeById);

module.exports = router;
