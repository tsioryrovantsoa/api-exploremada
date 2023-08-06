const Lieu_imageController = require("../controllers/lieu_imageController");
const express = require('express');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const router = express.Router();

const controller = new Lieu_imageController();

router.get('/',controller.getAllLieu_image);
router.post('/',uploadMiddleware(['.jpg','.jpeg','.png'],'lieu','image'),controller.createLieu_image);
router.put('/:id',controller.updateLieu_image);
 router.delete('/', controller.deleteLieu_image);

module.exports = router;