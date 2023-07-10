const express = require('express');
const { jokeService, jokeServiceById } = require('../services/jokeService');
const jokeRouter = express.Router();

//http://localhost:3000/jokes/ten
jokeRouter.get('/ten', (req,res, next)=>{
    jokeService().then(joke => {
        res.status(200).json(joke.data);
    }).catch(err => {
        res.status(500).json({
            error:{
                message: err.message,
            },
        })
    });
});

//http://localhost:3000/jokes/401
jokeRouter.get('/:id', (req,res, next) => {
    jokeServiceById(req.params.id).then(joke => {
        res.status(200).json(joke.data);
    }).catch(err => {
        res.status(500).json({
            error:{
                message: err.message,
            },
        })
    });
});

module.exports = jokeRouter;