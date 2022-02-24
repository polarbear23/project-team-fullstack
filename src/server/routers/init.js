const express = require('express');

const {
    initAllDatabases,
    initPokemonDatabase,
    initCategoriesDatabase,
} = require('../controllers/init');

const router = express.Router();

const { isLoggedIn, isAdmin } = require('../config');

router.post('/all', isLoggedIn, isAdmin, initAllDatabases);

router.post('/pokemon', isLoggedIn, isAdmin, initPokemonDatabase);

router.post('/categories', isLoggedIn, isAdmin, initCategoriesDatabase);

module.exports = router;
