const express = require('express');
const router = express.Router();
const UtilisateurController = require('../controllers/utilisateurController');


const controller = new UtilisateurController();
router.post('/inscription', controller.inscription);
module.exports = router;