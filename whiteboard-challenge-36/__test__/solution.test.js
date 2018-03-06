'use strict'

const solution = require('../lib/solution')
const BinaryTree = require('../lib/binary-tree')
const TreeNode = require('../lib/treeNode')

describe('Binary-tree Module', function() {
  describe('#Create object', function() {
    let binaryTree = new BinaryTree()
    it('should return an empty object', function() {
      expect(binaryTree).toBeInstanceOf(BinaryTree)
    })
  })
  describe('#Insert', function() {
    let one = new TreeNode(1)
    let binaryTree = new BinaryTree()
    binaryTree.root = one
    it('should return the root of the tree', function() {
      expect(binaryTree.root).toEqual({'left': null, 'right': null, 'value': 1})
    })
  })
  describe('#CompareTrees', function() {
    let one = new TreeNode(1)
    let two = new TreeNode(2)
    let three = new TreeNode(3)
    let four = new TreeNode(4)
    let five = new TreeNode(5)
    let six = new TreeNode(6)
    let seven = new TreeNode(7)
    let eight = new TreeNode(8)
    let nine = new TreeNode(9)
    let binaryTree = new BinaryTree()
    binaryTree.root = one
    one.left = two
    one.right = three
    two.left = six
    three.left = four
    three.right = five
    six.right = seven
    seven.left = eight
    seven.right = nine
    let binaryTree2 = new BinaryTree()
    binaryTree.root = one
    one.left = two
    one.right = three
    two.left = six
    three.left = five
    three.right = six
    it('should return null for missing arguments', function() {
      expect(solution.compareTrees()).toBe(null)
    })
    it('should return true for same tree structure', function() {
      expect(solution.compareTrees(binaryTree, binaryTree)).toBe(true)
    })
    it('should return false for different tree structure', function() {
      expect(solution.compareTrees(binaryTree, binaryTree2)).toBe(false)
    })
  })
})
