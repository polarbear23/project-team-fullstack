const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { SERVER_ERROR_MESSAGE, SECRET, FORUM_ROLES } = require('../config');

const { prisma } = require('./prisma');

const saltRounds = 10;

const hashedPassword = async (password) => bcrypt.hashSync(password, saltRounds);

const createToken = (payload) => jwt.sign(payload, SECRET);

const checkPassword = async (textPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(textPassword, hashedPassword);
    } catch (error) {
        return error;
    }
};

const decodeToken = (req) => {
    const token = req.headers.authorization;

    return jwt.decode(token);
};

const hasEditingPermissions = (req, res, next) => {
    const decodedToken = decodeToken(req);

    if (decodedToken.id !== postId || decodedToken.role === FORUM_ROLES.USER) {
        return res.status(403).json({ error: SERVER_ERROR_MESSAGE.FORBIDDEN });
    }

    next();
};

const isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization;

    try {
        jwt.verify(token, SECRET);
    } catch (error) {
        return res.status(401).json({ error: SERVER_ERROR_MESSAGE.UNAUTHORIZED });
    }

    next();
};

const isAdmin = async (req, res, next) => {
    const decodedToken = decodeToken(req);

    const fetchedUser = await prisma.user.findUnique({
        where: {
            id: decodedToken.id,
        },
    });

    if (fetchedUser.role !== FORUM_ROLES.ADMIN) {
        return res.status(403).json({ error: SERVER_ERROR_MESSAGE.FORBIDDEN });
    }

    next();
};

const isModerator = async (req, res, next) => {
    const decodedToken = decodeToken(req);

    const fetchedUser = await prisma.user.findUnique({
        where: {
            id: decodedToken.id,
        },
    });

    if (fetchedUser.role === FORUM_ROLES.USER) {
        return res.status(403).json({ error: SERVER_ERROR_MESSAGE.FORBIDDEN });
    }

    next();
};

const removeKeys = (user, ...keys) => {
    for (let key of keys) {
        delete user[key];
    }
    return user;
};

module.exports = {
    jwt,
    checkPassword,
    hashedPassword,
    createToken,
    hasEditingPermissions,
    isAdmin,
    isModerator,
    isLoggedIn,
    removeKeys,
    decodeToken
};
