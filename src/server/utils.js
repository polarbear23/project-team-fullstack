const { PrismaClient } = require('@prisma/client');

const jwt = require('jsonwebtoken');

const { SERVER_ERROR_MESSAGE } = require('./config')

const prisma = new PrismaClient();

const capitalizeFirstLetter = (string) => string.replace(/\b\w/g, (c) => c.toUpperCase());

const isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization;
    
    try {
        jwt.verify(token, secret)
    } catch(error) {
        console.log('error', error)
        return res.status(401).json(SERVER_ERROR_MESSAGE.UNAUTHORIZED)
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

module.exports = {
    isAdmin,
    isLoggedIn,
    prisma,
    capitalizeFirstLetter,
};
