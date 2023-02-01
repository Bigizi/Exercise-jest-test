import stringLength from "./stringlen";

test('should check the length of "hello" and return 5', () => {
    expect(stringLength('bigizi')).toBe(6);
  });
test('Should throw an error when we chech "bigizinduwayo"', () => {
    expect(() => stringLength('bigizinduwayo')).toThrow();
  });