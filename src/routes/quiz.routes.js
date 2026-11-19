const express = require('express');
const router = express.Router();
const quiz.Controller = require('../controllers/quiz.Controller');

router.get('/', quiz.Controller.getAll);
router.get('/:id', quiz.Controller.getById);
router.post('/', quiz.Controller.create);
router.put('/:id', quiz.Controller.update);
router.delete('/:id', quiz.Controller.delete);

module.exports = router;
