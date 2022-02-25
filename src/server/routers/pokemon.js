const express = require('express');
const { getPokemonById } = require('../controllers/pokemon');

const router = express.Router();

router.get('/:id', getPokemonById);

module.exports = router;