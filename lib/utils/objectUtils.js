'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathNotNil = exports.arrayPath = exports.propsDotPath = exports.dotPath = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dotPath = exports.dotPath = _ramda2.default.useWith(_ramda2.default.path, [_ramda2.default.split('.')]);
var propsDotPath = exports.propsDotPath = _ramda2.default.useWith(_ramda2.default.ap, [_ramda2.default.map(dotPath), _ramda2.default.of]);
var arrayPath = exports.arrayPath = function arrayPath(array, object) {
  return _ramda2.default.view(_ramda2.default.lensPath(array), object);
};

/** @function myFunction */
var pathNotNil = exports.pathNotNil = _ramda2.default.pathSatisfies(function (x) {
  return _index2.default.isNotNil(x);
});