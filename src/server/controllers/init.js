const axios = require('axios');

const { EXTERNAL_API } = require('../config');

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
    const categories = ['Gaming', 'Fan-Fiction', 'Cosplay', 'Manga', 'TV/Film'];

    for (let i = 0; i < categories.length; i++) {
        const createdCategory = await prisma.category.create({
            data: {
                name: categories[i],
            },
        });

        console.log('Created Category', createdCategory);
    }
};

module.exports = {
    initPokemonDatabase,
    initCategoriesDatabase,
};
