'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrGt = exports.mapIndexed = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapIndexed = exports.mapIndexed = _ramda2.default.addIndex(_ramda2.default.map);

var arrGt = exports.arrGt = function arrGt(arr) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return _ramda2.default.gt(_ramda2.default.length(arr), num);
};

// export const isNotEmptyArray = R.allPass([arrGt, R.isArrayLike]);
// export const isObjValidWithKeys = (obj, keys) => {
//   return isObj(obj) && R.reduce((acc, x) => {
//     if (R.not(acc)) return false;
//     return R.has(x, obj);
//   }, true, keys);
// }