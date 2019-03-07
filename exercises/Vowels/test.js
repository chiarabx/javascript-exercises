

describe('Vowels function', () => {
  it('should exists', () => {
    expect(vowels).toBeDefined();
    expect(typeof vowels).toEqual('function');
  });

  it('should return correct number of vowels in given string', () => {
    expect(vowels('aeiou')).toEqual(5);
    expect(vowels('Adam')).toEqual(2);
    expect(vowels('Hello there!')).toEqual(4);
  });
});
