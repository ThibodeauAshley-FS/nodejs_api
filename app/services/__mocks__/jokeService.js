//This is Mocked Data to Test JokeService

const jokeService = async () => {
    console.log("Mocked 10 Jokes");
    return Promise.resolve({
        data: [
            {
                "type": "general", 
                "setup": "What did the traffic light say to the car as it passed?", 
                "punchline": "Don't look I'm changing!", 
                "id": 187
            },
            {
                "type": "general", 
                "setup": "What does the mermaid wear to math class?", 
                "punchline": "Algae-bra.", 
                "id": 401
             },
             { 
                "type": "general", 
                "setup": "What did one snowman say to the other snow man?", 
                 "punchline": "Do you smell carrot?", 
                "id": 164
             },
             { 
                "type": "general", 
                "setup": "What do you give a sick lemon?", 
                "punchline": "Lemonaid.", 
                "id": 236 
            },
            { 
                "type": "general", 
                "setup": "What do you call a bee that can't make up its mind?", 
                "punchline": "A maybe.", 
                "id": 379 
            },
            { 
                "type": "general", 
                "setup": "What’s the difference between an African elephant and an Indian elephant?", 
                "punchline": "About 5000 miles.", 
                "id": 284
             },
             { 
                "type": "general", 
                "setup": "If you boil a clown...", 
                "punchline": "Do you get a laughing stock?", 
                "id": 45
             }, 
             { 
                "type": "general", 
                "setup": "Why did the kid cross the playground?", 
                "punchline": "To get to the other slide.", 
                "id": 333 
            },
            { 
                "type": "general", 
                "setup": "Why couldn't the kid see the pirate movie?", 
                "punchline": "Because it was rated arrr!", 
                "id": 315
             }, 
             {
                 "type": "general", 
                 "setup": "Can February march?",   
                 "punchline": "No, but April may.", 
                 "id": 82
                
                }]
    });
};

const jokeServiceById = async (id) => {
    console.log('Mocked Joke by ID');
    return Promise.resolve({
        data:{ "id": 401, "type": "general", "setup": "What does the mermaid wear to math class?", "punchline": "Algae-bra." }
    });
    return Promise.resolve({
        data: [
            {
                "type": "general", 
                "setup": "What did the traffic light say to the car as it passed?", 
                "punchline": "Don't look I'm changing!", 
                "id": 187
            },
            {
                "type": "general", 
                "setup": "What does the mermaid wear to math class?", 
                "punchline": "Algae-bra.", 
                "id": 401
             },
             { 
                "type": "general", 
                "setup": "What did one snowman say to the other snow man?", 
                 "punchline": "Do you smell carrot?", 
                "id": 164
             },
             { 
                "type": "general", 
                "setup": "What do you give a sick lemon?", 
                "punchline": "Lemonaid.", 
                "id": 236 
            },
            { 
                "type": "general", 
                "setup": "What do you call a bee that can't make up its mind?", 
                "punchline": "A maybe.", 
                "id": 379 
            },
            { 
                "type": "general", 
                "setup": "What’s the difference between an African elephant and an Indian elephant?", 
                "punchline": "About 5000 miles.", 
                "id": 284
             },
             { 
                "type": "general", 
                "setup": "If you boil a clown...", 
                "punchline": "Do you get a laughing stock?", 
                "id": 45
             }, 
             { 
                "type": "general", 
                "setup": "Why did the kid cross the playground?", 
                "punchline": "To get to the other slide.", 
                "id": 333 
            },
            { 
                "type": "general", 
                "setup": "Why couldn't the kid see the pirate movie?", 
                "punchline": "Because it was rated arrr!", 
                "id": 315
             }, 
             {
                 "type": "general", 
                 "setup": "Can February march?",   
                 "punchline": "No, but April may.", 
                 "id": 82
                
                }]
    });
};

module.exports = { jokeService, jokeServiceById };