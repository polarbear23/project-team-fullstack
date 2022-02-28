const {
    checkPassword,
    hashedPassword,
    createToken,
} = require('../utils/auth.js');

const {prisma} = require('../utils/prisma')

const { KEYS, SERVER_ERROR_MESSAGE } = require('../config.js');

const removeKeys = (user, ...keys) => {
    for (let key of keys) {
        delete user[key];
    }
    return user;
};

const authenticateUser = async (req, res) => {
    let { username, password } = req.body;

    const foundUser = await prisma.user.findUnique({
        where: {
            username: username,
        },
    });

    if (!foundUser) {
        return res
            .status(401)
            .json({ error: SERVER_ERROR_MESSAGE.UNAUTHORIZED });
    }

    const passwordsMatch = await checkPassword(password, foundUser.password);

    if (!passwordsMatch) {
        return res
            .status(401)
            .json({ error: SERVER_ERROR_MESSAGE.UNAUTHORIZED });
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

    const createdUser = await prisma.user.create({
        data: {
            ...user,
        },
    });

    delete createdUser.password;

    res.status(200).json({ data: createdUser });
};

const editUser = async (req, res) => {
    let { username, password, email, role, isBanned } = req.body;

    const id = parseInt(req.params.id, 10);

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
        role = role.toUpperCase();
        user = { ...user, role };
    }

    if (isBanned) {
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

    res.json(updatedUser);
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
        return res
            .status(500)
            .json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
    }
    return res.status(200).json({ data: createdProfile });
};

module.exports = {
    authenticateUser,
    createUser,
    editUser,
    createProfile,
};
