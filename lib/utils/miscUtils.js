'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultToUndefined = exports.taplog = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var taplog = exports.taplog = _ramda2.default.tap(console.log);
var defaultToUndefined = exports.defaultToUndefined = _ramda2.default.defaultTo(undefined);