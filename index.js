const { Stack } = require('./classes/stack');

const stack = new Stack();

stack.push('Item 1');
console.log(stack.items);

stack.push('Item 2');
console.log(stack.items);

stack.peek();
console.log('Stack peek:', stack.peek());

stack.pop();
console.log(stack.items);

console.log('Stack size:', stack.size());
console.log('Stack peek:', stack.peek());