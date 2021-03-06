'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotNil = exports.isObj = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObj = exports.isObj = _ramda2.default.is(Object);
var isNotNil = exports.isNotNil = _ramda2.default.complement(_ramda2.default.isNil);