const express = require('express');

const {
    getPokemonById,
    getAllPokemon,
    createPokemonRating,
    getAllPokemonRatings,
    getAllUserRatings
} = require('../controllers/pokemon');

const { isLoggedIn } = require('../utils/auth.js');

const router = express.Router();

router.get('/', getAllPokemon);

router.get('/:id', getPokemonById);

router.get('/rating', getAllPokemonRatings);

router.get("/ratings/user", isLoggedIn, getAllUserRatings);

router.post('/rating', isLoggedIn, createPokemonRating);

module.exports = router;
