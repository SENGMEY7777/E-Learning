const express = require('express');
const router = express.Router();
const assignment.Controller = require('../controllers/assignment.Controller');

router.get('/', assignment.Controller.getAll);
router.get('/:id', assignment.Controller.getById);
router.post('/', assignment.Controller.create);
router.put('/:id', assignment.Controller.update);
router.delete('/:id', assignment.Controller.delete);

module.exports = router;
