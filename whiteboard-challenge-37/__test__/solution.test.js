'use strict'

const BST = require('../lib/binary-tree')
const solution = require('../lib/solution')

class TreeNode {
  constructor(value, left=null, right=null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

describe('Binary-tree Module', function() {
  describe('#Create tree', function() {
    let bst = new BST()
    it('should return an empty tree', function() {
      expect(bst).toBeInstanceOf(BST)
    })
  })
  describe('#Binary-tree insert', function() {
    let bst = new BST()
    bst.insert(new TreeNode(5))
    it('should return the root of the tree', function() {
      expect(bst.root).toEqual({'left': null, 'right': null, 'value': 5})
    })
  })
})
describe('Solution Module', function() {
  describe('#BuildSll', function() {
    let bst = new BST()
    bst.insert(new TreeNode(5))
    bst.insert(new TreeNode(2))
    bst.insert(new TreeNode(8))
    bst.insert(new TreeNode(16))
    bst.insert(new TreeNode(20))
    bst.insert(new TreeNode(26))
    it('should return a sorted SLL from tree with unique values', function() {
      expect(solution.buildSll(bst)).toEqual({'head': {'next': {'next': {'next': {'next': {'next': {'next': null, 'value': 2}, 'value': 5}, 'value': 8}, 'value': 16}, 'value': 20}, 'value': 26}})
    })
  })
  describe('#BuildSll', function() {
    let bst = new BST()
    bst.insert(new TreeNode(5))
    bst.insert(new TreeNode(2))
    bst.insert(new TreeNode(8))
    bst.insert(new TreeNode(16))
    bst.insert(new TreeNode(20))
    bst.insert(new TreeNode(8))
    bst.insert(new TreeNode(8))
    bst.insert(new TreeNode(99))
    bst.insert(new TreeNode(2))
    it('should return a sorted SLL from tree with duplicate values', function() {
      expect(solution.buildSll(bst)).toEqual({'head': {'next': {'next': {'next': {'next': {'next': {'next': {'next': {'next': {'next': null, 'value': 2}, 'value': 2}, 'value': 5}, 'value': 8}, 'value': 8}, 'value': 8}, 'value': 16}, 'value': 20}, 'value': 99}})
    })
  })
})
