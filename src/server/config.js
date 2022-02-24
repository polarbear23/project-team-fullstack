const EXTERNAL_API = 'https://pokeapi.co/api/v2/pokemon/'

const SECRET = 'process.env.SECRET'
class SERVER_ERROR_MESSAGE {
    UNAUTHORIZED = 'Unauthorized'
    FORBIDDEN = 'Forbidden'
}

module.exports = {
    EXTERNAL_API,
    SECRET,
    SERVER_ERROR_MESSAGE
}