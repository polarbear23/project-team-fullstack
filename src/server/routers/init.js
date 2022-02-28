const express = require('express');

const {
    initPokemonDatabase,
    initCategoriesDatabase,
} = require('../controllers/init');

const { isLoggedIn, isAdmin } = require('../utils/auth.js');

const router = express.Router();

router.post('/pokemon', isLoggedIn, isAdmin, initPokemonDatabase);

router.post('/categories', isLoggedIn, isAdmin, initCategoriesDatabase);

module.exports = router;
