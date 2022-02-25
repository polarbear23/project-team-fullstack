const { PrismaClient } = require('@prisma/client');
const { SERVER_STATUS_CODE, SERVER_ERROR_MESSAGE } = require('./config');

const jwt = require('jsonwebtoken');

const { SERVER_ERROR_MESSAGE } = require('./config')

const prisma = new PrismaClient();

const capitalizeFirstLetter = (string) => string.replace(/\b\w/g, (c) => c.toUpperCase());

const isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization;
    
    try {
        jwt.verify(token, secret);
    } catch(error) {
        console.log('error', error);
        return res.status(401).json(SERVER_ERROR_MESSAGE.UNAUTHORIZED);
    }

    next();
}

const isAdmin = async (req, res, next) => {
    const { id } = req.params;

    const fetchedUser = await prisma.user.findUnique({
        where: { id },
    });

    if (fetchedUser.role !== 'ADMIN') {
        return res.status(403).json(SERVER_ERROR_MESSAGE.FORBIDDEN);
    }

    next();
};

const createUserWithProfile = async () => {
    const { username, password, email, role } = req.body;
    let { isBanned } = req.body;
    
    !isBanned && (isBanned = false);

    //const hashedPassword = ...;

    const createdUserWithProfile = await prisma.user.create(
        // data: {

        // }
    );
}

const createProfile = async (req, res) => {
    const { userId, profilePicture, location } = req.body;

    const createdProfile = await prisma.profile.create({
        data: {
            userId: userId,
            profilePicture: profilePicture,
            location: location
        }
    });

    if(!createdProfile){
        return res.status(SERVER_STATUS_CODE.CREATE).json({ error: SERVER_ERROR_MESSAGE.CREATE });
    }
    return res.json({ data: createdProfile });
}

const createTag = async (req, res) => {
    const { name } = req.body;
    
    const createdTag = await prisma.tag.create({
        data: {
            name: name
        }
    });

    if(!createdTag){
        return res.status(SERVER_STATUS_CODE.CREATE).json({ error: SERVER_ERROR_MESSAGE.CREATE });
    }
    return res.json({ data: createdTag });
}

const createLike = async (req, res) => {
    const { userId, postId, commentId } = req.body;

    const createdLike = await prisma.like.create({
        data: {
            userId: userId,
            postId: postId,
            commentId: commentId
        }
    });

    if(!createdLike){
        return res.status(SERVER_STATUS_CODE.CREATE).json({ error: SERVER_ERROR_MESSAGE.CREATE });
    }
    return res.json({ data: createdLike });
}

const createPost = async (req, res) => {
    const { title, content, numberOfLikes } = req.body;
    let { isReported, isRemoved } = req.body;

    !isReported && (isReported = false);
    !isRemoved && (isRemoved = false);

    const createdPost = await prisma.post.create({
        data: {
            title: title,
            content: content,
            isReported: isReported,
            isRemoved: isRemoved
        }
    });

    if(!createdPost){
        return res.status(SERVER_STATUS_CODE.CREATE).json({ error: SERVER_ERROR_MESSAGE.CREATE });
    }
    return res.json({ data: createdPost });
}

const createComment = async (req, res) => {
    const { userId, content, postId, parentId, numberOfLikes } = req.body;
    let { isReported, isRemoved } = req.body;

    !isReported && (isReported = false);
    !isRemoved && (isRemoved = false);

    const createdComment = await prisma.comment.create({
        data: {
            userId: userId,
            content: content,
            parentId: parentId, 
            postId: postId,
            isReported: isReported,
            isRemoved: isRemoved
        }
    });

    if(!createdComment){
        return res.status(SERVER_STATUS_CODE.CREATE).json({ error: SERVER_ERROR_MESSAGE.CREATE });
    }
    return res.json({ data: createdComment });
}

const createRating = async (req, res) => {
    const { profileId, rating } = req.body;

    const createdRating = await prisma.rating.create({
        data: {
            profileId: profileId,
            rating: rating
        }
    });

    if(!createdRating){
        return res.status(SERVER_STATUS_CODE.CREATE).json({ error: SERVER_ERROR_MESSAGE.CREATE });
    }
    return res.json({ data: createdRating });
}

module.exports = {
    isAdmin,
    isLoggedIn,
    prisma,
    capitalizeFirstLetter,
    createRating,
    createComment,
    createPost,
    createLike,
    createTag,
    createProfile,
    createUserWithProfile,
};
