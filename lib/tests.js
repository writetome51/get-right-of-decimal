"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRightOfDecimal_1 = require("./getRightOfDecimal");
var nonFloats = [0, '', '1', '100', true, false, NaN, Number, Infinity, Number.MAX_VALUE, [], {}, String];
// Test 1 : Must trigger error in each iteration:
var i = -1, errorsTriggered = 0;
while (++i < nonFloats.length) {
    try {
        var result_1 = getRightOfDecimal_1.getRightOfDecimal(nonFloats[i]);
    }
    catch (e) {
        ++errorsTriggered;
    }
}
if (errorsTriggered === nonFloats.length)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2
var result = getRightOfDecimal_1.getRightOfDecimal(0.000001);
if (result === '000001')
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3
result = getRightOfDecimal_1.getRightOfDecimal(6.4000000001);
if (result === '4000000001')
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4
result = getRightOfDecimal_1.getRightOfDecimal(-.4000000001);
if (result === '4000000001')
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5
result = getRightOfDecimal_1.getRightOfDecimal(4199111111221.111);
if (result === '111')
    console.log('test 5 passed');
else
    console.log('test 5 failed');
