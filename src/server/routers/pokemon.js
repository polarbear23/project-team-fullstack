const express = require('express');

const {populateDatabase} = require('../controllers/pokemon')

const router = express.Router();

//will need elevated (owner) role

router.post('/init', populateDatabase)

module.exports = router