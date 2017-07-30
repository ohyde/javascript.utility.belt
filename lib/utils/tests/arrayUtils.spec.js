'use strict';

var _index = require('index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('arrayUtils', function () {
  describe("arrGt", function () {
    it("should return true the length of the array is greater than 0 if no second parameter is passed", function () {
      var result = _index2.default.arrGt(null, [1, 2, 3, 4]);
      expect(result).toEqual(true);
    });

    it("should return true the length of the array is greater than 4 if 4 is passed as the second paramter", function () {
      var result = _index2.default.arrGt(4, [1, 2, 3, 4, 5]);
      expect(result).toEqual(true);
    });

    it("should return false if the length of the array is less than the second parameter number", function () {
      var result = _index2.default.arrGt(5, [1, 2, 3, 4]);
      expect(result).toEqual(false);
    });

    it("should return false if the length of the array is equal to the second parameter number", function () {
      var result = _index2.default.arrGt(5, [1, 2, 3, 4, 5]);
      expect(result).toEqual(false);
    });
  });
});