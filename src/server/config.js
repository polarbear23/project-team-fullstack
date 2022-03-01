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

const NUMBER_OF_USERS_AND_PROFILES_TO_GENERATE = 100;
const NUMBER_OF_POSTS_TO_GENERATE = 100;
const NUMBER_OF_COMMENTS_TO_GENERATE = 60;
const NUMBER_OF_COMMENTS_WITH_PARENT_TO_GENERATE = 40;

module.exports = {
    EXTERNAL_API,
    FORUM_ROLES,
    KEYS,
    SECRET,
    SERVER_ERROR_MESSAGE,
    CATEGORIES,
    NUMBER_OF_USERS_AND_PROFILES_TO_GENERATE,
    NUMBER_OF_POSTS_TO_GENERATE,
    NUMBER_OF_COMMENTS_TO_GENERATE,
    NUMBER_OF_COMMENTS_WITH_PARENT_TO_GENERATE
};
