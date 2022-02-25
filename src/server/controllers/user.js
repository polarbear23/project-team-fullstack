const bcrypt = require('bcrypt');

const checkPassword = async (textPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(textPassword, hashedPassword);
    } catch (error) {
        console.log(`error in password check`, error);
        return error;
    }
};

const authenticateUser = async (req, res) => {
    let { username, password } = req.body;

    const foundUser = await prisma.user.findUnique({
        where: {
            username,
        },
    });

    if (!foundUser) return res.status(401).json('User authentication failed');

    const passwordsMatch = await checkPassword(password, foundUser.password);

    if (!passwordsMatch) return res.status(401).json('User authentication failed');

    res.json(createToken({id: foundUser.id}));
}

const editUser = async (req, res) => {
    
}


module.exports = {
    authenticateUser,
    editUser,
}