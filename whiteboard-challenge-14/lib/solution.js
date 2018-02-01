'use strict'

const solution = module.exports = {}
const Stack = require('../lib/stack')
const Sll = require('../lib/sll')

solution.dedupSll = (sllHead) => {
  if (!sllHead) return null
  let stack = new Stack()
  let sll = new Sll()
  var size = 0

  stack.push(sllHead.head.value)
  for (var itr = sllHead.head.next; itr.next; itr = itr.next) {
    if (itr.value !== stack.top.value) {
      stack.push(itr.value)
      size++
    }
  }
  stack.push(itr.value)
  size++

  sll.insertHead(stack.top.value)
  for (let i = 0; i < size; i++) {
    stack.pop()
    sll.insertHead(stack.top.value)
  }
  return sll
}
