import { sum } from '../main.js';

mocha.setup('bdd');

const assert = chai.assert;


describe('sum 2 numbers', () => {
    it('Sum 3 + 4 = 7', () => {
        assert.equal(sum(3, 4), 7);
    });
    it('Sum 0 + 0 = 0', () => {
        assert.equal(sum(0, 0), 0);
    });
    it('Sum -1 + 1 = 0', () => {
        assert.equal(sum(-1, 1), 0);
    });
});

describe('sum 3 numbers', () => {
    it('Sum 3 + 4 + 3 = 10', () => {
        assert.equal(sum(3, 4, 3), 10);
    });
    it('Sum 0 + 0 + 0 = 0', () => {
        assert.equal(sum(0, 0, 0), 0);
    });
});

describe('sum with errors', () => {
    describe('sum not numbers', () => {
        it('Sum "hello" + 1 = error', () => {
            assert.deepEqual(sum('hello', 1), {
                status : 'failed',
                reason : 'All parameters must be numbers'
            });
        });
    });
    
    describe('sum without arguments', () => {
        it('Sum = error', () => {
            assert.deepEqual(sum(), {
                status : 'failed',
                reason : 'You need minimum 2 arguments'
            });
        });
    });
});



//START
mocha.run();