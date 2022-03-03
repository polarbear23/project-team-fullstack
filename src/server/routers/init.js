const express = require('express');

const {
    initPokemonDatabase,
    initCategoriesDatabase,
    initForumDatabase,
} = require('../controllers/init');

const { isLoggedIn, isAdmin } = require('../utils/auth.js');

const router = express.Router();

router.post('/pokemon', initPokemonDatabase);

router.post('/categories', initCategoriesDatabase);

router.post('/forum', initForumDatabase);

module.exports = router;
