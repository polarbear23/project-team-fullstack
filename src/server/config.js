const EXTERNAL_API = 'https://pokeapi.co/api/v2/pokemon/';

const SECRET = 'process.env.SECRET';

const SERVER_ERROR_MESSAGE = {
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden',
    CREATE: 'Internal server error',
};

const SERVER_STATUS_CODE = {
    CREATE: 500,
    NOT_FOUND: 404,
};

module.exports = {
    EXTERNAL_API,
    SECRET,
    SERVER_STATUS_CODE,
    SERVER_ERROR_MESSAGE,
};
