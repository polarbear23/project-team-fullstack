const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const checkPassword = async (textPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(textPassword, hashedPassword);
    } catch (error) {
        console.log(`error in password check`, error);
        return error;
    }
};

const hashedPassword = (password) => bcrypt.hashSync(password, saltRounds);

const createToken = (payload) => jwt.sign(payload, secret);

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

    password = hashedPassword(password);

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

    res.json(updatedUser);
};

module.exports = {
    authenticateUser,
    editUser,
};
