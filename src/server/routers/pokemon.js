const express = require('express');

const {initPokemonDatabase} = require('../controllers/pokemon')

const router = express.Router();

//will need elevated (admin) role

router.post('/init', initPokemonDatabase)

module.exports = router