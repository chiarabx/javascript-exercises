

describe('LongestWord function', () => {
  it('should exists', () => {
    expect(longestWord).toBeDefined();
    expect(typeof longestWord).toEqual('function');
  });

  it('should return first, longest word in passed string', () => {
    expect(longestWord('Hello there')).toEqual('Hello');
    expect(longestWord('My name is Adam')).toEqual('name');
    expect(longestWord('fun&!! time')).toEqual('time');
  });
});
