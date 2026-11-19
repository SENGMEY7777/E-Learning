const express = require('express');
const router = express.Router();
const result.Controller = require('../controllers/result.Controller');

router.get('/', result.Controller.getAll);
router.get('/:id', result.Controller.getById);
router.post('/', result.Controller.create);
router.put('/:id', result.Controller.update);
router.delete('/:id', result.Controller.delete);

module.exports = router;
