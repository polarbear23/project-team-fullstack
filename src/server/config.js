const EXTERNAL_API = 'https://pokeapi.co/api/v2/pokemon/';

const SECRET = process.env.SECRET;

const SERVER_ERROR = {
    UNAUTHORIZED: { MESSAGE: 'Unauthorized', CODE: 401},
    FORBIDDEN: { MESSAGE: 'Forbidden', CODE: 403},
    NOT_FOUND: { MESSAGE: 'Not found', CODE: 404},
    INTERNAL: { MESSAGE: 'Internal server error', CODE: 500}
};

const SERVER_SUCCESS = {
    OK: { MESSAGE: 'OK Successful', CODE: 200 },
    POST_OK: { MESSAGE: 'Post Successful', CODE: 201 },
    DELETE_OK: { MESSAGE: 'Delete Successful', CODE: 201 },
    UPDATE_OK: { MESSAGE: 'Update Successful', CODE: 201 }
}

const PRISMA_ERROR = {
    UNIQUE_CONSTRAINT_VIOLATION: { 
        SERVER_MESSAGE: 'There is a unique constraint violation, a new user cannot be created with this email or username',
        CLIENT_MESSAGE_REGISTER: 'Username or email associated with existing account',
        CLIENT_MESSAGE_PROFILE: 'User already has a profile',
        CODE: 'P2002'
    }
}

const FORUM_ROLES = {
    USER: 'USER',
    MODERATOR: 'MODERATOR',
    ADMIN: 'ADMIN',
};

const KEYS = {
    PASSWORD: 'password',
};

//SEEDING
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
    SERVER_ERROR,
    SERVER_SUCCESS,
    PRISMA_ERROR,
    CATEGORIES,
    NUMBER_OF_USERS_AND_PROFILES_TO_GENERATE,
    NUMBER_OF_POSTS_TO_GENERATE,
    NUMBER_OF_COMMENTS_TO_GENERATE,
    NUMBER_OF_COMMENTS_WITH_PARENT_TO_GENERATE
};