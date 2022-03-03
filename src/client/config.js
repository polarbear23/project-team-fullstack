const USER_URL = {
    USER_ROOT: 'http://localhost:4000/user/',
    REGISTER: 'http://localhost:4000/user/register',
    LOGIN: 'http://localhost:4000/user/login',
    PROFILE: 'http://localhost:4000/user/profile',
    POKEMON: 'http://localhost:4000/pokemon/',
    POKEMON_RATING: 'http://localhost:4000/pokemon/rating',
};

const FORUM_URL = {
    POST: 'http://localhost:4000/post',
    COMMENT: 'http://localhost:4000/post/comment',
};

const INT_LINK = {
    HOME: '/',
    CREATE_PROFILE: '/register/profile',
    CREATE_USER: '/register/user',
    LOGIN: '/login',
    FORUM: '/forum',
    LEADERBOARD: '/leaderboard',
    NOT_FOUND: '*',
    PROFILE: '/profile',
};

const LOCAL_STORAGE = {
    TOKEN: 'token',
    USER_ID: 'userId',
};

const FETCH_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

module.exports = {
    USER_URL,
    INT_LINK,
    LOCAL_STORAGE,
    FETCH_METHOD,
    FORUM_URL,
};
