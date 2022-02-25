const {checkPassword, hashedPassword, createToken, prisma} = require('../utils');

const { SECRET } = ('../config.js');

const authenticateUser = async (req, res) => {
    let { username, password } = req.body;

    const foundUser = await prisma.user.findUnique({
        where: {
            username,
        },
    });

    if (!foundUser) return res.status(401).json('User authentication failed');

    const passwordsMatch = await checkPassword(password, foundUser.password);

    if (!passwordsMatch)
        return res.status(401).json('User authentication failed');

    res.json(createToken({ id: foundUser.id }));
};

const editUser = async (req, res) => {
    let { username, password, email } = req.body;

    const id = parseInt(req.params.id, 10);

    password = await hashedPassword(password);

    const user = {
        username,
        password,
        email,
    };

    const updatedUser = await prisma.user.update({
        where: {
            id,
        },
        data: {
            ...user,
        },
    });

    delete updatedUser.password;

    res.json(updatedUser);
};

module.exports = {
    authenticateUser,
    editUser,
};