import { expect } from 'chai';
import jub from '../../src/index';

describe('numberUtils', () => {
  describe("isEven", () => {
    it("should return true when 2 passed to it", () => {
      const result = jub.isEven(2);
      expect(result).to.equal(true);
    });

    it("should return false when 3 passed to it", () => {
      const result = jub.isEven(3);
      expect(result).to.equal(false);
    });
  });

  describe("isOdd", () => {
    it("should return false when 2 passed to it", () => {
    	const result = jub.isOdd(2);
      expect(result).to.equal(false);
    });

    it("should return true when 3 passed to it", () => {
    	const result = jub.isOdd(3);
      expect(result).to.equal(true);
    });
  });

  describe("moduloTwo", () => {
    it("should return 0 when 2 passed to it", () => {
    	const result = jub.moduloTwo(2);
      expect(result).to.equal(0);
    });

    it("should return 1 when 3 passed to it", () => {
    	const result = jub.moduloTwo(3);
      expect(result).to.equal(1);
    });
  });
})
