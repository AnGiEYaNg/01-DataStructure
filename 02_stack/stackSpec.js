describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });

  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push instanceof Function).toBeTruthy();
    expect(stack.pop instanceof Function).toBeTruthy();
    expect(stack.size instanceof Function).toBeTruthy();
  });

  it('a new stack should be empty', function() {
    expect(stack.size()).toEqual(0);
  });

  it('should return size 1 after push', function() {
    stack.push('zero');
    expect(stack.size()).toEqual(1);
  });

  it('should return undefined when popping an empty stack', function () {
    expect(stack.pop()).toEqual(undefined);
  })
  
  it('should return size 0 after a push and pop', function() {
    stack.push('zero');
    stack.pop();
    expect(stack.size()).toEqual(0);
  });

  it('should remove popped items from the top of the stack', function() {
    stack.push('zero');
    expect(stack.pop()).toEqual('zero');
  });

  it('should push and pop multiple items in the right order (LIFO)', function() {
    stack.push('zero');
    expect(stack.pop()).toEqual('zero');
    stack.push('zero');
    stack.push('one');
    stack.push('two');
    stack.push('three');
    expect(stack.pop()).toEqual('three');
    expect(stack.pop()).toEqual('two');
  });

  it('can count elements in stack by traversing the whole stack', function() {
    stack.push('first pancake');
    stack.push('second pancake');
    stack.push('third pancake');
    stack.pop(); //eat pancake
    stack.push('fourth pancake');
    expect(stack.auditStorage()).toEqual(stack.size());
  });
});
