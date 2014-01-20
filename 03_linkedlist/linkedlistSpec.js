describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = new LinkedList();
  });

  it("should have methods named 'addToTail', 'removeHead', and 'search'", function() {
    expect(linkedList.addToTail instanceof Function).toBeTruthy();
    expect(linkedList.removeHead instanceof Function).toBeTruthy();
    expect(linkedList.search instanceof Function).toBeTruthy();
  });
  
  it("should start out with head and tail undefined", function () {
    expect(linkedList.head).toEqual(undefined);
    expect(linkedList.tail).toEqual(undefined);
    expect(linkedList.removeHead()).toEqual(undefined);
  });
  
  it("should not add an undefined node", function() {
    expect(linkedList.addToTail()).toEqual(undefined);
  });

  it("if a single node is added to tail, it should be set to head and tail", function() {
    linkedList.addToTail('first node');
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("if a single node is added to head, it should be set to head and tail", function() {
    linkedList.addToHead('first');
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should return the head on a removeHead", function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.addToTail('third');
    expect(linkedList.removeHead()).toEqual('first');
    expect(linkedList.removeHead()).toEqual('second');
    expect(linkedList.removeHead()).toEqual('third');
  });

  it("should make sure the previous of any newly appointed HEAD is null", function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.addToTail('third');
    expect(linkedList.removeHead()).toEqual('first');
    expect(linkedList.head.previous).toEqual(null);
  });

  it("should make sure the next of any newly appointed TAIL is null", function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.addToTail('third');
    expect(linkedList.removeTail()).toEqual('third');
    expect(linkedList.tail.next).toEqual(null);
  });

  it("should be able to add to head or tail", function() {
    linkedList.addToTail('second');
    linkedList.addToHead('first');
    linkedList.addToTail('third');
    expect(linkedList.removeHead()).toEqual('first');
    expect(linkedList.removeHead()).toEqual('second');
    expect(linkedList.removeHead()).toEqual('third');
  });

  it("should return the tail on a removeTail", function() {
    linkedList.addToTail('second');
    linkedList.addToHead('third');
    linkedList.addToTail('first');
    expect(linkedList.removeTail()).toEqual('first');
    expect(linkedList.removeTail()).toEqual('second');
    expect(linkedList.removeTail()).toEqual('third');
  });

  it("should remove head and tail when last node is removed", function() {
    expect(linkedList.removeHead()).toEqual(undefined);
    linkedList.addToTail('one');
    expect(linkedList.removeHead()).toEqual('one');
    expect(linkedList.removeHead()).toEqual(undefined);
    expect(linkedList.head).toEqual(undefined);
    expect(linkedList.tail).toEqual(undefined);
  });

  it("should return the correct values for search", function() {
    linkedList.addToTail('one');
    linkedList.addToTail('two');
    linkedList.addToTail('three');
    linkedList.addToTail('four');
    linkedList.addToTail('one');
    expect(linkedList.search('two')).toEqual(true);
    expect(linkedList.search('sdd')).toEqual(false);
    expect(linkedList.search('one')).toEqual(true);
    expect(linkedList.search('four')).toEqual(true);
  });

});
