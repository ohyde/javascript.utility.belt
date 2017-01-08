'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPrime = exports.fibonacci = exports.equalsZero = exports.lcm = exports.gcd = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _ramdaUtils = require('./ramdaUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// maths
var gcd = exports.gcd = function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
};
var lcm = exports.lcm = function lcm(a, b) {
  return a * b / gcd(a, b);
};
var equalsZero = exports.equalsZero = _ramda2.default.equals(_ramda2.default.__, 0);

var fibonacci = exports.fibonacci = function fibonacci(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
};

var isPrime = exports.isPrime = function isPrime(num) {
  if (_ramda2.default.or(_ramda2.default.lte(num, 1), equalsZero((0, _ramdaUtils.moduloTwo)(num)))) return false;
  if (num == 2) return true;

  var i = 3;
  while (i * i <= num) {
    if (num % i === 0) return false;else {
      i += 2;
    }
  }
  return true;
};