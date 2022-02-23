const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const axios = require('axios');

const initPokemonDatabase = async (req, res) => {};

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