const express = require('express');

const {
    isLoggedIn,
    hasEditingPermissions,
    isModerator,
} = require('../utils/auth.js');

const {
    createPost,
    getAllPosts,
    getPostbyId,
    editPost,
    deletePost,
    createComment,
    getComment,
    editComment,
    deleteComment,
    createLike,
    deleteLike,
    deleteTag,
} = require('../controllers/post');

const router = express.Router();

router.get('/', getAllPosts);

router.get('/:id', getPostbyId);

router.post('/', isLoggedIn, createPost);

router.put('/:id', isLoggedIn, hasEditingPermissions, editPost);

router.delete('/:id', isLoggedIn, isModerator, deletePost);

router.get('/comment/', getComment);

router.post('/comment/', isLoggedIn, createComment);

router.patch('/comment/:id', isLoggedIn, hasEditingPermissions, editComment);

router.put('/comment/:id', isLoggedIn, hasEditingPermissions, editComment);

router.delete('/comment/:id', isLoggedIn, isModerator, deleteComment);

router.post('/like', isLoggedIn, createLike);

router.delete('/like', isLoggedIn, deleteLike);

router.delete('/tag/:id', hasEditingPermissions, deleteTag);

module.exports = router;
