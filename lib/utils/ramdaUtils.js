'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOdd = exports.isEven = exports.mapIndexed = exports.moduloTwo = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduloTwo = exports.moduloTwo = _ramda2.default.flip(_ramda2.default.modulo)(2);
var mapIndexed = exports.mapIndexed = _ramda2.default.addIndex(_ramda2.default.map);
var isEven = exports.isEven = _ramda2.default.compose(_ramda2.default.equals(0), moduloTwo);
var isOdd = exports.isOdd = _ramda2.default.compose(_ramda2.default.gt(_ramda2.default.__, 0), moduloTwo);