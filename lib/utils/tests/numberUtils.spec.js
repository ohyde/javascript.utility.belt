'use strict';

var _index = require('index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('numberUtils', function () {
  describe("isEven", function () {
    it("should return true when 2 passed to it", function () {
      var result = _index2.default.isEven(2);
      expect(result).toEqual(true);
    });

    it("should return false when 3 passed to it", function () {
      var result = _index2.default.isEven(3);
      expect(result).toEqual(false);
    });
  });

  describe("isOdd", function () {
    it("should return false when 2 passed to it", function () {
      var result = _index2.default.isOdd(2);
      expect(result).toEqual(false);
    });

    it("should return true when 3 passed to it", function () {
      var result = _index2.default.isOdd(3);
      expect(result).toEqual(true);
    });
  });

  describe("moduloTwo", function () {
    it("should return 0 when 2 passed to it", function () {
      var result = _index2.default.moduloTwo(2);
      expect(result).toEqual(0);
    });

    it("should return 1 when 3 passed to it", function () {
      var result = _index2.default.moduloTwo(3);
      expect(result).toEqual(1);
    });
  });
});