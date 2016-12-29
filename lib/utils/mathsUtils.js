'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lcm = exports.gcd = undefined;

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