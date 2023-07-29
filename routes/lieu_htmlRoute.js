const Lieu_htmlController = require("../controllers/lieu_htmlController");
const express = require('express');
const router = express.Router();

const controller = new Lieu_htmlController();

router.get('/',controller.getAllLieu_html);
router.post('/',controller.createLieu_html);
router.put('/:id',controller.updateLieu_html);
router.delete('/', controller.deleteLieu_html);

module.exports = router;