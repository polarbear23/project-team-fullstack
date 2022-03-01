const {
    checkPassword,
    hashedPassword,
    createToken,
    removeKeys,
    decodeToken
} = require('../utils/auth.js');

const { prisma } = require('../utils/prisma');

const { KEYS, SERVER_ERROR, SERVER_SUCCESS, FORUM_ROLES } = require('../config.js');

const authenticateUser = async (req, res) => {
    let { username, password } = req.body;

    const foundUser = await prisma.user.findUnique({
        where: {
            username: username,
        },
    });

    if (!foundUser) {
        return res.status(SERVER_ERROR.UNAUTHORIZED.CODE).json({ error: SERVER_ERROR.UNAUTHORIZED.MESSAGE });
    }

    const passwordsMatch = await checkPassword(password, foundUser.password);

    if (!passwordsMatch) {
        return res.status(SERVER_ERROR.UNAUTHORIZED.CODE).json({ error: SERVER_ERROR.UNAUTHORIZED.MESSAGE });
    }

    res.json(createToken({ id: foundUser.id, role: foundUser.role }));
};

const createUser = async (req, res) => {
    let { username, password, email } = req.body;

    password = await hashedPassword(password);

    const user = {
        username: username,
        password: password,
        email: email,
    };

    let createdUser = await prisma.user.create({
        data: {
            ...user,
        },
    });

    createdUser = removeKeys(createdUser, KEYS.PASSWORD);

    res.status(SERVER_SUCCESS.OK.CODE).json({ data: createdUser });
};

const editUser = async (req, res) => {
    let { username, password, email, role, isBanned } = req.body;

    const id = parseInt(req.params.id, 10);

    const decodedToken = decodeToken(req);

    let user = {};

    if (username) {
        user = { ...user, username };
    }

    if (password) {
        password = await hashedPassword(password);
        
        user = { ...user, password };
    }

    if (email) {
        user = { ...user, email };
    }

    if (role) {
        // if (decodedToken.role !== FORUM_ROLES.ADMIN) {
        //     return res.status(401).json({ error: SERVER_ERROR_MESSAGE.UNAUTHORIZED });
        // }

        role = role.toUpperCase();

        user = { ...user, role };
    }

    if (isBanned) {
        if (decodedToken.role === FORUM_ROLES.USER) {
            return res.status(SERVER_ERROR.UNAUTHORIZED.CODE).json({ error: SERVER_ERROR.UNAUTHORIZED.MESSAGE });
        }

        user = { ...user, isBanned };
    }

    let updatedUser = await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            ...user,
        },
    });

    updatedUser = removeKeys(updatedUser, KEYS.PASSWORD);

    res.json({ data: updatedUser });
};

const createProfile = async (req, res) => {
    const { userId, profilePicture, location } = req.body;

    const createdProfile = await prisma.profile.create({
        data: {
            userId: userId,
            profilePicture: profilePicture,
            location: location,
        },
    });

    if (!createdProfile) {
        return res.status(SERVER_ERROR.INTERNAL.CODE).json({ error: SERVER_ERROR.INTERNAL.MESSAGE });
    }

    res.status(SERVER_SUCCESS.OK.CODE).json({ data: createdProfile });
};

module.exports = {
    authenticateUser,
    createUser,
    editUser,
    createProfile
};