const { prisma } = require('../utils/prisma');

const { SERVER_ERROR_MESSAGE } = require('../config');

const getAllPokemon = async (req, res) => {
    const fetchedPokemon = await prisma.pokemon.findMany({
        include: {
            ratings: {
                include: {
                    rating: true,
                },
            },
        },
    });

    res.status(200).json({ data: fetchedPokemon });
};

const getPokemonById = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const foundPokemon = await prisma.pokemon.findUnique({
        where: {
            id: id,
        },
        include: {
            ratings: {
                include: {
                    rating: true,
                },
            },
        },
    });

    if (!foundPokemon) {
        return res.status(404).json({ error: SERVER_ERROR_MESSAGE.NOT_FOUND });
    }

    res.status(200).json({ data: foundPokemon });
};

const getAllPokemonRatings = async (req, res) => {
    const fetchedRatings = await prisma.rating.findMany({});

    if (!ratings) {
        return res.status(404).json({ error: SERVER_ERROR_MESSAGE.NOT_FOUND });
    }

    res.status(200).json({ data: fetchedRatings });
};

const createPokemonRating = async (req, res) => {
    const { profileId, rating, pokemonId } = req.body;

    const createdRating = await prisma.rating.create({
        data: {
            profileId: profileId,
            rating: rating,
            pokemons: {
                create: {
                    pokemon: {
                        connect: {
                            id: pokemonId,
                        },
                    },
                },
            },
        },
        include: {
            pokemons: {
                include: {
                    pokemon: true,
                },
            },
        },
    });

    if (!createdRating) {
        return res
            .status(500)
            .json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
    }
    return res.status(200).json({ data: createdRating });
};

module.exports = {
    getAllPokemon,
    getPokemonById,
    getAllPokemonRatings,
    createPokemonRating,
};
