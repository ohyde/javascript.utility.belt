'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapping = function mapping(f) {
  return function (reducing) {
    return function (result, input) {
      return reducing(result, f(input));
    };
  };
}; // https://medium.com/@roman01la/understanding-transducers-in-javascript-3500d3bd9624

var filtering = function filtering(predicate) {
  return function (reducing) {
    return function (result, input) {
      return predicate(input) ? reducing(result, input) : result;
    };
  };
};

var xform = _ramda2.default.compose(mapping(function (x) {
  return x + 1;
}), filtering(function (x) {
  return x % 2 === 0;
}));

transduce(xform, function (xs, x) {
  xs.push(x);
  return xs;
}, [], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// [2, 4, 6, 8, 10]

transduce(xform, function (sum, x) {
  return sum + x;
}, 0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);