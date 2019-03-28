const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController.js');

// Card routes
router.get('/cards', cardController.index);
router.post('/', cardController.create);
router.get('/:cardId', cardController.show);
router.get('/:cardId/edit', cardController.edit);
router.put('/:cardId', cardController.update);
router.delete('/:cardId', cardController.delete);

module.exports = router;