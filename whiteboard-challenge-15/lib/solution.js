'use strict'

const solution = module.exports = {}

solution.findNodes = function(tree) {
  if (!tree || typeof tree !== 'object') return null

  let emptyNester = []
  tree.breadthFirst(current => {
    if (current.val.children.length === 0) {
      emptyNester.push(current.val)
      console.log(emptyNester)
    }
  })
  return emptyNester
}
