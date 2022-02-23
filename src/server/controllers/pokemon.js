const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const axios = require('axios');

const initPokemonDatabase = async (req, res) => {};

module.exports = { initPokemonDatabase };
