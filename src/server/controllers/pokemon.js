const { prisma } = require('../utils/prisma');

const { SERVER_ERROR, SERVER_SUCCESS } = require('../config');

const getAllPokemon = async (req, res) => {
    const fetchedPokemon = await prisma.pokemon.findMany({
        include: {
            ratings: {
                include: {
                    rating: true,
                },
            },
            types: {
                include: {
                    type: true
                }
            }

        },
    });

    res.status(SERVER_SUCCESS.OK.CODE).json({ data: fetchedPokemon });
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
        return res.status(SERVER_ERROR.NOT_FOUND.CODE).json({ error: SERVER_ERROR.NOT_FOUND.MESSAGE });
    }

    res.status(SERVER_SUCCESS.OK.CODE).json({ data: foundPokemon });
};

const getAllPokemonRatings = async (req, res) => {
    const fetchedRatings = await prisma.rating.findMany();

    if (!ratings) {
        return res.status(SERVER_ERROR.NOT_FOUND.CODE).json({ error: SERVER_ERROR.NOT_FOUND.MESSAGE });
    }

    res.status(SERVER_SUCCESS.OK.CODE).json({ data: fetchedRatings });
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
                    pokemon: {
                        include: {
                            ratings: {
                                include: {
                                    rating: true
                                }
                            }
                        }
                    },
                },
            },
        },
    });

    if (!createdRating) {
        return res.status(SERVER_ERROR.INTERNAL.CODE).json({ error: SERVER_ERROR.INTERNAL.MESSAGE });
    }
    return res.status(SERVER_SUCCESS.OK.CODE).json({ data: createdRating });
};

module.exports = {
    getAllPokemon,
    getPokemonById,
    getAllPokemonRatings,
    createPokemonRating
};