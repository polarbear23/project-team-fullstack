const fetchConfig = (reqBody, method) => {
    return {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
    };
};

const doFetch = async (endpoint, reqBody, method) => {
    try {
        const response = await fetch(endpoint, fetchConfig(reqBody, method));
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const capitaliseFirstLetter = (string) => string.replace(/\b\w/g, (c) => c.toUpperCase());

module.exports = {
    doFetch,
    capitaliseFirstLetter,
};
