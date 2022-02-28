const { faker } = require('@faker-js/faker');
const { CATEGORIES } = require('../config');
const { generateRandomInt } = require('./utils');

const fakeUser = () => {
    const fakedUsername = faker.internet.userName();
    const fakedPassword = faker.internet.password();
    const fakedEmail = faker.internet.email();

    const fakedUser = {
        username: fakedUsername,
        password: fakedPassword,
        email: fakedEmail
    }

    return fakedUser;
}

const user = fakeUser();
console.log(user);
// const profile = fakeProfile();
// console.log(profile);
// const post = fakePost();
// console.log(post);
//const comment = fakeComment();
//console.log(comment);
//const commentWithParent = fakeCommentWithParent();
//console.log(commentWithParent);