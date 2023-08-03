const express = require('express');
const Lieu_videoController = require("../controllers/lieu_videoController");
const uploadMiddleware = require('../middleware/uploadMiddleware');
const router = express.Router();

const controller = new Lieu_videoController();

router.get('/',controller.getAllLieu_video);
router.get('/:id',controller.getByIdLieu);
router.post('/',uploadMiddleware(['.mp4','.webm'],'video','video'),controller.createLieu_video);
router.put('/:id',uploadMiddleware(['.mp4','.webm'],'video','video'),controller.updateLieu_video);
router.delete('/', controller.deleteLieu_video);

module.exports = router;