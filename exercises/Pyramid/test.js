

describe('Pyramin function', () => {
  beforeEach(() => {
    spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.calls.reset()
  });

  it('should exists', () => {
    expect(pyramid).toBeDefined();
    expect(typeof pyramid).toEqual('function');
  });

  it('should prints a pryamid when called with 2', () => {
    pyramid(2);
    expect(console.log.calls.argsFor(0)[0]).toEqual(' # ');
    expect(console.log.calls.argsFor(1)[0]).toEqual('###');
    expect(console.log.calls.count()).toEqual(2);
  });

  it('should prints a pryamid when called with 3', () => {
    pyramid(3);
    expect(console.log.calls.argsFor(0)[0]).toEqual('  #  ');
    expect(console.log.calls.argsFor(1)[0]).toEqual(' ### ');
    expect(console.log.calls.argsFor(2)[0]).toEqual('#####');
    expect(console.log.calls.count()).toEqual(3);
  });

  it('should prints a pryamid when called with 4', () => {
    pyramid(4);
    expect(console.log.calls.argsFor(0)[0]).toEqual('   #   ');
    expect(console.log.calls.argsFor(1)[0]).toEqual('  ###  ');
    expect(console.log.calls.argsFor(2)[0]).toEqual(' ##### ');
    expect(console.log.calls.argsFor(3)[0]).toEqual('#######');
    expect(console.log.calls.count()).toEqual(4);
  });
});
