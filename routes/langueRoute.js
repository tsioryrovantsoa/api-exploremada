const LangueController = require("../controllers/langueController");
const express = require('express');
const router = express.Router();

const controller = new LangueController();

router.get('/',controller.getAllLangue);
router.post('/',controller.createLangue);
router.put('/:id',controller.updateLangue);
router.delete('/', controller.deleteSalle);

module.exports = router;