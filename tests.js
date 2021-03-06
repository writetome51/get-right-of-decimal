import { getRightOfDecimal } from './index.js';

let nonFloats = [0, '', '1', '100', true, false, NaN, Number, Infinity, Number.MAX_VALUE, [], {}, String];

// Test 1 : Must trigger error in each iteration:
let i = -1, errorsTriggered = 0;
while (++i < nonFloats.length) {
    try {
        let result = getRightOfDecimal(nonFloats[i]);
    }
    catch (e) {
        ++errorsTriggered;
    }
}
if (errorsTriggered === nonFloats.length)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');


// Test 2
let result = getRightOfDecimal(0.000001);
if (result === '000001')
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');


// Test 3
result = getRightOfDecimal(6.4000000001);
if (result === '4000000001')
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');


// Test 4
result = getRightOfDecimal(-.4000000001);
if (result === '4000000001')
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');


// Test 5
result = getRightOfDecimal(4199111111221.111);
if (result === '111')
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
