import jub from 'index';

describe('arrayUtils', () => {
  describe("arrGt", () => {
    it("should return true the length of the array is greater than 0 if no second parameter is passed", () => {
      const result = jub.arrGt(null, [1,2,3,4]);
      expect(result).toEqual(true);
    });

    it("should return true the length of the array is greater than 4 if 4 is passed as the second paramter", () => {
      const result = jub.arrGt(4, [1,2,3,4,5]);
      expect(result).toEqual(true);
    });

    it("should return false if the length of the array is less than the second parameter number", () => {
      const result = jub.arrGt(5, [1,2,3,4]);
      expect(result).toEqual(false);
    });

    it("should return false if the length of the array is equal to the second parameter number", () => {
      const result = jub.arrGt(5, [1,2,3,4,5]);
      expect(result).toEqual(false);
    });
  });
})
