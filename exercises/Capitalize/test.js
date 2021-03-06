

describe('Capitalize function', () => {
  it('should exists', () => {
    expect(capitalize).toBeDefined();
    expect(typeof capitalize).toEqual('function');
  });

  it('should capitalize the first letter of every word passed string', () => {
    expect(capitalize('hi there, how is it going?')).toEqual(
      'Hi There, How Is It Going?',
    );
    expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
      'I Love Breakfast At Bill Miller Bbq',
    );
  });
});
