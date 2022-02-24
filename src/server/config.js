const EXTERNAL_API = 'https://pokeapi.co/api/v2/pokemon/';

const RES_ERRORS = {
    create: 500,
    find: 404
}

const RES_ERROR_MESSAGES = {
    create: "Internal server error" 
}

module.exports = {
    EXTERNAL_API,
    RES_ERRORS,
    RES_ERROR_MESSAGES
}

