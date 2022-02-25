const express = require('express');

const { createRating } = require("../utils");

const { getRatings } = require("../controllers/rating");

const router = express.Router();

router.get('/', getRatings);

router.post('/', createRating);

module.exports = router;