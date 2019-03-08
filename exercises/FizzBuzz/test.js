

describe('FizzBuzz function', () => {
  beforeEach(() => {
    spyOn(console, 'log');
  })

  afterEach(() => {
    console.log.calls.reset()
  });

  it('should exists', () => {
    expect(fizzBuzz).toBeDefined();
    expect(typeof fizzBuzz).toEqual('function');
  });

  it('should prints out 5 statements when called with 5', () => {
    fizzBuzz(5);

    expect(console.log.calls.count()).toEqual(5);
  });

  it('should prints out the correct values', () => {
    fizzBuzz(15);

    expect(console.log.calls.argsFor(0)[0]).toEqual(1);
    expect(console.log.calls.argsFor(1)[0]).toEqual(2);
    expect(console.log.calls.argsFor(2)[0]).toEqual('fizz');
    expect(console.log.calls.argsFor(3)[0]).toEqual(4);
    expect(console.log.calls.argsFor(4)[0]).toEqual('buzz');
    expect(console.log.calls.argsFor(5)[0]).toEqual('fizz');
    expect(console.log.calls.argsFor(6)[0]).toEqual(7);
    expect(console.log.calls.argsFor(7)[0]).toEqual(8);
    expect(console.log.calls.argsFor(8)[0]).toEqual('fizz');
    expect(console.log.calls.argsFor(9)[0]).toEqual('buzz');
    expect(console.log.calls.argsFor(10)[0]).toEqual(11);
    expect(console.log.calls.argsFor(11)[0]).toEqual('fizz');
    expect(console.log.calls.argsFor(12)[0]).toEqual(13);
    expect(console.log.calls.argsFor(13)[0]).toEqual(14);
    expect(console.log.calls.argsFor(14)[0]).toEqual('fizzbuzz');
  });
});
