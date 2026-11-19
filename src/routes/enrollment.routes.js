const express = require('express');
const router = express.Router();
const enrollment.Controller = require('../controllers/enrollment.Controller');

router.get('/', enrollment.Controller.getAll);
router.get('/:id', enrollment.Controller.getById);
router.post('/', enrollment.Controller.create);
router.put('/:id', enrollment.Controller.update);
router.delete('/:id', enrollment.Controller.delete);

module.exports = router;
