'use strict'

const solution = module.exports = {}

solution.compareTrees = (tree1, tree2) => {
  if (!tree1 || !tree2) return null
  tree1.postOrderTraversal()
  tree2.postOrderTraversal()
  return tree1.compare === tree2.compare ? true : false
}
