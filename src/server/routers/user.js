const express = require('express');

const {
    createUser,
} = require('../utils');

const {
    authenticateUser,
    editUser,
} = require('../controllers/user');

const { isLoggedIn } = require('../utils');

const router = express.Router();

router.post('/login', authenticateUser)

router.post('/register', createUser);

router.put('/:id', isLoggedIn, editUser)

module.exports = router;