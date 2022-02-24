const axios = require('axios');

const { URL } = require('../config');

const { prisma, capitalizeFirstLetter } = require('../utils');

const populateDatabase = async (pokemon) => {
    const {
        name,
        number,
        baseHP,
        baseAttack,
        baseDefense,
        specialAttack,
        specialDefense,
        speed,
        types,
    } = pokemon;

    const pokedexId = number.toString().padStart(3, '0');

    const pictureUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokedexId}.png`;

    const createdPokemon = await prisma.pokemon.create({
        data: {
            name,
            number,
            pictureUrl,
            baseHP,
            baseAttack,
            baseDefense,
            specialAttack,
            specialDefense,
            speed,
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
};

const initPokemonDatabase = async (req, res) => {
    const filterPokemonData = async (pokemon, pokemonId) => {
        const pokemonName = capitalizeFirstLetter(pokemon.name);

        const pokemonTypes = [];
        pokemon.types.forEach((type) => pokemonTypes.push(capitalizeFirstLetter(type.type.name)));

        return {
            name: pokemonName,
            number: pokemonId,
            types: pokemonTypes,
            baseHP: pokemon.stats[0].base_stat,
            baseAttack: pokemon.stats[1].base_stat,
            baseDefense: pokemon.stats[2].base_stat,
            specialAttack: pokemon.stats[3].base_stat,
            specialDefense: pokemon.stats[4].base_stat,
            speed: pokemon.stats[5].base_stat,
        };
    };

    const catchPokemon = async () => {
        const numberOfPokemonToFetch = 151;
        let pokemonId = 1;
        for (let i = 0; i < numberOfPokemonToFetch; i++, pokemonId++) {
            const response = await axios(`${URL}${pokemonId}`);
            
            const fetchedPokemon = response.data;

            const pokemonCleanData = await filterPokemonData(fetchedPokemon, pokemonId);

            await populateDatabase(pokemonCleanData);
        }
    };

    catchPokemon();
};

module.exports = {
    initPokemonDatabase,
};
