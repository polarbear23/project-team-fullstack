const express = require('express');

const {
    getPokemonById,
    getAllPokemon,
    createPokemonRating,
    getAllPokemonRatings,
} = require('../controllers/pokemon');

const router = express.Router();

router.get('/', getAllPokemon);

router.get('/:id', getPokemonById);

router.get('/rating', getAllPokemonRatings);

router.post('/rating', createPokemonRating);

module.exports = router;
