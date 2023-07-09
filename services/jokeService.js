const axios = require('axios');
require ('dotenv').config();

const jokeService = async () => {
    console.log("Real Jokes");
    return await axios.get(`${process.env.jokeURL}${`/random`}`);
};
const jokeServiceById = async (id) => {
    console.log('Real Joke by ID');
    return await axios.get(`${process.env.jokeURL}${`/jokes/${id}`}`);
}

module.exports = {jokeService, jokeServiceById };