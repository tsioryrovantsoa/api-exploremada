const express = require('express');
const Lieu_libController = require("../controllers/lieu_libController");
const LieuController = require('../controllers/lieuController');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const router = express.Router();

const viewcontroller = new Lieu_libController();
const controller = new LieuController();

router.get('/',viewcontroller.getAll);
router.get('/:id',viewcontroller.getById);
router.post('/',uploadMiddleware(['.jpg','.jpeg','.png'],'lieu','image_miniature'),controller.createlieu);
router.put('/:id',uploadMiddleware(['.jpg','.jpeg','.png'],'lieu','image_miniature'),controller.updatelieu);
router.delete('/',controller.deleteLieu);

module.exports = router;