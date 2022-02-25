const { prisma } = require("@prisma/client");
const { SERVER_ERROR_MESSAGE } = require("../config");

const getPokemonById = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const foundPokemon = await prisma.pokemon.findUnique({
        where: {
            id: id
        }
    });

    if(!foundPokemon){
        return res.status(404).json({ error: SERVER_ERROR_MESSAGE.NOT_FOUND });
    }
    return res.status(200).json({ data: foundPokemon });
}

module.exports = {
    getPokemonById
}