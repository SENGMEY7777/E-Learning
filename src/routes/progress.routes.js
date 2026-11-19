const express = require('express');
const router = express.Router();
const progress.Controller = require('../controllers/progress.Controller');

router.get('/', progress.Controller.getAll);
router.get('/:id', progress.Controller.getById);
router.post('/', progress.Controller.create);
router.put('/:id', progress.Controller.update);
router.delete('/:id', progress.Controller.delete);

module.exports = router;
