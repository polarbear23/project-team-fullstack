const express = require('express');

const {
    initPokemonDatabase,
    initCategoriesDatabase,
    initForumDatabase,
} = require('../controllers/init');

const { isLoggedIn, isAdmin } = require('../utils/auth.js');

const router = express.Router();

router.post('/pokemon', isLoggedIn, isAdmin, initPokemonDatabase);

router.post('/categories', isLoggedIn, isAdmin, initCategoriesDatabase);

router.post('/forum', isLoggedIn, isAdmin, initForumDatabase);

module.exports = router;
