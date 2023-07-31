const FavorisController = require("../controllers/favorisController");
const authMiddleware = require("../middleware/authMiddleware");
const express = require('express');
const router = express.Router();

const controller = new FavorisController();

router.get('/',controller.getAllFavoris);
router.get('/mesFavoris', authMiddleware, controller.getByUserFavoris);
router.post('/',controller.createFavoris);
router.put('/:id',controller.updateFavoris);
 router.delete('/', controller.deleteFavoris);

module.exports = router;