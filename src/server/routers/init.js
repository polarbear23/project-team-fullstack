const express = require('express');

const {
    initPokemonDatabase,
    initCategoriesDatabase,
} = require('../controllers/init');

const router = express.Router();

const { isLoggedIn, isAdmin } = require('../utils/auth.js');

//router.post('/all', isLoggedIn, isAdmin, initAllDatabases);

router.post('/pokemon', initPokemonDatabase);

router.post('/categories',initCategoriesDatabase);

module.exports = router;
