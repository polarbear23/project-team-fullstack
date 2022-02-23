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