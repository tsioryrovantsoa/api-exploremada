const ImageController = require("../controllers/imageController");
const express = require('express');
const router = express.Router();

const controller = new ImageController();

router.get('/',controller.getAll);

module.exports = router;