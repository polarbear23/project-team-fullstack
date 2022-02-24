const EXTERNAL_API = 'https://pokeapi.co/api/v2/pokemon/';

const RES_ERRORS = {
    create: 500,
    find: 404
}

const RES_ERROR_MESSAGES = {
    create: "Internal server error" 
}

const SECRET = 'process.env.SECRET'

class SERVER_ERROR_MESSAGE {
    UNAUTHORIZED = 'Unauthorized'
    FORBIDDEN = 'Forbidden'
}

module.exports = {
    EXTERNAL_API,
    RES_ERRORS,
    RES_ERROR_MESSAGES,
    SECRET,
    SERVER_ERROR_MESSAGE
}