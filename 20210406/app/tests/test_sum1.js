import { sum } from '../main.js';

const assert = chai.assert;

export default function test_sum1(){
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
}


