const express = require('express');
const router = express.Router();
const certificate.Controller = require('../controllers/certificate.Controller');

router.get('/', certificate.Controller.getAll);
router.get('/:id', certificate.Controller.getById);
router.post('/', certificate.Controller.create);
router.put('/:id', certificate.Controller.update);
router.delete('/:id', certificate.Controller.delete);

module.exports = router;
