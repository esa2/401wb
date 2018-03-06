'use strict'

class BinaryTree {
  constructor(root = null) {
    this.root = root
    this.compare = []
  }

  postOrderTraversal() {
    if (!this.root) return null
    this._postOrderTraversal(this.root)
  }

  _postOrderTraversal(root) {
    if (root === null) return null

    // visit left
    this._postOrderTraversal(root.left)
    if (root.left === null) {
      this.compare.push(null)
    } else {
      this.compare.push('left')
    }
    
    // visit right
    this._postOrderTraversal(root.right)
    if (root.left === null) {
      this.compare.push(null)
    } else {
      this.compare.push('left')
    }
    // visit root
    //console.log(`Visiting ${root.value}`)
  }
}

module.exports = BinaryTree
