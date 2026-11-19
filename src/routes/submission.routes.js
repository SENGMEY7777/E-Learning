const express = require('express');
const router = express.Router();
const submission.Controller = require('../controllers/submission.Controller');

router.get('/', submission.Controller.getAll);
router.get('/:id', submission.Controller.getById);
router.post('/', submission.Controller.create);
router.put('/:id', submission.Controller.update);
router.delete('/:id', submission.Controller.delete);

module.exports = router;
