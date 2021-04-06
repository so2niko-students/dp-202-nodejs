import { sum } from '../main.js';

const assert = chai.assert;

export default function test_sum2(){

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

}