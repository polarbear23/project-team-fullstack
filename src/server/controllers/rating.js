const { prisma } = require("@prisma/client");
const { SERVER_ERROR_MESSAGE } = require("../config");

const getRatings = async (req, res) => {
    const ratings = await prisma.rating.findMany({});

    if(!ratings){
        return res.status(404).json({ error: SERVER_ERROR_MESSAGE.NOT_FOUND });
    }
    return res.status(200).json({ data: ratings });
}

module.exports = {
    getRatings
}