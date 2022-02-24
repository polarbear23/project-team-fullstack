const express = require('express');

const {
    authenticateUser,
    createUser,
    editUser,
} = require('../controllers/user');

const { isLoggedIn } = require('../config');

const router = express.Router();

router.post('/login', authenticateUser)

router.post('/register', createUser);

router.put('/:id', isLoggedIn, editUser)

module.exports = router;