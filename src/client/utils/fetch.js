const fetchConfig = (reqBody, method) => {
    return {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
    };
};

export const fetchFromServer = async (endpoint, reqBody, method) => {
    try {
        const response = await fetch(endpoint, fetchConfig(reqBody, method));
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
