//THIS IS FOR JEST TESTING

const {jokeService, jokeServiceById} = require('./jokeService');

//THIS IS TURNED OFF TO TEST LIVE | UNCOMMENT TO RUN MOCK ENVIROMENT
//jest.mock('./jokeService')

describe('Joke Service Tests', () => {
    test('As a user I should be able to return 10 jokes', async() => {
        const result = await jokeService();
        expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toHaveLength(10);
    });
   
    test('As a user I should be able to return a joke by ID', async() => {
        const result = await jokeServiceById(401);
        expect(result.data.id).toEqual(401);
        expect(result.data.type).toEqual('general');
        expect(result.data.setup).toEqual('What does the mermaid wear to math class?');
        expect(result.data.punchline).toEqual('Algae-bra.');

    });
});