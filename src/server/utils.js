const { PrismaClient } = require('@prisma/client');
const { RES_ERRORS, RES_ERROR_MESSAGES } = require('./config');

const prisma = new PrismaClient();

const capitalizeFirstLetter = (string) => string.replace(/\b\w/g, (c) => c.toUpperCase());

const createUserWithProfile = async () => {
    const { username, password, email, role } = req.body;
    let { isBanned } = req.body;
    
    !isBanned && (isBanned = false);

    //const hashedPassword = ...;

    // const createdUserWithProfile = await prisma.user.create(
    //     // data: {

    //     // }
    // );
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
        return res.status(RES_ERRORS.create).json({ error: RES_ERROR_MESSAGES.create });
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
        return res.status(RES_ERRORS.create).json({ error: RES_ERROR_MESSAGES.create });
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
        return res.status(RES_ERRORS.create).json({ error: RES_ERROR_MESSAGES.create });
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
            numberOfLikes: numberOfLikes,
            isReported: isReported,
            isRemoved: isRemoved
        }
    });

    if(!createdPost){
        return res.status(RES_ERRORS.create).json({ error: RES_ERROR_MESSAGES.create });
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
            numberOfLikes: numberOfLikes,
            isReported: isReported,
            isRemoved: isRemoved
        }
    });

    if(!createdComment){
        return res.status(RES_ERRORS.create).json({ error: RES_ERROR_MESSAGES.create });
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
        return res.status(RES_ERRORS.create).json({ error: RES_ERROR_MESSAGES.create });
    }
    return res.json({ data: createdRating });
}

module.exports = {
    prisma,
    capitalizeFirstLetter,
};
