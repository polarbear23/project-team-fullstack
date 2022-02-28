const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { SERVER_ERROR_MESSAGE, SECRET, FORUM_ROLES } = require('../config');

const { prisma } = require('./prisma');

const saltRounds = 10;

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

module.exports = {
    jwt,
    checkPassword,
    hashedPassword,
    createToken,
    isAdmin,
    isModerator,
    isLoggedIn,
};
