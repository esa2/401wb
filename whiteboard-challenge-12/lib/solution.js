'use strict'

const solution = module.exports = {}
const Stack = require('../lib/stack')

solution.stackedQueue = (stackSize) => {
  if (!stackSize || typeof stackSize !== 'number') return null

  let stack1 = new Stack()
  let stack2 = new Stack()

  for (let i = 0; i < stackSize; i++) {
    stack1.push(i + 1)
  }

  for (let j = 0; j < stackSize; j++) {
    stack2.push(stack1.pop().value)
  }
  return stack2.top.value
}
