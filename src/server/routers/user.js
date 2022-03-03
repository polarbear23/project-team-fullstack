const express = require('express');

const { isLoggedIn } = require('../utils/auth.js');

const {
    authenticateUser,
    createUser,
    editUser,
    createProfile,
    getUserById,
    getAllUserRatings,
} = require('../controllers/user');

const router = express.Router();

router.get("/:id", isLoggedIn, getUserById)

router.get("/user/ratings", isLoggedIn, getAllUserRatings);

router.post('/login', authenticateUser);

router.post('/register', createUser);

router.put('/:id', isLoggedIn, editUser);

router.patch('/:id', isLoggedIn, editUser);

router.post('/profile', isLoggedIn, createProfile);

module.exports = router;
