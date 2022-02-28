const EXTERNAL_API = 'https://pokeapi.co/api/v2/pokemon/';

const SECRET = process.env.SECRET;

const SERVER_ERROR_MESSAGE = {
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden',
    NOT_FOUND: 'Not found',
    INTERNAL_SERVER: 'Internal server error',
};

const FORUM_ROLES = {
    USER: 'USER',
    MODERATOR: 'MODERATOR',
    ADMIN: 'ADMIN',
};

const KEYS = {
    PASSWORD: 'password',
};

const CATEGORIES = ['Gaming', 'Fan-Fiction', 'Cosplay', 'Manga', 'TV/Film'];

module.exports = {
    EXTERNAL_API,
    FORUM_ROLES,
    KEYS,
    SECRET,
    SERVER_ERROR_MESSAGE,
    CATEGORIES
};
