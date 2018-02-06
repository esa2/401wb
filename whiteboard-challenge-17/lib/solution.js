'use strict'

const solution = module.exports = {}

solution.findNodes = function(tree) {
  if (!tree || typeof tree !== 'object') return null
  let valTotal = 0
  tree.breadthFirst(current => {
    valTotal += current.val.val
  })
  return valTotal
}
