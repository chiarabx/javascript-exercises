

describe('Reverse function', () => {
  it('should exists', () => {
    expect(reverse).toBeDefined();
    expect(typeof reverse).toEqual('function');
  });

  it('should return passed string with the reversed order of characters', () => {
    expect(reverse('abcd')).toEqual('dcba');
    expect(reverse('  abcd')).toEqual('dcba  ');
  });
});
