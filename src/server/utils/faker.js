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

const fakeProfile = () => {
    const fakedProfilePicture = faker.image.avatar();
    const fakedLocation = faker.address.city();

    const fakedProfile = {
        profilePicture: fakedProfilePicture,
        location: fakedLocation
    }

    return fakedProfile;
}

const MAX_NUMBER_OF_TAGS_WANTED = 3;
const MAX_NUMBER_OF_CATEGORIES_WANTED = 2;

const fakePost = () => {
    const fakedTitle = faker.lorem.sentence();
    const fakedContent = faker.lorem.sentences();
    
    const fakedTags = [];
    const numberOfTags = generateRandomInt(MAX_NUMBER_OF_TAGS_WANTED);

    for(let i = 0; i < numberOfTags; i++){
        const fakedTag = faker.lorem.word();
        fakedTags.push(fakedTag);
    }

    const postCategories = [];
    const numberOfCategories = generateRandomInt(MAX_NUMBER_OF_CATEGORIES_WANTED);
    for(let i = 0; i < numberOfCategories; i++){
        const randomCategoryIndex = generateRandomInt(CATEGORIES.length - 1);
        if(postCategories.includes(CATEGORIES[randomCategoryIndex])){
            i--;
            continue;
        }
        postCategories.push(CATEGORIES[randomCategoryIndex]);
    }

    const fakedPost = {
        title: fakedTitle,
        content: fakedContent,
        categories: postCategories,
        tags: fakedTags
    }

    return fakedPost;
}

const fakeComment = () => {
    const fakedContent = faker.lorem.sentences();
    
    const fakedComment = {
        content: fakedContent
    }

    return fakedComment;
}

const NUMBER_OF_COMMENTS_TO_GENERATE = 10;

const fakeCommentWithParent = () => {
    const fakedComment = fakeComment();
    const randomParentId = generateRandomInt(NUMBER_OF_COMMENTS_TO_GENERATE);

    const fakedCommentWithParent = {
        ...fakedComment,
        parentId: randomParentId
    }

    return fakedCommentWithParent;
}

const user = fakeUser();
const profile = fakeProfile();
const post = fakePost();
const comment = fakeComment();
const commentWithParent = fakeCommentWithParent();