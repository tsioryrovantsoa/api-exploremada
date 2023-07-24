const LangueController = require("../controllers/langueController");
const express = require('express');
const router = express.Router();

const controller = new LangueController();

router.get('/',controller.getAllLangue);

module.exports = router;