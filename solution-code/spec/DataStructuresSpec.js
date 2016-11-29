describe("Stack", function() {
  var stack;

  beforeEach (function() {
    stack = new StackDataStructure();
  });

  describe ("Stack properties", function () {
    it ("Should has an array to add the elements to the stack", function () {
      expect(Array.isArray(stack.stackControl)).toBe(true);
    });

    it ("Should has a max number of items to avoid the stack overflow", function () {
      expect(typeof(stack.MAX_SIZE)).toBe('number');
    });
  });

  describe ("Stack methods", function () {
    it ("Should has a method to check if the current stack is empty", function () {
      expect(typeof(stack.isEmpty)).toBe('function');
    });

    it ("Should has a method to check if we can push elements into the stack", function () {
      expect(typeof(stack.canPush)).toBe('function');
    });

    it ("Should has a method to push elements into the stack", function () {
      expect(typeof(stack.push)).toBe('function');
    });

    it ("Should has a method to take elements from the stack", function () {
      expect(typeof(stack.pop)).toBe('function');
    });
  });

  describe ("Stack methods default values", function () {
    it ("Should has an empty stack", function () {
      expect(stack.isEmpty()).toBe(true);
    });

    it ("Should be able to add a new element in the stack", function () {
      expect(stack.canPush()).toBe(true);
    });
  });

  describe ("Stack methods usage", function () {
    it ("Should add the indicated element to the stack", function () {
      stack.push(19);

      expect(stack.stackControl.length).toBe(1);
    });

    it ("Should return that stack is not empty when adding an element", function () {
      stack.push(19);

      expect(stack.isEmpty()).toBe(false);
    });

    it ("Should return the stack when an element is inserted", function () {
      expect(stack.push(19)).toEqual([19]);
    });

    it ("Should insert the elements in the received order", function () {
      stack.push(19);
      stack.push(88);

      expect(stack.stackControl).toEqual([19, 88]);
    });

    it ("Should return 'Stack Overflow' if the stack is full", function () {
      stack.MAX_SIZE = 1;
      stack.push(19);

      expect(stack.push(88)).toEqual("Stack Overflow");
    });

    it ("Should return false if the stack is full", function () {
      stack.MAX_SIZE = 1;
      stack.push(19);

      expect(stack.canPush()).toBe(false);
    });

    it ("Should return the last element inserted in the stack", function () {
      stack.push(19);
      stack.push(88);

      expect(stack.pop()).toBe(88);
    });

    it ("Should return 'Stack Underflow' if there are no elements in the stack", function () {
      expect(stack.pop()).toBe('Stack Underflow');
    });
  });
});

describe("Queues", function() {
  // declare variables

  beforeEach(function() {
    // initialize variables
  });

  describe("", function () {
    it("", function () {
      // code to be executed
    });
  });
});
