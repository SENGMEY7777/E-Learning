const express = require('express');
const router = express.Router();
const course.Controller = require('../controllers/course.Controller');

router.get('/', course.Controller.getAll);
router.get('/:id', course.Controller.getById);
router.post('/', course.Controller.create);
router.put('/:id', course.Controller.update);
router.delete('/:id', course.Controller.delete);

module.exports = router;
