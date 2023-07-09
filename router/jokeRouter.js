const express = require('express');
const { jokeService, jokeServiceById } = require('../services/jokeService');
const jokeRouter = express.Router();

//http://localhost:3000/jokes/random
jokeRouter.get('/', (req,res, next)=>{
    jokeService().then(result => {
        res.status(200).json(result.data);
    }).catch(err => {
        res.status(500).json({
            error:{
                message: err.message,
            },
        });
    });
});

//http://localhost:3000/jokes/401
jokeRouter.get('/:id',(res,req, next)=> {
    jokeServiceById(req.params.id).then((result) => {
        res.status(200).json(result.data);
    }).catch((err)=>{
        res.status(500).json({
            error: {
                message: err.message,
            },
        });
    });
});

module.exports = jokeRouter;