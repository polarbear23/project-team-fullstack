const express = require('express');

const { createPost, createComment, createLike, isLoggedIn } = require('../utils');

const {
    getPost,
    editPost,
    deletePost,
    getComment,
    editComment,
    deleteComment,
    deleteLike
} = require('../controllers/post');

const router = express.Router();

router.get('/', getPost);

router.post('/', isLoggedIn, createPost);

router.put('/:id', isLoggedIn, editPost);

router.delete('/:id', isLoggedIn, deletePost);

router.get('/:id/comment/', getComment);

router.post('/:id/comment/', isLoggedIn, createComment);

router.put('/:id/comment/:id', isLoggedIn, editComment);

router.delete('/:id/comment/:id', isLoggedIn, deleteComment);

router.post('/like', isLoggedIn, createLike);

router.delete('/like', isLoggedIn, deleteLike);

module.exports = router;
