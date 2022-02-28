
const { prisma } = require('../utils');

const getPokemons = async (req, res) => {

    const pokemons = await prisma.Pokemon.findMany({
        include: {
            types: true,
            types: {
                include: {
                    type: true,
                },
            },
        },
    });
    console.log(pokemons);

    res.json({ data: pokemons });
}

module.exports = { getPokemons };