const express = require('express');

const { createRating } = require("../utils");
const { getRatings } = require("../controllers/rating");

router.get('/', getRatings);
router.post('/', createRating);

const router = express.Router();

module.exports = router;