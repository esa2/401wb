'use strict'

const solution = module.exports = {}
const SLL = require('./sll')

solution.karySll = function(tree) {
  if (!tree || typeof tree !== 'object') return null

  let treeSll = new SLL()
  let root = true
  tree.breadthFirst(current => {
    root ? treeSll.insertHead(current.val.val) : treeSll.insertEnd(current.val.val)
    root = false
  })
  return treeSll
}
