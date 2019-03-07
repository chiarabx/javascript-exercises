

describe('Queue class', () => {
  it('should be a class', () => {
    expect(Queue).toBeDefined();
    expect(typeof Queue.prototype.constructor).toEqual('function');
  });

  it('should be able to add elements to a queue', () => {
    const q = new Queue();
    expect(() => {
      q.add(1);
    }).not.toThrow();
  });

  it('should be able to remove elements from a queue', () => {
    const q = new Queue();
    expect(() => {
      q.add(1);
      q.remove();
    }).not.toThrow();
  });

  it('should have maintained order of its elements', () => {
    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
    expect(q.remove()).toEqual(3);
    expect(q.remove()).toEqual(undefined);
  });
});
