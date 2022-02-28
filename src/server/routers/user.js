const express = require('express');

const { isLoggedIn } = require('../utils/auth.js');

const {
    authenticateUser,
    createUser,
    editUser,
    createProfile,
} = require('../controllers/user');

const router = express.Router();

router.post('/login', authenticateUser);

router.post('/register', createUser);

router.put('/:id', isLoggedIn, editUser);

router.patch('/:id', isLoggedIn, editUser);

router.post('/profile', createProfile);

module.exports = router;
