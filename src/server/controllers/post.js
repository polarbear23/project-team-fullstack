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

const editPost = async (req, res) => {
    //might be patch not put
    const id = req.params.id;

    const post = req.body;

    const token = req.headers.authorization;

    const decodedToken = jwt.decode(token); //decode payload

    const payload = decodedToken.payload;

    const tokenId = payload.id; //grab user's id from payload

    if (post.userId !== tokenId || !isModerator) {
        return res.status(400).json('error'); //check user's id agianst userId in post. This check should have been completed in client //check if OP or MOD or ADMIN
    }

    const updatedPost = await prisma.post.update({
        where: {
            id,
        },
        data: {
            ...post,
        },
    });

    res.status(200).json(updatedPost);
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
};

const getComment = async (req, res) => {
    const id = req.params.id;

    const selectedComment = await prisma.comment.findUnique({
        where: {
            id,
        },
    });

    if (!selectedComment) {
        return res.status(400).json('error');
    }

    res.status(200).json(selectedComment);
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
