const { isModerator, jwt } = require('../utils/auth');

const { SERVER_ERROR_MESSAGE } = require('../config');

const { prisma } = require('../utils/prisma');

const createPost = async (req, res) => {
    const { title, content, tags, userId } = req.body;

    const createdPost = await prisma.post.create({
        data: {
            title: title,
            content: content,
            userId: userId,
            tags: {
                create: tags.map((tag) => {
                    return {
                        tag: {
                            connectOrCreate: {
                                where: {
                                    name: tag,
                                },
                                create: {
                                    name: tag,
                                },
                            },
                        },
                    };
                }),
            },
        },
        include: {
            tags: {
                include: {
                    tag: true,
                },
            },
        },
    });

    if (!createdPost) {
        return res.status(500).json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
    }
    return res.status(200).json({ data: createdPost });
};

const getAllPosts = async (req, res) => {
    const selectedPosts = await prisma.post.findMany({
        where: {
            isRemoved: false,
        },
        // orderBy: {
        //     comment: {
        //         updatedAt: 'desc',
        //     },
        // },
        include: {
            like: true,
            tags: {
                include: {
                    tag: true,
                },
            },
            categories: {
                include: {
                    category: true,
                },
            },
        },
    });

    res.status(200).json({ data: selectedPosts });
};

const getPostbyId = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const selectedPost = await prisma.post.findFirst({
        where: {
            id: id,
            isRemoved: false,
        },
        include: {
            comment: true,
            like: true,
            tags: {
                include: {
                    tag: true,
                },
            },
            categories: {
                include: {
                    category: true,
                },
            },
        },
    });

    if (!selectedPost) {
        return res.status(404).json({ error: SERVER_ERROR_MESSAGE.NOT_FOUND });
    }

    res.status(200).json({ data: selectedPost });
};

const editPost = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const { userId } = req.body;

    const token = req.headers.authorization;

    const decodedToken = jwt.decode(token);

    const tokenId = decodedToken.id;

    if (userId !== tokenId || !isModerator) {
        return res.status(401).json({ error: SERVER_ERROR_MESSAGE.UNAUTHORIZED });
    }

    let post = {};

    const entries = Object.entries(req.body);

    entries.map((entry) => (post = { ...post, [entry[0]]: entry[1] }));

    const updatedPost = await prisma.post.update({
        where: {
            id: id,
        },
        data: {
            ...post,
        },
        include: {
            tags: {
                include: {
                    tag: true,
                },
            },
            categories: {
                include: {
                    category: true,
                },
            },
        },
    });

    res.status(200).json({ data: updatedPost });
};

const deletePost = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const isRemoved = { isRemoved: true };

    const deletedPost = await prisma.post.update({
        where: {
            id: id,
        },
        data: {
            ...isRemoved,
        },
    });

    res.status(201).json({ data: deletedPost });
};

const createComment = async (req, res) => {
    const { userId, content, postId, parentId } = req.body;

    const createdComment = await prisma.comment.create({
        data: {
            userId: userId,
            content: content,
            parentId: parentId,
            postId: postId,
        },
    });

    if (!createdComment) {
        return res.status(500).json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
    }

    res.status(200).json({ data: createdComment });
};

const getComment = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const selectedComment = await prisma.comment.findUnique({
        where: {
            id,
        },
    });

    if (!selectedComment) {
        return res.status(404).json({ error: SERVER_ERROR_MESSAGE.NOT_FOUND });
    }

    res.status(200).json({ data: selectedComment });
};

const editComment = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (comment.userId !== tokenId || !isModerator) {
        return res.status(401).json({ error: SERVER_ERROR_MESSAGE.UNAUTHORIZED });
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
    const id = parseInt(req.params.id, 10);

    const isRemoved = { isRemoved: true };

    await prisma.comment.update({
        where: {
            id,
        },
        data: {
            ...isRemoved,
        },
    });

    res.status(201).json('Comment deleted');
};

const createLike = async (req, res) => {
    const { userId, postId, commentId } = req.body;

    const createdLike = await prisma.like.create({
        data: {
            userId: userId,
            postId: postId,
            commentId: commentId,
        },
    });

    if (!createdLike) {
        return res.status(500).json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
    }
    return res.status(200).json({ data: createdLike });
};

const deleteLike = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    await prisma.like.delete({
        where: {
            id,
        },
    });

    res.status(201).json('Like removed');
};

const createTag = async (req, res) => {
    const { name } = req.body;

    const createdTag = await prisma.tag.create({
        data: {
            name: name,
        },
    });

    if (!createdTag) {
        return res.status(500).json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
    }
    return res.status(200).json({ data: createdTag });
};

const deleteTag = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const deletedTag = await prisma.tagsOnPosts.delete({
        where: {
            id: id,
        },
    });

    return res.status(200).json({ data: deletedTag });
};

module.exports = {
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
    createTag,
    deleteTag,
};
