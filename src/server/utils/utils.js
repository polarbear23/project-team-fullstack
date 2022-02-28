const capitalizeFirstLetter = (string) =>
    string.replace(/\b\w/g, (c) => c.toUpperCase());

module.exports = {
    capitalizeFirstLetter,
};
