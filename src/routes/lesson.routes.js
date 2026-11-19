const express = require('express');
const router = express.Router();
const lesson.Controller = require('../controllers/lesson.Controller');

router.get('/', lesson.Controller.getAll);
router.get('/:id', lesson.Controller.getById);
router.post('/', lesson.Controller.create);
router.put('/:id', lesson.Controller.update);
router.delete('/:id', lesson.Controller.delete);

module.exports = router;
