const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { SERVER_ERROR_MESSAGE, SECRET, FORUM_ROLES } = require('./config');

const prisma = new PrismaClient();

const saltRounds = 10;

const capitalizeFirstLetter = (string) =>
    string.replace(/\b\w/g, (c) => c.toUpperCase());

const hashedPassword = async (password) =>
    bcrypt.hashSync(password, saltRounds);

const createToken = (payload) => jwt.sign(payload, SECRET);

const checkPassword = async (textPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(textPassword, hashedPassword);
    } catch (error) {
        return error;
    }
};

const isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization;

    try {
        jwt.verify(token, SECRET);
    } catch (error) {
        return res
            .status(401)
            .json({ error: SERVER_ERROR_MESSAGE.UNAUTHORIZED });
    }

    next();
};

const isAdmin = async (req, res, next) => {
    const { id } = parseInt(req.params.id, 10);

    const fetchedUser = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });

    if (fetchedUser.role !== FORUM_ROLES.ADMIN) {
        return res.status(403).json({ error: SERVER_ERROR_MESSAGE.FORBIDDEN });
    }

    next();
};

const isModerator = async (req, res, next) => {
    const { id } = parseInt(req.params.id, 10);

    const fetchedUser = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });

    if (fetchedUser.role === FORUM_ROLES.USER) {
        return res.status(403).json({ error: SERVER_ERROR_MESSAGE.FORBIDDEN });
    }

    next();
};

// const createUser = async (req, res) => {
//     let { username, password, email } = req.body;

//     password = await hashedPassword(password);

//     const user = {
//         username: username,
//         password: password,
//         email: email,
//     };

//     const createdUser = await prisma.user.create({
//         data: {
//             ...user,
//         },
//     });

//     delete createdUser.password;

//     res.status(200).json({ data: createdUser });
// };

// const createProfile = async (req, res) => {
//     const { userId, profilePicture, location } = req.body;

//     const createdProfile = await prisma.profile.create({
//         data: {
//             userId: userId,
//             profilePicture: profilePicture,
//             location: location,
//         },
//     });

//     if (!createdProfile) {
//         return res
//             .status(500)
//             .json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
//     }
//     return res.status(200).json({ data: createdProfile });
// };

// const createTag = async (req, res) => {
//     const { name } = req.body;

//     const createdTag = await prisma.tag.create({
//         data: {
//             name: name,
//         },
//     });

//     if (!createdTag) {
//         return res
//             .status(500)
//             .json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
//     }
//     return res.status(200).json({ data: createdTag });
// };

// const createLike = async (req, res) => {
//     const { userId, postId, commentId } = req.body;

//     const createdLike = await prisma.like.create({
//         data: {
//             userId: userId,
//             postId: postId,
//             commentId: commentId,
//         },
//     });

//     if (!createdLike) {
//         return res
//             .status(500)
//             .json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
//     }
//     return res.status(200).json({ data: createdLike });
// };

// const createPost = async (req, res) => {
//     const { title, content, tags, userId } = req.body;

//     const createdPost = await prisma.post.create({
//         data: {
//             title: title,
//             content: content,
//             userId: userId,
//             tags: {
//                 create: tags.map((tag) => {
//                     return {
//                         tag: {
//                             connectOrCreate: {
//                                 where: {
//                                     name: tag,
//                                 },
//                                 create: {
//                                     name: tag,
//                                 },
//                             },
//                         },
//                     };
//                 }),
//             },
//         },
//         include: {
//             tags: {
//                 include: {
//                     tag: true,
//                 },
//             },
//         },
//     });

//     if (!createdPost) {
//         return res
//             .status(500)
//             .json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
//     }
//     return res.status(200).json({ data: createdPost });
// };

// const createComment = async (req, res) => {
//     const { userId, content, postId, parentId } = req.body;

//     const createdComment = await prisma.comment.create({
//         data: {
//             userId: userId,
//             content: content,
//             parentId: parentId,
//             postId: postId,
//         },
//     });

//     if (!createdComment) {
//         return res
//             .status(500)
//             .json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
//     }

//     res.status(200).json({ data: createdComment });
// };

// const createPokemonRating = async (req, res) => {
//     const { profileId, rating, pokemonId } = req.body;

//     const createdRating = await prisma.rating.create({
//         data: {
//             profileId: profileId,
//             rating: rating,
//             pokemons: {
//                 create: {
//                     pokemon: {
//                         connect: {
//                             id: pokemonId,
//                         },
//                     },
//                 },
//             },
//         },
//         include: {
//             pokemons: {
//                 include: {
//                     pokemon: true,
//                 },
//             },
//         },
//     });

//     if (!createdRating) {
//         return res
//             .status(500)
//             .json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
//     }
//     return res.status(200).json({ data: createdRating });
// };

module.exports = {
    jwt,
    checkPassword,
    hashedPassword,
    createToken,
    isAdmin,
    isModerator,
    isLoggedIn,
    prisma,
    capitalizeFirstLetter,
    createPokemonRating,
    createComment,
    createPost,
    createLike,
    createTag,
    createProfile,
    createUser,
};
