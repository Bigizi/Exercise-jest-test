import capitalize from "./capitalize";

it('should capitalize goood to good', () => {
    expect(capitalize('bigiz')).toMatch(/Bigiz/);
  });
  it('should throw error when an interger is passed as an argument', () => {
    expect(() => capitalize('123')).toThrow();
  });