const express = require('express');
const router = express.Router();
const sauceController = require('../controllers/sauces');
const auth = require('../middleware/auth');
const multer = require('multer');
//*** création des Routes ***/
router.post('/',auth, multer, sauceController.createSauce); // créer une sauce
router.put('/:id',auth, multer, sauceController.modifySauce); // Modifier une sauce
router.delete('/:id',auth, sauceController.deleteSauce); // Supprimer une sauce
router.get('/:id',auth, sauceController.getOneSauce); // Obtenir une sauce
router.get('/',auth, sauceController.getAllSauces); // Obtenir toutes les sauces

module.exports = router;
