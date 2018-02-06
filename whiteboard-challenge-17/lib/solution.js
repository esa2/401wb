'use strict'

const solution = module.exports = {}

solution.findNodes = function(tree) {
  if (!tree || typeof tree !== 'object') return null
  let valTotal = 0
  tree.breadthFirst(current => {
    console.log(current.val.val)
    valTotal += current.val.val
  })
  console.log(valTotal)
  return valTotal
}
