'use strict'

const solution = module.exports = {}
const SLL = require('./sll')

solution.findNodes = function(tree) {
  if (!tree || typeof tree !== 'object') return null

  let karySll = new SLL()
  let root = true
  tree.breadthFirst(current => {
    root ? karySll.insertHead(current.val.val) : karySll.insertEnd(current.val.val)
    root = false
  })
  return karySll
}
