'use strict'

const TreeNode = require('../lib/kary-tree')
const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#findNodes', function() {
    it('should return null if no arguments passed', function() {
      expect(solution.findNodes()).toEqual(null)
    })
  })
  describe('#FindNodes', function() {
    let treeNode = new TreeNode()
    it('should return an object', function() {
      expect(treeNode).toBeInstanceOf(TreeNode)
    })
  })
  
  describe('#FindNodes', function() {
    let tree = new TreeNode()
    tree.insert(10)
    tree.insert(20, 10)
    tree.insert(25, 20)
    tree.insert(5, 10)
    tree.insert(1, 5)
    tree.insert(2, 5)
    tree.insert(3, 5)
    it('should return the node with most children: 5', function() {
      expect(solution.findNodes(tree)).toEqual(5)
    })
  })
})
