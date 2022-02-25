const EXTERNAL_API = 'https://pokeapi.co/api/v2/pokemon/';

const SECRET = 'process.env.SECRET';

const SERVER_ERROR_MESSAGE = {
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden',
    NOT_FOUND: 'Not found',
    INTERNAL_SERVER: 'Internal server error',
};

module.exports = {
    EXTERNAL_API,
    SECRET,
    SERVER_ERROR_MESSAGE,
};