// Import d'express
const express = require('express');
// Création du routeur
const router = express.Router();
// Importation des middleware d'authentification
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
// Importation des controleurs
const sauceController = require('../controllers/sauces');
//*** création des Routes ***/

router.post('/', auth, multer, sauceController.createSauce); // créer une sauce
router.put('/:id', auth, multer, sauceController.modifySauce); // Modifier une sauce
router.delete('/:id', auth, sauceController.deleteSauce); // Supprimer une sauce
router.get('/:id', auth, sauceController.getOneSauce); // Obtenir une sauce
router.get('/', auth, sauceController.getAllSauces); // Obtenir toutes les sauces

module.exports = router;
