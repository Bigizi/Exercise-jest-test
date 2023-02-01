import calculator from "./calculator";

const calc = new calculator();
describe('Addition operations', () => {
    it('should add 1+2 to return 3', () => {
      expect(calc.add(1, 2)).toBe(3);
    });
    it('should add 5+5+5 to be 15', () => {
      expect(calc.add(5, 5, 5)).toBe(15);
    });
    it('should add 10+20 to equal 30', () => {
      expect(calc.add(10, 20)).toEqual(30);
    });
  });
  
  describe('subtraction operations', () => {
    it('subtract 4-1 to be 3', () => {
      expect(calc.subtract(4, 1)).toBe(3);
    });
    it('should  subtract 1--1 to be 2', () => {
      expect(calc.subtract(1, -1)).toBe(2);
    });
    it('it should subtract 3-1-1 to equal 1', () => {
      expect(calc.subtract(3, 1, 1)).toEqual(1);
      expect(calc.subtract(3, 1, 1)).toBeGreaterThan(0);
    });
  });
  
  describe('multiplication operations', () => {
    it('should multiply 1*1 to be 1', () => {
      expect(calc.multiply(1, 1)).toBe(1);
    });
    it('should multiply 2*2*2 to be 8', () => {
      expect(calc.multiply(2, 2, 2)).toBe(8);
    });
    it('should multiply 3*3*3 to less than 30', () => {
      expect(calc.multiply(3, 3, 3)).toBeLessThan(30);
    });
  });
  
  describe('division operations', () => {
    it('should divide 2 by 2 to be 1', () => {
      expect(calc.divide(2, 2)).toBe(1);
    });
    it('should divide 1 by 3 tobe close to .3', () => {
      expect(calc.divide(1, 3)).toBeCloseTo(0.333);
    });
    it('should divide 27by 3 by 3 to equal 3', () => {
      expect(calc.divide(27, 3, 3)).toBe(3);
    });
  });