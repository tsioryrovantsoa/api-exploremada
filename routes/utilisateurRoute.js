const express = require('express');
const router = express.Router();
const UtilisateurController = require('../controllers/utilisateurController');


const controller = new UtilisateurController();
router.post('/inscription', controller.inscription);
router.get('/',controller.getAllUtilisateur);
router.put('/:id',controller.updateUtilisateur);
 router.delete('/', controller.deleteUtilisateur);
module.exports = router;