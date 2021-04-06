import test_sum1 from './test_sum1.js';
import test_sum2 from './test_sum2.js';

mocha.setup('bdd');

test_sum1();
test_sum2();

//START
mocha.run();