const { prisma, isModerator, createPost, createCommment } = require('../utils');

//function checkElevatedPriviledge

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

    res.status(200).json(selectedPost);
};

module.exports = {
    getPost,
    createPost,
    editPost,
    deletePost,
    getComment,
    createCommment,
    editComment,
    deleteComment,
};
