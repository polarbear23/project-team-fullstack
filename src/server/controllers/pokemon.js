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
    const id = Number(req.params.id);

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

    const profileRatings = await prisma.rating.findMany({
        where: {
            profileId: profileId
        },
        include: {
            pokemons: true
        }
    });
    const filteredRatings = profileRatings.filter((rating) => rating.pokemons[0].pokemonId === pokemonId); //if pokemon rating exists

    if (filteredRatings.length > 0) {
        const updatedRating = await prisma.rating.update({
            where: {
                id: filteredRatings[0].id
            },
            data: {
                rating: rating,
            }
        });
        return res.status(SERVER_SUCCESS.OK.CODE).json({ data: updatedRating });
    }


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