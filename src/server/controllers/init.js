const axios = require('axios');

const { 
    EXTERNAL_API, 
    CATEGORIES, 
    SERVER_ERROR_MESSAGE, 
    NUMBER_OF_COMMENTS_WITH_PARENT_TO_GENERATE, 
    NUMBER_OF_COMMENTS_TO_GENERATE, 
    NUMBER_OF_POSTS_TO_GENERATE, 
    NUMBER_OF_USERS_AND_PROFILES_TO_GENERATE 
} = require('../config');

const { fakeUser, fakeProfile, fakePost, fakeComment, fakeCommentWithParent } = require('../utils/faker');

const { prisma } = require('../utils/prisma');

const { capitalizeFirstLetter } = require('../utils/utils');

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

    res.status(201).json('151 Pokemon seeded successfully');
};

const filterPokemonData = async (pokemon, pokemonId) => {
    const pokemonName = capitalizeFirstLetter(pokemon.name);

    const types = [];
    pokemon.types.forEach((type) => types.push(capitalizeFirstLetter(type.type.name)));

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

    return (pokemonToCreate = {
        filteredPokemon,
        types,
    });
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
        res.status(201).json('Categories seeded successfully');
    }
};

const seedUsersAndProfiles = async (req, res) => {
    for(let i = 0; i < NUMBER_OF_USERS_AND_PROFILES_TO_GENERATE; i++){
        const fakedUser = fakeUser();
        const createdUser = await prisma.user.create({
            data: {
                ...fakedUser
            }
        });
        console.log('Created User:', createdUser);

        if(!createdUser){
            return res.status(500).json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
        }

        const fakedProfile = fakeProfile(createdUser.id);
        const createdProfile = await prisma.profile.create({
            data: {
                ...fakedProfile
            }
        });
        console.log('Created Profile:', createdProfile);

        if(!createdProfile){
            return res.status(500).json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
        }
    }

    res.status(200).json('Users and profiles seeded successfully');
}

const seedPosts = async (req, res) => {
    for(let i = 0; i < NUMBER_OF_POSTS_TO_GENERATE; i++){
        const fakedPost = fakePost();
        const createdPost = await prisma.post.create({
            data: {
                ...fakedPost
            }
        });
        console.log('Created Post:', createdPost);

        if(!createdPost){
            return res.status(500).json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
        }
    }

    res.status(200).json('Posts seeded successfully');
}

const seedComments = async (req, res) => {
    for(let i = 0; i < NUMBER_OF_COMMENTS_TO_GENERATE; i++){
        const fakedComment = fakeComment();
        const createdComment = await prisma.comment.create({
            data: {
                ...fakedComment
            }
        });
        console.log('Created Comment:', createdComment);

        if(!createdComment){
            return res.status(500).json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
        }
    }

    for(let i = 0; i < NUMBER_OF_COMMENTS_WITH_PARENT_TO_GENERATE; i++){
        const fakedCommentWithParent = fakeCommentWithParent();
        const createdCommentWithParent = await prisma.comment.create({
            data: {
                ...fakedCommentWithParent
            }
        });
        console.log('Created Comment with Parent:', createdCommentWithParent);

        if(!createdCommentWithParent){
            return res.status(500).json({ error: SERVER_ERROR_MESSAGE.INTERNAL_SERVER });
        }
    }

    res.status(200).json('Comments seeded successfully');
}

const initForumDatabase = async (req, res) => {
    await seedUsersAndProfiles();
    await seedPosts();
    await seedComments();
}

module.exports = {
    initPokemonDatabase,
    initCategoriesDatabase,
    initForumDatabase
};
