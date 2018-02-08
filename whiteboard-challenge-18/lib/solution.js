'use strict'

const solution = module.exports = {}

solution.findNodes = function(tree) {
  if (!tree || typeof tree !== 'object') return null
  let childCount = 0
  let mostChildren = []

  tree.breadthFirst(current => {
    if (childCount === 0) mostChildren.push(current.val)
    if (current.val.children.length > childCount) {
      mostChildren.push(current.val.val)
      childCount = current.val.children.length
    }
  })
  return mostChildren[mostChildren.length - 1]
}
