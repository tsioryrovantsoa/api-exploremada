const express = require('express');
const Lieu_libController = require("../controllers/lieu_libController");
const router = express.Router();

const viewcontroller = new Lieu_libController();

router.get('/',viewcontroller.getAll);
router.get('/:id',viewcontroller.getById);

module.exports = router;