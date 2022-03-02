const {
    checkPassword,
    hashedPassword,
    createToken,
    removeKeys,
    decodeToken
} = require('../utils/auth.js');

const { prisma } = require('../utils/prisma');

const { KEYS, SERVER_ERROR, SERVER_SUCCESS, FORUM_ROLES, PRISMA_ERROR } = require('../config.js');
const { Prisma } = require('@prisma/client');

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

    const token = createToken({ id: foundUser.id, role: foundUser.role });

    res.status(SERVER_SUCCESS.OK.CODE).json({ data: foundUser, token: token });
};

const createUser = async (req, res) => {
    let { username, password, email } = req.body;

    password = await hashedPassword(password);

    const user = {
        username: username,
        password: password,
        email: email,
    };

    try{
        let createdUser = await prisma.user.create({
            data: {
                ...user,
            },
        });

        createdUser = removeKeys(createdUser, KEYS.PASSWORD);
    
        const token = createToken({ id: createdUser.id, role: createdUser.role });

        res.status(SERVER_SUCCESS.OK.CODE).json({ data: createdUser, token: token });
    }
    catch(error){
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error.code === PRISMA_ERROR.UNIQUE_CONSTRAINT_VIOLATION.CODE){
                res.status(SERVER_ERROR.INTERNAL.CODE).json({ error: PRISMA_ERROR.UNIQUE_CONSTRAINT_VIOLATION.CLIENT_MESSAGE_REGISTER });
            }
        }
    }
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

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const selectedUser = await prisma.user.findUnique({
        where: { 
            id: id,
        }, 
        include: {
            profile: true,
        },
    })

    if (!selectedUser) {
        return res.status(SERVER_ERROR.NOT_FOUND.CODE).json({ error: SERVER_ERROR.NOT_FOUND.MESSAGE });
    }

    res.status(SERVER_SUCCESS.OK.CODE).json({ data: selectedUser });
} 

const createProfile = async (req, res) => {
    const userId = parseInt(req.body.userId, 10);
    console.log(typeof userId);
    let { profilePicture, location } = req.body;

    if(!profilePicture){
        profilePicture = "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png";
    }

    try{
        const createdProfile = await prisma.profile.create({
            data: {
                userId: userId,
                profilePicture: profilePicture,
                location: location,
            },
        });

        res.status(SERVER_SUCCESS.OK.CODE).json({ data: createdProfile });
    }
    catch(error){
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error.code === PRISMA_ERROR.UNIQUE_CONSTRAINT_VIOLATION.CODE){
                res.status(SERVER_ERROR.INTERNAL.CODE).json({ error: PRISMA_ERROR.UNIQUE_CONSTRAINT_VIOLATION.CLIENT_MESSAGE_PROFILE });
            }
        }
    }
};

module.exports = {
    authenticateUser,
    createUser,
    editUser,
    createProfile,
    getUserById,
};