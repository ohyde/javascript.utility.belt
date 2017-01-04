'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPrime = exports.lcm = exports.gcd = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// maths
var gcd = exports.gcd = function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
};
var lcm = exports.lcm = function lcm(a, b) {
    return a * b / gcd(a, b);
};

var isPrime = exports.isPrime = function isPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
    if (num % 2 === 0) return false;

    var i = 3;
    while (i * i <= num) {
        if (num % i === 0) return false;else {
            i += 2;
        }
    }
    return true;
};