

describe('Steps function', () => {
  beforeEach(() => {
    spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.calls.reset();
  });

  it('should exists', () => {
    expect(steps).toBeDefined();
    expect(typeof steps).toEqual('function');
  });

  it('should prints steps when called with 1', () => {
    steps(1);
    expect(console.log.calls.argsFor(0)[0]).toEqual('#');
    expect(console.log.calls.count()).toEqual(1);
  });

  it('should prints steps when called with 2', () => {
    steps(2);
    expect(console.log.calls.argsFor(0)[0]).toEqual('# ');
    expect(console.log.calls.argsFor(1)[0]).toEqual('##');
    expect(console.log.calls.count()).toEqual(2);
  });

  it('should prints steps when called with 3', () => {
    steps(3);
    expect(console.log.calls.argsFor(0)[0]).toEqual('#  ');
    expect(console.log.calls.argsFor(1)[0]).toEqual('## ');
    expect(console.log.calls.argsFor(2)[0]).toEqual('###');
    expect(console.log.calls.count()).toEqual(3);
  });
});
