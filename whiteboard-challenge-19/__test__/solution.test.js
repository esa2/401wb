'use strict'

const TreeNode = require('../lib/kary-tree')
const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#findNodes', function() {
    it('should return null if no arguments passed', function() {
      expect(solution.karySll()).toEqual(null)
    })
  })
  describe('#FindNodes', function() {
    let treeNode = new TreeNode()
    it('should return an instance of tree', function() {
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
    it('should return an SLL with all nodes and children from a k-ary tree', function() {
      expect(solution.karySll(tree)).toEqual({'head': {'next': {'next': {'next': {'next': {'next': {'next': {'next': null, 'value': 3}, 'value': 2}, 'value': 1}, 'value': 25}, 'value': 5}, 'value': 20}, 'value': 10}})
    })
  })
})
