const express = require('express');

const { 
    createPost, 
    createCommment, 
    isLoggedIn, 
} = require('../utils');

const { 
    getPost,
    editPost,
    deletePost,
    getComment,
    editComment,
    deleteComment, 
} = require('../controllers/post');

const router = express.Router();

router.get('/', getPost);

router.post('/', isLoggedIn, createPost);

router.put('/:id', isLoggedIn, editPost);

router.delete('/:id', isLoggedIn, deletePost);

router.get('/:id/comment/', getComment);

router.post('/:id/comment/', isLoggedIn, createCommment);

router.put('/:id/comment/:id', isLoggedIn, editComment);

router.delete('/:id/comment/:id', isLoggedIn, deleteComment);

module.exports = router;
