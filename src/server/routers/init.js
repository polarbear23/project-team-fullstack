const express = require('express');

const {
    initPokemonDatabase,
    initCategoriesDatabase,
} = require('../controllers/init');

const router = express.Router();

//will need elevated (owner) role

router.post('/pokemon', initPokemonDatabase);

router.post('/categories', initCategoriesDatabase);

module.exports = router;
