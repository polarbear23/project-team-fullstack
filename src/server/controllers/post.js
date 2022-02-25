const { prisma, isModerator } = require('../utils');

const getPost = async (req, res) => {
    const id = req.params.id;

    const selectedPost = await prisma.post.findUnique({
        where: {
            id,
        },
        include: {
            comment: true,
        },
    });

    if (!selectedPost) {
        return res.status(400).json('error');
    }

    res.status(200).json({ data: selectedPost });
};

const editPost = async (req, res) => {
    const id = req.params.id;

    const post = req.body;

    const token = req.headers.authorization;

    const decodedToken = jwt.decode(token);

    const payload = decodedToken.payload;

    const tokenId = payload.id;

    if (post.userId !== tokenId || !isModerator) {
        return res.status(400).json('error');
    }

    const updatedPost = await prisma.post.update({
        where: {
            id,
        },
        data: {
            ...post,
        },
    });

    res.status(200).json({ data: updatedPost });
};

const deletePost = async (req, res) => {
    const id = req.params.id;

    const isRemoved = { isRemoved: true };

    await prisma.post.update({
        where: {
            id,
        },
        update: {
            ...isRemoved,
        },
    });

    res.status(201).json('post deleted');
};

const getComment = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const selectedComment = await prisma.comment.findUnique({
        where: {
            id,
        },
    });

    if (!selectedComment) {
        return res.status(400).json('error');
    }

    res.status(200).json({ data: selectedComment });
};

const editComment = async (req, res) => {
    const id = req.params.id;

    const comment = req.body;

    const token = req.headers.authorization;

    const decodedToken = jwt.decode(token);

    const payload = decodedToken.payload;

    const tokenId = payload.id;

    if (post.userId !== tokenId || !isModerator) {
        return res.status(400).json('error');
    }

    const updatedComment = await prisma.comment.update({
        where: {
            id,
        },
        data: {
            ...comment,
        },
    });

    res.status(200).json({ data: updatedComment });
};

const deleteComment = async (req, res) => {
    const id = req.params.id;

    const isRemoved = { isRemoved: true };

    await prisma.post.update({
        where: {
            id,
        },
        update: {
            ...isRemoved,
        },
    });

    res.status(201).json('Comment deleted');
};

const deleteLike = async (req, res) => {
    const { id } = req.params;

    await prisma.like.delete({
        where: {
            id,
        },
    });

    res.status(201).json('Like removed');
};

module.exports = {
    getPost,
    editPost,
    deletePost,
    getComment,
    editComment,
    deleteComment,
    addLike,
    deleteLike,
};
