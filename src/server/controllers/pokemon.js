const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const axios = require('axios');

const capitalizeFirstLetter = (string) => string.replace(/\b\w/g, c => c.toUpperCase());

const initPokemonDatabase = async (req, res) => {
    const catchPokemon = async () => {
        const numberOfPokemonToFetch = 151;
        let pokemonId = 1;
        for(let i = 0; i <  numberOfPokemonToFetch - 1; i++, pokemonId++){
            const fetchedPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            
            const pokemonCleanData = filterPokemonData(fetchedPokemon, pokemonId);
            console.log(pokemonCleanData);

            //populateDatabase(pokemonCleanData);
        }
    }

    const filterPokemonData = async (pokemon, pokemonId) => {
        const pokemonName = capitalizeFirstLetter(pokemon.data.name);
        const pokemonTypes = [];
        pokemon.data.types.forEach(type => pokemonTypes.push(capitalizeFirstLetter(type.type.name)));

        return {
            name: pokemonName,
            number: pokemonId,
            types: pokemonTypes,
            baseHP: pokemon.data.stats[0].base_stat,
            baseAttack: pokemon.data.stats[1].base_stat,
            baseDefense: pokemon.data.stats[2].base_stat,
            specialAttack: pokemon.data.stats[3].base_stat,
            specialDefense: pokemon.data.stats[4].base_stat,
            speed: pokemon.data.stats[5].base_stat
        };
    }

    catchPokemon();
};

initPokemonDatabase();

module.exports = { initPokemonDatabase };

const populateDatabase = async () => {

    const {
        name,
        number,
        pictureUrl,
        baseHP,
        baseAttack,
        baseDefense,
        specialAttack,
        specialDefense,
        speed,
        types,
    } = pokemon;

    const pictureUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`

    const createdPokemon = await prisma.Pokemon.create({
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

    console.log(`New Pokemon Created`, createdPokemon);
};

module.exports = { populateDatabase };

    // const pokemon = {
    //     name: 'Bulbasaur',
    //     number: 001,
    //     pictureUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    //     baseHP: 45, //stats[0]
    //     baseAttack: 49, //stats[1]
    //     baseDefense: 49, //stats[2]
    //     specialAttack: 65, //stats[3]
    //     specialDefense: 65, //stats[4]
    //     speed: 45, //stats[5]
    //     types: ['grass', 'poison'],
    // };
