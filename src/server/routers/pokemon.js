const express = require('express');

const { initPokemonDatabase } = require('../controllers/pokemon')
const { getPokemons } = require('../controllers/getPokemon')

const router = express.Router();

//will need elevated (owner) role

router.post('/init', initPokemonDatabase)
router.get('/', getPokemons);

module.exports = router