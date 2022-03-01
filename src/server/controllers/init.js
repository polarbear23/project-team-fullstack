const axios = require('axios');

const {
    EXTERNAL_API,
    CATEGORIES,
    SERVER_ERROR,
    SERVER_SUCCESS,
    NUMBER_OF_COMMENTS_WITH_PARENT_TO_GENERATE,
    NUMBER_OF_COMMENTS_TO_GENERATE,
    NUMBER_OF_POSTS_TO_GENERATE,
    NUMBER_OF_USERS_AND_PROFILES_TO_GENERATE,
} = require('../config');

const {
    fakeUser,
    fakeProfile,
    fakePost,
    fakeComment,
    fakeCommentWithParent,
} = require('../utils/faker');

const { prisma } = require('../utils/prisma');

const { capitalizeFirstLetter, generateRandomInt } = require('../utils/utils');

const initPokemonDatabase = async (req, res) => {
    const numberOfPokemonToFetch = 151;

    for (let i = 0; i < numberOfPokemonToFetch; i++) {
        const pokemonId = i + 1;

        const response = await axios(`${EXTERNAL_API}${pokemonId}`);
        const fetchedPokemon = response.data;

        const filteredPokemon = await filterPokemonData(fetchedPokemon, pokemonId);

        const createdPokemon = await createNewPokemon(filteredPokemon);
        console.log('Created Pokemon:', createdPokemon);
    }

    res.status(SERVER_SUCCESS.POST_OK.CODE).json('151 Pokemon seeded successfully');
};

const filterPokemonData = async (pokemon, pokemonId) => {
    const pokemonName = capitalizeFirstLetter(pokemon.name);

    const types = [];
    pokemon.types.forEach((type) =>
        types.push(capitalizeFirstLetter(type.type.name))
    );

    const pokedexId = pokemonId.toString().padStart(3, '0');
    const largeImageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokedexId}.png`;
    const smallImageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokedexId}.png`;

    const filteredPokemon = {
        name: pokemonName,
        number: pokemonId,
        largeImageUrl: largeImageUrl,
        smallImageUrl: smallImageUrl,
        baseHP: pokemon.stats[0].base_stat,
        baseAttack: pokemon.stats[1].base_stat,
        baseDefense: pokemon.stats[2].base_stat,
        specialAttack: pokemon.stats[3].base_stat,
        specialDefense: pokemon.stats[4].base_stat,
        speed: pokemon.stats[5].base_stat,
    };

    const pokemonToCreate = {
        filteredPokemon: filteredPokemon,
        types: types
    }
    
    return pokemonToCreate;
};

const createNewPokemon = async (pokemonToCreate) => {
    const { filteredPokemon, types } = pokemonToCreate;

    const createdPokemon = await prisma.pokemon.create({
        data: {
            ...filteredPokemon,
            types: {
                create: types.map((type) => {
                    return {
                        type: {
                            connectOrCreate: {
                                where: {
                                    name: type,
                                },
                                create: {
                                    name: type,
                                },
                            },
                        },
                    };
                }),
            },
        },
        include: {
            types: true,
            types: {
                include: {
                    type: true,
                },
            },
        },
    });

    return createdPokemon;
};

const initCategoriesDatabase = async (req, res) => {
    for (let i = 0; i < CATEGORIES.length; i++) {
        const createdCategory = await prisma.category.create({
            data: {
                name: CATEGORIES[i],
            },
        });

        console.log('Created Category', createdCategory);
    }

    res.status(SERVER_SUCCESS.POST_OK.CODE).json('Categories seeded successfully');
};

const seedUsersAndProfiles = async (req, res) => {
    for (let i = 0; i < NUMBER_OF_USERS_AND_PROFILES_TO_GENERATE; i++) {
        const fakedUser = fakeUser();

        const createdUser = await prisma.user.create({
            data: {
                ...fakedUser,
            },
        });

        console.log('Created User:', createdUser);

        if (!createdUser) {
            return res.status(500).json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
        }

        const fakedProfile = fakeProfile(createdUser.id);

        const createdProfile = await prisma.profile.create({
            data: {
                ...fakedProfile,
            },
        });

        console.log('Created Profile:', createdProfile);

        if (!createdProfile) {
            return res.status(SERVER_ERROR.INTERNAL.CODE).json({ error: SERVER_ERROR.INTERNAL.MESSAGE });
        }
    }
};

const seedPosts = async (req, res) => {
    for (let i = 0; i < NUMBER_OF_POSTS_TO_GENERATE; i++) {
        const fakedPost = fakePost();

        const randomUserId = generateRandomInt(NUMBER_OF_USERS_AND_PROFILES_TO_GENERATE);

        const createdPost = await prisma.post.create({
            data: {
                title: fakedPost.title,
                content: fakedPost.content,
                userId: randomUserId,
                tags: {
                    create: fakedPost.tags.map((tag) => {
                        return {
                            tag: {
                                connectOrCreate: {
                                    where: {
                                        name: tag,
                                    },
                                    create: {
                                        name: tag,
                                    },
                                },
                            },
                        };
                    }),
                },
                categories: {
                    create: fakedPost.categories.map((category) => {
                        return {
                            category: {
                                connectOrCreate: {
                                    where: {
                                        name: category,
                                    },
                                    create: {
                                        name: category,
                                    },
                                },
                            },
                        };
                    }),
                },
            },
            include: {
                tags: {
                    include: {
                        tag: true,
                    },
                },
            },
        });
        console.log('Created Post:', createdPost);

        if (!createdPost) {
            return res.status(SERVER_ERROR.INTERNAL.CODE).json({ error: SERVER_ERROR.INTERNAL.MESSAGE });
        }
    }
};

const seedComments = async (req, res) => {
    for (let i = 0; i < NUMBER_OF_COMMENTS_TO_GENERATE; i++) {
        const fakedComment = fakeComment();

        const randomUserId = generateRandomInt(NUMBER_OF_USERS_AND_PROFILES_TO_GENERATE);

        const randomPostId = generateRandomInt(NUMBER_OF_POSTS_TO_GENERATE);

        const createdComment = await prisma.comment.create({
            data: {
                ...fakedComment,
                postId: randomPostId,
                userId: randomUserId,
            },
        });
        console.log('Created Comment:', createdComment);

        if (!createdComment) {
            return res.status(SERVER_ERROR.INTERNAL.CODE).json({ error: SERVER_ERROR.INTERNAL.MESSAGE });
        }
    }

    for (let i = 0; i < NUMBER_OF_COMMENTS_WITH_PARENT_TO_GENERATE; i++) {
        const fakedCommentWithParent = fakeCommentWithParent();

        const randomUserId = generateRandomInt(NUMBER_OF_USERS_AND_PROFILES_TO_GENERATE);

        const randomPostId = generateRandomInt(NUMBER_OF_POSTS_TO_GENERATE);

        const createdCommentWithParent = await prisma.comment.create({
            data: {
                ...fakedCommentWithParent,
                postId: randomPostId,
                userId: randomUserId,
            },
        });

        console.log('Created Comment with Parent:', createdCommentWithParent);

        if (!createdCommentWithParent) {
            return res.status(SERVER_ERROR.INTERNAL.CODE).json({ error: SERVER_ERROR.INTERNAL.MESSAGE });
        }
    }
};

const initForumDatabase = async (req, res) => {
    await seedUsersAndProfiles(req, res);
    await seedPosts(req, res);
    await seedComments(req, res);

    res.status(SERVER_SUCCESS.OK).json('Database seeded successfully');
};

module.exports = {
    initPokemonDatabase,
    initCategoriesDatabase,
    initForumDatabase
};