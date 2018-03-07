'use strict'

const solution = module.exports = {}

class SllNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SLL {
  constructor() {
    this.head = null
  }
}

var arr
var sll

solution.buildSll = bst => {
  arr = []
  sll = new SLL()
  inOrderTraversal(bst.root)
  arr.sort((a, b) => a - b)
  arr.map(ele => insertSllNode(ele))
  return sll
}

function inOrderTraversal(root) {
  if(root === null) return null

  inOrderTraversal(root.left)
  arr.push(root.value)
  inOrderTraversal(root.right)
}

function insertSllNode(val) {
  let nd = new SllNode(val)
  nd.next = sll.head
  sll.head = nd
}
