const Lieu_imageController = require("../controllers/Lieu_imageController");
const express = require('express');
const router = express.Router();

const controller = new Lieu_imageController();

router.get('/',controller.getAllLieu_image);
router.post('/',controller.createLieu_image);
router.put('/:id',controller.updateLieu_image);
router.delete('/', controller.deleteSalle);

module.exports = router;