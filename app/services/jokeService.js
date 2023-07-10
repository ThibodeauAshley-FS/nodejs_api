const axios = require('axios');
require ('dotenv').config();

const jokeService = async () => {
    console.log("10 Jokes");
    return await axios.get(`${process.env.jokeURL}ten`);
};

const jokeServiceById = async (id) => {
    console.log('Joke by ID');
    return await axios.get(`${process.env.jokeURL}${id}`);
};

module.exports = {jokeService, jokeServiceById };