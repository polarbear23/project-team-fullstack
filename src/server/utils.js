const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const capitalizeFirstLetter = (string) => string.replace(/\b\w/g, (c) => c.toUpperCase());

module.exports = {
    prisma,
    capitalizeFirstLetter,
};
