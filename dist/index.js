"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_float_1 = require("error-if-not-float");
// It's important this returns a string, mainly because it might return a set of
// digits that begin with leading zeros, for instance: '005'.  If this were converted
// to a number, Javascript would eliminate the leading zeros and return 5.
function getRightOfDecimal(num) {
    error_if_not_float_1.errorIfNotFloat(num);
    return (String(num).split('.')[1]);
}
exports.getRightOfDecimal = getRightOfDecimal;
